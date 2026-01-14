"use client"

import type React from "react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Automação <span class='text-cyan-400'>24/7</span>",
    description: "Criamos automações que operam em servidores dedicados no exterior, garantindo estabilidade e funcionamento contínuo.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
  },
  {
    title: "Personalização Sob <span class='text-cyan-400'>Demanda</span>",
    description: "Desenvolvemos automações personalizadas conforme os processos e objetivos de cada empresa.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
  },
  {
    title: "Integração entre <span class='text-cyan-400'>Sistemas</span>",
    description: "Conectamos diferentes plataformas e ferramentas para que os dados fluam de forma automática, reduzindo erros, retrabalho e gargalos operacionais.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Treinamento da <span class='text-cyan-400'>equipe</span>",
    description: "Treinamos sua equipe para operar as ferramentas de IA desenvolvidas, com acompanhamento prático para garantir uso correto e continuidade das automações.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zM7 18V6h10v12H7z" />
      </svg>
    ),
  },
  {
    title: "Backup e <span class='text-cyan-400'>Segurança</span>",
    description: "Implementamos rotinas de backup, versionamento e proteção de dados para garantir segurança, integridade e rápida recuperação das informações.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    title: "Suporte <span class='text-cyan-400'>Contínuo</span>",
    description: "Suporte técnico especializado para acompanhar suas automações no dia a dia, realizar ajustes, aplicar melhorias e garantir estabilidade, segurança e bom desempenho das soluções.",
    icon: (
      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
      </svg>
    ),
  },
]

export default function FeaturesCards() {
  const renderCard = (feature: Feature, index: number, className?: string) => (
    <div 
      key={index} 
      className={`relative min-h-[250px] md:min-h-[280px] group p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg ${className || ''}`}
    >
      <div className="mb-4 md:mb-5 filter drop-shadow-lg">
        <div className="w-10 h-10 md:w-11 md:h-11 [&>svg]:w-full [&>svg]:h-full">{feature.icon}</div>
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white" dangerouslySetInnerHTML={{ __html: feature.title }} />

      <p className="text-sm leading-relaxed flex-grow text-gray-300 font-medium">{feature.description}</p>

      <a 
        href="#contact" 
        className="mt-4 md:mt-5 flex items-center text-sm font-bold text-gray-300 group-hover:text-white transition-colors hover:underline"
      >
        <span className="mr-2">Conheça mais</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop (lg+): Row 1 - 3 cards, Row 2 - 3 cards */}
      {/* Tablet (md): Row 1 - 2 cards, Row 2 - 2 cards, Row 3 - 2 cards */}
      
      {/* First row - cards 1, 2 (and 3 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
        {renderCard(features[0], 0)}
        {renderCard(features[1], 1)}
        {/* Card 3 - only visible here on lg+ */}
        <div className="hidden lg:block">
          {renderCard(features[2], 2)}
        </div>
      </div>
      
      {/* Second row - cards 3, 4 on tablet / cards 4, 5, 6 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Card 3 - only visible here on md (tablet) */}
        <div className="hidden md:block lg:hidden">
          {renderCard(features[2], 2)}
        </div>
        {/* Card 3 - visible on mobile only */}
        <div className="block md:hidden">
          {renderCard(features[2], 2)}
        </div>
        {/* Card 4 */}
        {renderCard(features[3], 3)}
        {/* Card 5 */}
        {renderCard(features[4], 4)}
        {/* Card 6 */}
        {renderCard(features[5], 5)}
      </div>
    </div>
  )
}

export { features }
