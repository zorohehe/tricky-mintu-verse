
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import GlitchText from './GlitchText';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Social', href: '#social' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-cyber-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-cyber-green text-2xl font-orbitron font-bold">
          <span className="text-cyber-purple">&lt;</span>
          TRICKY
          <span className="text-cyber-blue">MINTU</span>
          <span className="text-cyber-purple">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-rajdhani text-gray-300 hover:text-cyber-purple transition-colors relative group"
            >
              <span className="group-hover:animate-text-glitch">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-cyber-purple focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-cyber-dark/90 backdrop-blur-lg shadow-lg py-4 px-6 space-y-4 transform transition-transform duration-300 md:hidden',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block font-rajdhani text-gray-300 hover:text-cyber-purple py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <GlitchText 
              text={link.name} 
              hoverEffect={true} 
              intensity="low"
              className="font-semibold"
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
