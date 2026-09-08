import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  onOpenProfileModal?: () => void;
}

export default function Navbar({ onOpenProfileModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'education', label: 'Education' },
    { id: 'focus', label: 'Focus' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#051424]/90 backdrop-blur-md border-[#464554]/25 shadow-lg'
          : 'bg-[#051424]/80 backdrop-blur-md border-[#464554]/15'
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('home')}
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
            aria-label="Aabhash Singh Home"
          >
            <span className="font-headline-md text-headline-md text-[#d4e4fa] group-hover:text-[#c0c1ff] transition-colors tracking-tight font-medium">
              {PERSONAL_INFO.name}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bd0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7bd0ff]"></span>
              </span>
              <span className="font-label-caps text-label-caps text-[#c7c4d7] uppercase tracking-wider">
                B.Tech CSE • AI &amp; Data Science
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-1.5"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-all font-body-md text-body-md px-3 py-1.5 rounded-lg cursor-pointer ${
                  isActive
                    ? 'bg-[#1c2b3c] text-[#d4e4fa] font-medium shadow-sm'
                    : 'text-[#c7c4d7] hover:text-[#d4e4fa] hover:bg-[#1c2b3c]/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center justify-center font-headline-md text-body-md bg-[#c0c1ff] text-[#1000a9] hover:bg-[#8083ff] hover:text-[#0d0096] px-4 py-2 rounded-lg transition-all duration-200 shadow-[0_0_16px_rgba(192,193,255,0.2)] font-medium cursor-pointer"
          >
            Let&apos;s Talk
          </button>

          <button
            onClick={onOpenProfileModal}
            className="w-8 h-8 rounded-full bg-[#c0c1ff] hover:bg-[#8083ff] text-[#1000a9] hover:text-[#0d0096] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-sm focus:outline-none"
            title="View Academic & Engineering Identity"
            aria-label="View Student Card"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#1c2b3c] text-[#d4e4fa] flex items-center justify-center cursor-pointer border border-[#464554]/30"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#051424]/95 backdrop-blur-xl border-b border-[#464554]/30 px-5 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded-lg font-body-md transition-all ${
                  activeSection === link.id
                    ? 'bg-[#1c2b3c] text-[#d4e4fa] font-medium'
                    : 'text-[#c7c4d7] hover:bg-[#1c2b3c]/40 hover:text-[#d4e4fa]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-[#464554]/20 flex items-center justify-between">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-center bg-[#c0c1ff] text-[#1000a9] py-2 rounded-lg font-medium text-body-md"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
