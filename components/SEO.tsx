import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { blogPosts } from '../data/blogPosts';

export const SEO: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const t = translations[language];

  const siteName = "Luggage Deposit Rome";
  const baseUrl = "https://www.luggagedepositrome.com";
  
  let title = `Luggage Storage Rome Termini - From €5/day | Luggage Deposit Rome`;
  let description = `Secure luggage storage in Rome Termini from €5/day. All bag sizes accepted, fast drop-off, free cancellation. Book online in seconds with Luggage Deposit Rome.`;
  let url = baseUrl;
  let imageUrl = "https://cdn.shopify.com/s/files/1/0753/8144/0861/files/cropped-Untitled-design-2025-09-11T094640.576_1.png?v=1765462614&width=160&format=webp";
  let ogType = "website";

  // Blog List Page
  if (location.pathname === '/blog') {
    title = `${t.blog.title} | ${siteName}`;
    description = t.blog.subtitle;
    url = `${baseUrl}/blog`;
  }

  // Blog Post Page
  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      const content = post.translations[language as 'it' | 'en'];
      title = `${content.title} | ${siteName}`;
      description = content.excerpt;
      url = `${baseUrl}/blog/${slug}`;
      imageUrl = post.image;
      ogType = "article";
    }
  }

  // Structured Data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": imageUrl,
    "@id": url,
    "url": url,
    "telephone": "+39064469214",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Gioberti 42",
      "addressLocality": "Rome",
      "postalCode": "00185",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8992,
      "longitude": 12.5011
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:30",
      "closes": "22:30"
    },
    "sameAs": [
      "https://www.facebook.com/luggagedepositrome",
      "https://www.instagram.com/luggagedepositrome"
    ],
    "priceRange": "€",
    "description": "Secure luggage storage just 2 minutes from Roma Termini station. Safe, monitored, and open every day."
  };

  // Structured Data for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <html lang={language} />

      {/* Multilingual Support (Hreflang) */}
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}/it`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="keywords" content="luggage storage rome, roma termini luggage deposit, bag drop rome, secure luggage storage rome, via gioberti 42 luggage" />
    </Helmet>
  );
};
