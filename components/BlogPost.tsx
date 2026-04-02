import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { blogPosts } from '../data/blogPosts';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
    <article className="pt-24 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          {t.blog.backToList}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <Calendar size={16} />
            <span>{t.blog.postedOn} {new Date(post.date).toLocaleDateString(language === 'it' ? 'it-IT' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
            {content.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video">
          <img 
            src={post.image} 
            alt={content.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* Footer / Share */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <button 
            onClick={handleShare}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            <Share2 size={18} />
            Share
          </button>
          
          <Link 
            to="/blog" 
            className="text-primary font-bold hover:underline"
          >
            {t.blog.backToList}
          </Link>
        </div>
      </div>
    </article>
  );
};
