import React from 'react';

export const Header: React.FC = () => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-black/10 transition-all duration-200"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center w-full focus:outline-none group text-center"
          id="brand-logo"
        >
          <h1 className="font-display text-[7.8vw] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.75rem] font-black tracking-tighter text-black uppercase select-none transition-opacity group-hover:opacity-75 leading-none text-center whitespace-nowrap mx-auto">
            MARINA BUHANCEVA
          </h1>
        </a>
      </div>
    </header>
  );
};
