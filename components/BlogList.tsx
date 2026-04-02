import React from 'react';
import { useLanguage } from '../LanguageContext';
import { blogPosts } from '../data/blogPosts';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const BlogList: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="blog" className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{t.blog.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const content = post.translations[language as 'it' | 'en'];
            return (
              <article 
                key={post.slug} 
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={content.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString(language === 'it' ? 'it-IT' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3 leading-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {content.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    {content.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                  >
                    {t.blog.readMore}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        
        {blogPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">{t.blog.noPosts}</p>
          </div>
        )}
      </div>
    </section>
  );
};
