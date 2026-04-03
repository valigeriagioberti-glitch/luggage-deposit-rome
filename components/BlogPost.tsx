import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { blogPosts } from '../data/blogPosts';
import { Calendar, ArrowLeft, Share2, Clock } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">{t.blog.noPosts}</h1>
        <Link to="/blog" className="text-primary font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={18} />
          {t.blog.backToList}
        </Link>
      </div>
    );
  }

  const content = post.translations[language as 'it' | 'en'];

  // Calculate reading time (approx 200 words per minute)
  const wordCount = content.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content.title,
        text: content.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-12 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t.blog.backToList}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-400 mb-6 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>{new Date(post.date).toLocaleDateString(language === 'it' ? 'it-IT' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-dark leading-tight mb-8 tracking-tight">
            {content.title}
          </h1>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed pl-8 font-medium italic">
              {content.excerpt}
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 aspect-video relative group">
          <img 
            src={post.image} 
            alt={content.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div 
          className="prose max-w-none prose-headings:text-dark prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-dark prose-strong:font-bold prose-img:rounded-3xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* Footer / Share */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Share this story</span>
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Share2 size={18} />
              {language === 'it' ? 'Condividi' : 'Share'}
            </button>
          </div>
          
          <Link 
            to="/blog" 
            className="text-primary font-bold hover:text-primary-hover flex items-center gap-2 group"
          >
            {t.blog.backToList}
            <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};
