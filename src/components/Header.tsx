import React from 'react';

export const Header: React.FC = () => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-black/10 transition-all duration-200"
    >
      <div className="w-full max-w-4xl mx-auto px-0.5 sm:px-1.5 md:px-2 py-3 sm:py-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="block w-full focus:outline-none group text-center"
          id="brand-logo"
        >
          <h1 className="font-display text-[8.6vw] sm:text-[3.95rem] md:text-[5.05rem] lg:text-[5.85rem] font-black tracking-tighter text-black uppercase select-none transition-opacity group-hover:opacity-75 leading-none text-center whitespace-nowrap">
            MARINA BUHANCEVA
          </h1>
        </a>
      </div>
    </header>
  );
};
