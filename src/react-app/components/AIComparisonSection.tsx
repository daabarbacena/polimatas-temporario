import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Automação personalizada para cada negócio',
    us: true,
    competitors: [false, false],
  },
  {
    name: 'Integração com outros sistemas',
    us: true,
    competitors: [true, true],
  },
  {
    name: 'Treinamento prático',
    us: true,
    competitors: [true, true],
  },
  {
    name: 'Suporte contínuo e evolução',
    us: true,
    competitors: [true, false],
  },
  {
    name: 'Visão estratégica do negócio',
    us: true,
    competitors: [false, true],
  },
  {
    name: 'Infraestrutura dedicada 24/7',
    us: true,
    competitors: [false, false],
  },
];

const mobileFeatures = [
  { title: 'Sob medida', value: '100%', subtitle: 'Personalizado' },
  { title: 'Integração', value: '24/7', subtitle: 'Suporte' },
  { title: 'Analytics', value: '+85%', subtitle: 'ROI' },
];

export default function AIComparisonSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      id="compare"
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden" 
      style={{ opacity }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-white">
            Por que nos escolher
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Compare nossas soluções personalizadas com plataformas genéricas
          </p>
        </motion.div>

        {/* Desktop view - comparison table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {/* Header row */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="col-span-1"></div>
            <motion.div 
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-2"
                style={{
                  background: 'linear-gradient(135deg, #38b6fe, #ac5ff7)',
                  boxShadow: '0 10px 30px rgba(56, 182, 254, 0.3)',
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Nossa Solução</span>
              </div>
              <p className="text-white text-xl font-light">Personalizado</p>
            </motion.div>
            {['Ferramentas prontas', 'Freelancers'].map((competitor, idx) => (
              <motion.div 
                key={competitor}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <div className="px-4 py-2 bg-white/5 rounded-full mb-2 inline-block">
                  <span className="text-xs font-light text-gray-400">{competitor}</span>
                </div>
                <p className="text-gray-500 text-sm font-light">
                  {idx === 0 ? 'R$1.499/mês' : 'R$1.999/mês'}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((feature, featureIdx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: featureIdx * 0.05 }}
              className="grid grid-cols-4 gap-4 items-center py-6 border-b border-white/5 group hover:bg-white/[0.02] transition-all rounded-2xl px-4"
            >
              <div className="col-span-1">
                <span className="text-sm font-light text-gray-300 group-hover:text-white transition-colors">
                  {feature.name}
                </span>
              </div>
              
              {/* Our solution */}
              <div className="flex justify-center">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #38b6fe20, #ac5ff720)',
                    boxShadow: '0 10px 30px rgba(56, 182, 254, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(56, 182, 254, 0.3)',
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-6 h-6 text-[#38b6fe]" strokeWidth={3} />
                </motion.div>
              </div>

              {/* Competitors */}
              {feature.competitors.map((hasFeature, compIdx) => (
                <div key={compIdx} className="flex justify-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      hasFeature ? 'bg-white/5' : 'bg-white/[0.02]'
                    }`}
                    whileHover={{ scale: hasFeature ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: hasFeature 
                        ? '0 5px 15px rgba(255, 255, 255, 0.05)' 
                        : 'none',
                    }}
                  >
                    {hasFeature ? (
                      <Check className="w-5 h-5 text-white/40" strokeWidth={2} />
                    ) : (
                      <X className="w-5 h-5 text-white/10" strokeWidth={2} />
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile view - cards */}
        <div className="md:hidden grid gap-6">
          {mobileFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div 
                className="w-full h-64 rounded-xl p-px relative overflow-hidden"
                style={{
                  background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)',
                }}
              >
                {/* Animated dot */}
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-white rounded-full z-20"
                  style={{
                    boxShadow: '0 0 10px #ffffff',
                  }}
                  animate={{
                    top: ['10%', '10%', 'calc(100% - 30px)', 'calc(100% - 30px)', '10%'],
                    right: ['10%', 'calc(100% - 35px)', 'calc(100% - 35px)', '10%', '10%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div 
                  className="relative w-full h-full rounded-xl border border-[#202222] flex items-center justify-center flex-col text-white"
                  style={{
                    background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)',
                  }}
                >
                  {/* Ray effect */}
                  <div 
                    className="absolute w-56 h-12 rounded-full top-0 left-0 opacity-40"
                    style={{
                      backgroundColor: '#c7c7c7',
                      boxShadow: '0 0 50px #fff',
                      filter: 'blur(10px)',
                      transform: 'rotate(40deg)',
                      transformOrigin: '10%',
                    }}
                  />

                  {/* Content */}
                  <div 
                    className="text-6xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(45deg, #000000 4%, #fff, #000)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {feature.value}
                  </div>
                  <div className="text-white">{feature.subtitle}</div>

                  {/* Grid lines */}
                  <div 
                    className="absolute top-[10%] left-0 w-full h-px"
                    style={{
                      background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)',
                    }}
                  />
                  <div 
                    className="absolute bottom-[10%] left-0 w-full h-px bg-[#2c2c2c]"
                  />
                  <div 
                    className="absolute left-[10%] top-0 w-px h-full"
                    style={{
                      background: 'linear-gradient(180deg, #747474 30%, #222424 70%)',
                    }}
                  />
                  <div 
                    className="absolute right-[10%] top-0 w-px h-full bg-[#2c2c2c]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          {/* Desktop button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:inline-block px-10 py-4 text-black text-sm font-semibold rounded-full bg-cyan-500 hover:bg-cyan-400 transition-colors"
            style={{
              boxShadow: '0 20px 40px rgba(56, 182, 254, 0.3)',
            }}
          >
            Começar agora
          </motion.button>

          {/* Mobile button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="md:hidden px-8 py-3 text-black text-sm font-semibold rounded-full bg-cyan-500 hover:bg-cyan-400 transition-colors"
            style={{
              boxShadow: '0 10px 30px rgba(56, 182, 254, 0.3)',
            }}
          >
            Começar agora
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
