import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Özellikler', href: '#features' },
  { label: 'Paketler', href: '#pricing' },
  { label: 'Maliyet', href: '#cost-calc' },
  { label: 'Karşılaştırma', href: '#comparison' },
  { label: 'SSS', href: '#faq' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold flex items-center gap-2 group" onClick={(e) => scrollToSection(e, '#hero')}>
          <div className="w-8 h-8 bg-gradient-to-tr from-telegram to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <span className="tracking-tight">WE1<span className="text-telegram"> SERP</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-telegram transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://we1.town/kategori/serp"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-telegram hover:bg-blue-500 text-white rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-telegram/40"
          >
            Satın Al
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-300 hover:text-telegram py-2"
            >
              {item.label}
            </a>
          ))}
          <a href="https://we1.town/kategori/serp" className="text-center bg-telegram py-3 rounded-xl font-bold">
            Satın Al
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;