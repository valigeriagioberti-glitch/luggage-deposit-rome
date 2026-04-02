export interface BlogPost {
  slug: string;
  date: string;
  image: string;
  translations: {
    it: {
      title: string;
      excerpt: string;
      content: string;
    };
    en: {
      title: string;
      excerpt: string;
      content: string;
    };
  };
}
