import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  RabbitMQIcon,
  DockerIcon,
  RDStationIcon,
  HubsoftIcon,
  VapiIcon,
  MauticIcon,
  ClinicopIcon,
  N8nIcon,
  PostgresIcon,
  SupabaseIcon,
  PortainerIcon,
  PythonIcon,
  BackblazeIcon,
  GHLIcon,
} from './TechIcons';

const technologies = [
  { name: 'RabbitMQ', icon: RabbitMQIcon, hoverColor: '#ff6b6b', hoverBg: 'from-red-500/20 to-red-600/10' },
  { name: 'Docker', icon: DockerIcon, hoverColor: '#2496ed', hoverBg: 'from-blue-500/20 to-blue-600/10' },
  { name: 'RD Station', icon: RDStationIcon, hoverColor: '#ff1744', hoverBg: 'from-pink-500/20 to-red-600/10' },
  { name: 'Hubsoft', icon: HubsoftIcon, hoverColor: '#00b4d8', hoverBg: 'from-cyan-500/20 to-blue-600/10' },
  { name: 'Vapi', icon: VapiIcon, hoverColor: '#9c27b0', hoverBg: 'from-purple-500/20 to-purple-600/10' },
  { name: 'Mautic', icon: MauticIcon, hoverColor: '#00c9a7', hoverBg: 'from-teal-500/20 to-emerald-600/10' },
  { name: 'Clinicorp', icon: ClinicopIcon, hoverColor: '#ff6d00', hoverBg: 'from-orange-500/20 to-orange-600/10' },
  { name: 'n8n', icon: N8nIcon, hoverColor: '#ec4899', hoverBg: 'from-pink-500/20 to-pink-600/10' },
  { name: 'Postgres', icon: PostgresIcon, hoverColor: '#336791', hoverBg: 'from-blue-700/20 to-blue-800/10' },
  { name: 'Supabase', icon: SupabaseIcon, hoverColor: '#3ecf8e', hoverBg: 'from-green-500/20 to-emerald-600/10' },
  { name: 'Portainer', icon: PortainerIcon, hoverColor: '#13bef9', hoverBg: 'from-cyan-500/20 to-blue-600/10' },
  { name: 'Python', icon: PythonIcon, hoverColor: '#3776ab', hoverBg: 'from-blue-600/20 to-blue-700/10' },
  { name: 'Backblaze', icon: BackblazeIcon, hoverColor: '#f0ad4e', hoverBg: 'from-yellow-500/20 to-orange-600/10' },
  { name: 'GHL', icon: GHLIcon, hoverColor: '#00d4ff', hoverBg: 'from-cyan-500/20 to-blue-600/10' },
];

// Duplicate array for seamless carousel loop
const duplicatedTechs = [...technologies, ...technologies, ...technologies];

function TechItem({ tech }: { tech: typeof technologies[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <div
      key={tech.name}
      className="flex items-center gap-2 flex-shrink-0 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-8 h-8 flex-shrink-0 transition-all duration-300"
        style={{
          color: isHovered ? tech.hoverColor : 'rgb(148, 163, 184)',
          filter: isHovered ? 'drop-shadow(0 0 8px ' + tech.hoverColor + '40)' : 'none',
        }}
      >
        <Icon />
      </div>
      <span
        className="text-xs font-light leading-none -translate-y-0.5 uppercase transition-all duration-300"
        style={{
          color: isHovered ? tech.hoverColor : 'rgb(209, 213, 219)',
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function SectionDivider() {
  return (
    <section className="py-6 bg-gray-950 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl font-light text-center text-white drop-shadow-2xl glow mb-4"
        style={{
          textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
        }}
      >
        Conheça algumas tecnologias usadas pelos polímatas
      </motion.h3>

      {/* First carousel row - scrolling left */}
      <motion.div
        className="flex gap-6 items-center whitespace-nowrap scale-75 mb-4"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechItem key={`tech-row1-${index}`} tech={tech} />
        ))}
      </motion.div>

      {/* Second carousel row - scrolling right */}
      <motion.div
        className="flex gap-6 items-center whitespace-nowrap scale-75"
        animate={{ x: [-1000, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <TechItem key={`tech-row2-${index}`} tech={tech} />
        ))}
      </motion.div>
    </section>
  );
}
