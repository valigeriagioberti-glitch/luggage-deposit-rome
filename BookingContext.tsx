import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isFullScreen: boolean;
  setIsFullScreen: (value: boolean) => void;
  toggleFullScreen: () => void;
  expandIfMobile: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isFullScreen, setIsFullScreenState] = useState(false);

  const setIsFullScreen = (value: boolean) => {
    setIsFullScreenState(value);
    if (value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const expandIfMobile = () => {
    // Check for mobile/tablet width (standard lg breakpoint is 1024px)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsFullScreen(true);
    }
  };

  return (
    <BookingContext.Provider value={{ isFullScreen, setIsFullScreen, toggleFullScreen, expandIfMobile }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};