import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from './ui/badge';
import { BorderTrail } from './ui/border-trail';
import { HoverButton } from './ui/hover-button';

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section 
      id="about" 
      ref={containerRef}
      className="pt-20 pb-8 lg:pt-40 lg:pb-16 bg-black relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Background gradient effect - centered */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,#1a1a1a,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_30%_40%,#141414,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_60%,#0f0f0f,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div>
              <Badge className="mb-4 bg-white text-black border-white/50 hover:border-white">Sobre Nós</Badge>
            </div>
            
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light text-white leading-tight">
                Pensamento polímata aplicado à Inteligência Artificial
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light max-w-xl">
                Polímatas são pessoas que conectam múltiplas áreas do conhecimento para criar soluções inovadoras. Leonardo da Vinci foi um dos maiores exemplos: arte, ciência, engenharia e estratégia trabalhando juntas.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-2 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed font-light pt-4">
                A Polímatas nasce dessa mesma mentalidade — unir Inteligência Artificial, automação e estratégia para transformar negócios de forma prática e eficiente.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <h3 className="text-2xl font-semibold text-white">O que fazemos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span className="text-gray-300 font-light">Agentes de IA personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span className="text-gray-300 font-light">Automação inteligente de processos e negócios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold mt-1">•</span>
                  <span className="text-gray-300 font-light">Integração entre pessoas, tecnologia e estratégia</span>
                </li>
              </ul>
              <p className="text-gray-400 italic font-light pt-2">Nada de soluções genéricas. Tudo é pensado para a sua realidade.</p>
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
              <h3 className="text-2xl font-semibold text-white pt-4">Por que isso importa</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                O futuro não é de quem apenas usa ferramentas. É de quem sabe integrar conhecimento e automatizar com visão estratégica.
              </p>
              <p className="text-gray-300 leading-relaxed font-light">
                Se você quer aplicar IA no seu negócio ou aprender a criar automações inteligentes, o próximo passo é simples.
              </p>
            </div>

            <div className="pt-2">
              <HoverButton onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Agende uma chamada agora
              </HoverButton>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <BorderTrail
                size={80}
                style={{
                  boxShadow: '0px 0px 60px 30px rgb(56 182 254 / 30%), 0 0 100px 60px rgb(56 182 254 / 20%)',
                }}
              />
              <img 
                src="/images/Design sem nome.png"
                alt="Polímata - Leonardo da Vinci com Inteligência Artificial"
                className="w-full h-auto rounded-2xl aspect-square object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
