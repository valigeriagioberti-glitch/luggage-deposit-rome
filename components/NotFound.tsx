import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Home as HomeIcon } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.notFound.title}</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          {t.notFound.subtitle}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <HomeIcon size={20} />
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
};
