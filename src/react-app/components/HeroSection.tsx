import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { HeroMeshBackground } from './ui/hero-mesh-background';

export default function HeroSection() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const firstLineRef = useRef<HTMLSpanElement | null>(null);
  const secondLineRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrapper1 = firstLineRef.current;
    const wrapper2 = secondLineRef.current;
    const letters: HTMLElement[] = [];
    if (wrapper1) letters.push(...Array.from(wrapper1.querySelectorAll('.hero-letter')) as HTMLElement[]);
    if (wrapper2) letters.push(...Array.from(wrapper2.querySelectorAll('.hero-letter')) as HTMLElement[]);

    if (!letters.length) return;

    const threshold = 160; // px radius for proximity effect

    const handleMove = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;

      letters.forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let proximity = Math.max(0, 1 - dist / threshold);

        // Apply transform and darkness based on proximity
        const translateY = -6 * proximity; // up to -6px
        const scale = 1 + 0.06 * proximity; // up to 1.06
        const brightness = 1 - 0.5 * proximity; // down to 50%

        el.style.transform = `translateY(${translateY}px) scale(${scale})`;
        el.style.filter = `brightness(${brightness})`;
      });
    };

    const handleLeave = () => {
      letters.forEach((el) => {
        el.style.transform = '';
        el.style.filter = '';
      });
    };

    const parent = wrapper1?.closest('h1') ?? wrapper2?.closest('h1') ?? wrapper1?.parentElement ?? wrapper2?.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMove);
      parent.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMove);
        parent.removeEventListener('mouseleave', handleLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Mesh Gradient Background */}
      <HeroMeshBackground speed={0.6} />

      <motion.div
        className="container mx-auto px-6 z-30 text-center relative max-w-[1100px]"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-[1.60rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold md:font-light mb-[3.75rem] md:mb-8 text-white tracking-tight">
            <motion.div
              className="block hero-letters-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/** Render text with mobile line breaks */}
              {useMemo(() => {
                // Mobile lines:
                // L1: Automação e inteligência
                // L2: artificial aplicadas com
                // L3: método, critério
                // L4: e visão estratégica.
                
                const renderWord = (word: string, startIdx: number, isBlue = false, hasHighlight = false) => {
                  const content = word.split('').map((ch, i) => (
                    <span
                      key={`char-${startIdx + i}`}
                      className={`hero-letter ${isBlue ? 'text-cyan-400' : ''}`}
                      style={{ ['--i' as any]: startIdx + i } as React.CSSProperties}
                    >
                      {ch === ' ' ? '\u00A0' : ch}
                    </span>
                  ));
                  
                  if (hasHighlight) {
                    return (
                      <span className="relative inline-block">
                        <span 
                          className="absolute inset-0 rounded pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(56, 182, 254, 0.2) 0%, rgba(56, 182, 254, 0.15) 50%, rgba(56, 182, 254, 0) 100%)',
                            left: 0,
                            top: '-2px',
                            bottom: '-2px',
                            zIndex: 0,
                          }}
                        />
                        <span className="relative z-10">{content}</span>
                      </span>
                    );
                  }
                  return <>{content}</>;
                };
                
                let idx = 0;
                return (
                  <span aria-hidden ref={firstLineRef}>
                    {/* L1: Automação e inteligência */}
                    {renderWord('Automação', idx, true)}
                    {(() => { idx += 9; return null; })()}
                    {renderWord(' e inteligência', idx)}
                    {(() => { idx += 15; return null; })()}
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    
                    {/* L2: artificial aplicadas com */}
                    {renderWord('artificial aplicadas com', idx)}
                    {(() => { idx += 23; return null; })()}
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    
                    {/* L3: método, critério */}
                    {renderWord('método, critério', idx, false, true)}
                    {(() => { idx += 16; return null; })()}
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    
                    {/* L4: e visão estratégica. */}
                    {renderWord('e visão estratégica.', idx, false, true)}
                  </span>
                );
              }, [])}
            </motion.div>
          </h1>

          <motion.div
            className="mb-12 max-w-2xl mx-auto hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span className="relative inline-block">
              <span 
                className="absolute inset-0 rounded pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(56, 182, 254, 0.35) 0%, rgba(56, 182, 254, 0.25) 50%, rgba(56, 182, 254, 0.1) 100%)',
                  left: '-8px',
                  right: '-8px',
                  top: '-4px',
                  bottom: '-4px',
                  zIndex: 0,
                }}
              />
              <span className="relative z-10 text-lg md:text-xl text-cyan-400 font-medium leading-relaxed">
                Formamos profissionais e automatizamos empresas.
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Button 1: Automatizar Serviço */}
            <div className="relative group w-full sm:w-auto mt-4 sm:mt-0">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block p-px font-semibold leading-6 bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 w-full sm:w-auto"
              >
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950 h-full">
                  <div className="relative z-10 flex items-center justify-center space-x-2 h-full">
                    <span className="transition-colors duration-300 group-hover:text-gray-300 text-white text-sm">Quero automatizar meu negócio</span>
                    <svg className="w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-300 text-white" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path></svg>
                  </div>
                </span>
              </motion.button>
            </div>

            {/* Button 2: Aprender a Automatizar */}
            <div className="relative group w-full sm:w-auto">
              <motion.button
                onClick={() => navigate('/mentoring')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block p-px font-semibold leading-6 bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 w-full sm:w-auto"
              >
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950 h-full">
                  <div className="relative z-10 flex items-center justify-center space-x-2 h-full">
                    <span className="transition-colors duration-300 group-hover:text-gray-300 text-white text-sm">Quero aprender automação e IA</span>
                    <svg className="w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-300 text-white" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path></svg>
                  </div>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
