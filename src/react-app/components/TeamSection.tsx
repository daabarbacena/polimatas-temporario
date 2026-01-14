import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string; // CSS object-position value
}

const teamMembers: TeamMember[] = [
  {
    name: "Gabriel",
    role: "CEO & Co-founder",
    bio: "Fundador da Polímatas, atua com automação e IA para transformar processos em sistemas escaláveis. Ex-oficial da Marinha, com experiência em projetos governamentais e foco em integrações, dashboards e agentes de IA.",
    image: "/images/team/ceo1.png",
    imagePosition: "center top",
  },
  {
    name: "Danilo",
    role: "CTO & Co-founder",
    bio: "Com mais de 12 anos de experiência em TI, infraestrutura e cibersegurança, Danilo Duarte é especialista em automações completas, seguras e escaláveis. Com formação em Engenharia de Redes pela UnB, atua integrando infraestrutura, marketing, vendas e operações com foco em alta disponibilidade e performance.",
    image: "/images/team/ceo2.png",
    imagePosition: "center top",
  },
  {
    name: "José",
    role: "CMO & Co-founder",
    bio: "Mentor em marketing digital, especialista em automações com IA para performance, escala e eficiência. Atua criando soluções que otimizam processos e aumentam conversão em marketing e vendas.",
    image: "/images/team/ceo3.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #06b6d410, transparent 50%), radial-gradient(circle at 70% 50%, #06b6d410, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Quem está por trás da <span className="text-cyan-400">Polímatas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Três líderes com visão estratégica, tecnologia e inovação no centro das decisões.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Photo */}
              <motion.div 
                className="relative mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 bg-white/5"
                whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: member.imagePosition || 'center center' }}
                  onError={(e) => {
                    // Fallback placeholder if image doesn't exist
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=1a1a1a&color=06b6d4&font-size=0.4`;
                  }}
                />
              </motion.div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-cyan-400 text-sm font-medium mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modern Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
