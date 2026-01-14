import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { GridBackground } from './ui/grid-background';

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <motion.section 
      id="contact" 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Grid Background */}
      <GridBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-white">
            Fale com a Polímatas
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
            Agende uma chamada gratuita para entender suas necessidades e identificar oportunidades reais de automação e IA para o seu negócio
          </p>
        </motion.div>

        {/* Calendly Embed with Glass Effect Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center w-full"
        >
          <div 
            className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              background: 'transparent',
              border: '1px solid rgba(128, 128, 128, 0.4)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/utroiss/60min"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <p className="text-center py-4 text-sm font-semibold">
              <span className="text-cyan-500">Chamada gratuita</span>
              <span className="text-white mx-2">•</span>
              <span className="text-cyan-500">Diagnóstico personalizado</span>
              <span className="text-white mx-2">•</span>
              <span className="text-cyan-500">Sem obrigação de contratação</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
