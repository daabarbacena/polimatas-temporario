import { motion } from 'framer-motion';
import { EtheralShadow } from './etheral-shadow';

interface IconConfig {
  img: string;
  name: string;
}

const iconConfigs: IconConfig[] = [
  { img: '/images/technologies/react.png', name: 'React' },
  { img: '/images/technologies/python.png', name: 'Python' },
  { img: '/images/technologies/docker.png', name: 'Docker' },
  { img: '/images/technologies/postgresql.png', name: 'PostgreSQL' },
  { img: '/images/technologies/n8n.png', name: 'n8n' },
  { img: '/images/technologies/supabase.png', name: 'Supabase' },
  { img: '/images/technologies/rabbitmq.png', name: 'RabbitMQ' },
  { img: '/images/technologies/portainer.png', name: 'Portainer' },
  { img: '/images/technologies/backblaze.png', name: 'Backblaze' },
  { img: '/images/technologies/mautic.png', name: 'Mautic' },
  { img: '/images/technologies/vapi.png', name: 'Vapi' },
  { img: '/images/technologies/ghl.png', name: 'GHL' },
  { img: '/images/technologies/hubsoft.png', name: 'HubSoft' },
  { img: '/images/technologies/clinicorp.png', name: 'Clinicorp' },
  { img: '/images/technologies/rd station.png', name: 'RD Station' },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-7xl mx-auto my-32 flex items-center justify-between h-[32rem] bg-black overflow-hidden rounded-2xl px-12 py-16">
      {/* Left side: Heading and Text */}
      <motion.div 
        className="w-1/2 z-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-light mb-4 text-white">
          Tecnologias
        </h1>
        <p className="text-gray-400 dark:text-gray-400 mb-6 max-w-lg text-base font-light">
          Utilizamos as melhores tecnologias e plataformas para construir soluções robustas, escaláveis e eficientes.
        </p>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition">
            Saiba mais
          </button>
          <button className="px-6 py-2 border border-neutral-600 text-white hover:bg-neutral-900 rounded-lg transition">
            Documentação
          </button>
        </div>
      </motion.div>

      {/* Right side: Orbit animation - Half visible */}
      <motion.div 
        className="relative w-1/2 h-full flex items-center justify-end overflow-hidden"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-[50rem] h-[50rem] -translate-x-[25%] flex items-center justify-center"
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
          {/* Center Circle */}
          <motion.div 
            className="w-24 h-24 rounded-full bg-neutral-800 shadow-lg flex items-center justify-center z-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
          </motion.div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            const duration = 12 + orbitIdx * 6;
            const direction = orbitIdx % 2 === 0 ? 1 : -1;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                }}
              >
                {/* Rotating container */}
                <motion.div
                  className="w-full h-full rounded-full"
                  animate={{ rotate: direction * 360 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ transformOrigin: 'center' }}
                >
                  {iconConfigs
                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <motion.div
                          key={iconIdx}
                          className="absolute bg-neutral-800 rounded-full p-2 shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                          }}
                          whileHover={{ scale: 1.15 }}
                        >
                          <img
                            src={cfg.img}
                            alt={cfg.name}
                            className="w-8 h-8 object-contain filter brightness-0 invert"
                            title={cfg.name}
                          />
                        </motion.div>
                      );
                    })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Etheral Shadow Background */}
      <div className="absolute inset-0 -z-10">
        <EtheralShadow
          color="rgba(56, 182, 254, 0.15)"
          animation={{ scale: 60, speed: 70 }}
          noise={{ opacity: 0.3, scale: 0.8 }}
          sizing="fill"
        />
      </div>
    </section>
  );
}
