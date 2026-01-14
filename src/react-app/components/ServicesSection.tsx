import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FeaturesCards from './ui/feature-shader-cards';
import { FloatingPathsBackground } from './ui/floating-paths';

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      id="services" 
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Floating Paths Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingPathsBackground position={1} className="absolute inset-0">
          <div />
        </FloatingPathsBackground>
        <FloatingPathsBackground position={-1} className="absolute inset-0">
          <div />
        </FloatingPathsBackground>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-white">Serviços</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Soluções completas para transformar seu negócio com inteligência artificial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeaturesCards />
        </motion.div>
      </div>
    </motion.section>
  );
}
