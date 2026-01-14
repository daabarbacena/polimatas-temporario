import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const logos = [
  // Automação e Infraestrutura
  { src: '/images/technologies/n8n.png', alt: 'n8n', size: 44 },
  { src: '/images/technologies/python.png', alt: 'Python', size: 36 },
  { src: '/images/technologies/docker.png', alt: 'Docker', size: 40 },
  { src: '/images/technologies/postgresql.png', alt: 'PostgreSQL', size: 40 },
  { src: '/images/technologies/supabase.png', alt: 'Supabase', size: 40 },
  { src: '/images/technologies/rabbitmq.png', alt: 'RabbitMQ', size: 64 },
  { src: '/images/technologies/portainer.png', alt: 'Portainer', size: 40 },
  { src: '/images/technologies/backblaze.png', alt: 'Backblaze', size: 40 },
  // Marketing e Comunicação
  { src: '/images/technologies/mautic.png', alt: 'Mautic', size: 40 },
  { src: '/images/technologies/chatwoot.png', alt: 'Chatwoot', size: 40 },
  { src: '/images/technologies/vapi.png', alt: 'Vapi', size: 68 },
  { src: '/images/technologies/slack.png', alt: 'Slack', size: 60 },
  // CRM e Gestão
  { src: '/images/technologies/ghl.png', alt: 'GHL', size: 53 },
  { src: '/images/technologies/kommo.png', alt: 'Kommo', size: 52 },
  { src: '/images/technologies/pipedrive.png', alt: 'Pipedrive', size: 40 },
  { src: '/images/technologies/rd station.png', alt: 'RD Station', size: 40 },
  { src: '/images/technologies/clickup.png', alt: 'ClickUp', size: 40 },
  { src: '/images/technologies/monday.png', alt: 'Monday', size: 46 },
  // Plataformas de Infoprodutos
  { src: '/images/technologies/hotmart.png', alt: 'Hotmart', size: 40 },
  { src: '/images/technologies/kiwify.png', alt: 'Kiwify', size: 40 },
  { src: '/images/technologies/herospark.png', alt: 'HeroSpark', size: 40 },
  { src: '/images/technologies/cakto.png', alt: 'Cakto', size: 40 },
  // Nichos Específicos
  { src: '/images/technologies/hubsoft.png', alt: 'HubSoft', size: 40 },
  { src: '/images/technologies/clinicorp.png', alt: 'Clinicorp', size: 48 },
  { src: '/images/technologies/consultorio.me.png', alt: 'Consultório.me', size: 34 },
  { src: '/images/technologies/asaas.png', alt: 'Asaas', size: 40 },
  // Web
  { src: '/images/technologies/wordpress.png', alt: 'WordPress', size: 44 },
];

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      id="technologies"
      ref={containerRef}
      className="relative py-16 bg-black overflow-hidden w-full"
      style={{ opacity }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, #ac5ff715, transparent 50%), radial-gradient(circle at 70% 50%, #38b6fe15, transparent 50%)',
        }}
      />

      {/* Subtle dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
            Conheça algumas tecnologias usadas pelos <span className="text-cyan-400 underline decoration-cyan-400">polímatas</span>
          </h2>
          <p className="text-gray-500 text-base font-light max-w-xl mx-auto">
            Tecnologias que transformam conhecimento em sistemas inteligentes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="w-full h-px bg-neutral-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <div className="w-full overflow-hidden py-5">
            <div className="relative flex w-full overflow-hidden">
              <div 
                className="flex w-max animate-marquee hover:[animation-play-state:paused]"
                style={{ "--duration": "35s" } as React.CSSProperties}
              >
                {/* First set */}
                {logos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="mx-12 flex flex-col items-center justify-center shrink-0"
                  >
                    <div className="h-[60px] flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{ height: `${logo.size}px` }}
                        className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-gray-500 text-xs mt-2 font-light">
                      {logo.alt}
                    </span>
                  </div>
                ))}
                {/* Second set (duplicate for seamless loop) */}
                {logos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="mx-12 flex flex-col items-center justify-center shrink-0"
                  >
                    <div className="h-[60px] flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{ height: `${logo.size}px` }}
                        className="w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-gray-500 text-xs mt-2 font-light">
                      {logo.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-neutral-800 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </motion.div>
      </div>
    </motion.section>
  );
}
