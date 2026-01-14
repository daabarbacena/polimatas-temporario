import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'how-it-works', 'cases', 'team', 'compare', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          // If we're in contact section, don't highlight any nav item (contact has its own button)
          if (id === 'contact') {
            setActiveSection('');
          } else {
            setActiveSection(id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'how-it-works', label: 'Como funciona' },
    { id: 'cases', label: 'Casos' },
    { id: 'team', label: 'Quem somos' },
    { id: 'compare', label: 'Comparações' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      onAnimationComplete={() => setAnimationDone(true)}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Outer wrapper that narrows when scrolled (adds external margins) */}
        <div
          style={{
            marginLeft: isScrolled ? '3vw' : 0,
            marginRight: isScrolled ? '3vw' : 0,
            transition: 'margin 1.5s cubic-bezier(.2,.9,.2,1)',
          }}
        >
        {/* Inner box that receives the border and backdrop when scrolled (only after entrance animation) */}
        <div
          style={{
            borderRadius: isScrolled ? 12 : 0,
            border: isScrolled && animationDone ? '1px solid rgba(255,255,255,0.08)' : 'none',
            background: isScrolled && animationDone ? 'rgba(0,0,0,0.45)' : 'transparent',
            backdropFilter: isScrolled && animationDone ? 'blur(6px)' : 'none',
            transition: 'all 1.5s cubic-bezier(.2,.9,.2,1)',
          }}
        >
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center">
              <motion.div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')} whileHover={{ scale: 1.02 }}>
                <img src="/images/logo.png" alt="Polímatas AI Logo" className="h-10 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="text-lg font-light tracking-tight text-white">Polímatas</span>
                </div>
              </motion.div>
            </div>

            {/* Right-side wrapper: nav pills + Contato + mobile menu (keeps two main children for justify-between) */}
            <div className="flex items-center gap-6 ml-auto">
              <nav className="hidden lg:flex items-center gap-6">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-light transition-all ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`} style={{ 
                      padding: '6px 12px',
                      borderRadius: '6px',
                      background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      boxShadow: isActive ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none',
                      transition: 'all 0.3s ease',
                    }}>
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="hidden lg:block">
                <button onClick={() => scrollToSection('contact')} className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                  Contato
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button className="text-white" onClick={() => setIsMobileMenuOpen(v => !v)}>
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }} className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { scrollToSection(item.id); setIsMobileMenuOpen(false); }} className="text-left text-sm text-gray-300 py-2">
                  {item.label}
                </button>
              ))}
              <button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="mt-2 px-4 py-2 bg-white text-black rounded-full text-sm w-max">Contato</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
