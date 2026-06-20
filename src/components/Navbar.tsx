import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-red-500 group-hover:rotate-12 transition-transform" />
          <span className="font-display font-[900] text-[24px] tracking-[-1px] text-white">
            HOUSE<span className="text-red-500">OF</span>STRENGTH
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] uppercase tracking-[1px] font-[600] text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-[32px] py-[12px] uppercase tracking-[1px] font-[700] transition-colors border-none"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-neutral-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-neutral-300 hover:text-white transition-colors py-2 border-b border-neutral-800/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors text-center mt-2 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
