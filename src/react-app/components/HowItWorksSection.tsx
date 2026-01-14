import { RoadmapCard } from './ui/roadmap-card';

const workflowSteps = [
  {
    quarter: 'Passo 1',
    title: 'Consultoria Estratégica',
    description: 'Entendemos as dores e desafios do seu negócio para identificar oportunidades de automação.',
    status: 'done' as const,
  },
  {
    quarter: 'Passo 2',
    title: 'Apresentação & Proposta',
    description: 'Mostramos a solução, os gaps encontrados e as tecnologias ideais, com valores transparentes.',
    status: 'done' as const,
  },
  {
    quarter: 'Passo 3',
    title: 'Desenvolvimento & Entrega',
    description: 'Desenvolvemos o escopo do projeto totalmente dentro do prazo, com acompanhamento contínuo.',
    status: 'in-progress' as const,
  },
  {
    quarter: 'Passo 4',
    title: 'Suporte & Evolução',
    description: 'Entrega com documentação, treinamento, suporte contínuo e grupo exclusivo para dúvidas e ajustes.',
    status: 'done' as const,
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <RoadmapCard
          title="Como Funciona Nosso Processo"
          description="Do primeiro contato à entrega, cada etapa é pensada para garantir o sucesso do seu projeto"
          items={workflowSteps}
        />
      </div>
    </section>
  );
}
