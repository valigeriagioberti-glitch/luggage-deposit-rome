export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatarUrl: string;
}

export interface PriceOption {
  duration: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PricingTier {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly'
}

export type Language = 'it' | 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Using any for the translation object to keep types simple for this file structure
}