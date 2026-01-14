import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { BackgroundPlus } from './ui/background-plus';

// Interface para facilitar adição de novos casos
interface CaseStudy {
  id: number;
  videoId: string; // ID do YouTube Shorts (ex: "abc123xyz")
  companyName: string;
  quote: string;
  solutionType: string;
}

// Casos reais - fácil de adicionar novos
const caseStudies: CaseStudy[] = [
  {
    id: 3,
    videoId: '8iFQ3e9JY54',
    companyName: 'Dra. Karla Bessa',
    quote: 'Se você é empresário ou gestor e quer implementar a inteligência artificial de forma prática com suporte real e acompanhamento de verdade, eu indico a polímatas!',
    solutionType: 'IA de atendimento com agendamento e tira dúvidas dos clientes + CRM para gestão dos clientes com kanban + treinamento de toda equipe',
  },
  {
    id: 1,
    videoId: 'xoS3stc0gOs',
    companyName: 'Target Assessoria e Gestão Empresarial',
    quote: 'Eu não conseguiria chegar até onde cheguei se não fosse a ajuda desse camarada (Trois) e de toda essa equipe que realmente se preocupa com o cliente.',
    solutionType: 'Automação de atendimento com IA, CRM inteligente e gestão de funil de vendas',
  },
  {
    id: 2,
    videoId: '64U2ZmLTQPA',
    companyName: 'Elisa Guimarães Infoprodutora',
    quote: 'Eles criaram o dashboard, trabalharam o resgate de carrinho, cuidaram da parte de tráfego e integraram a IA em todo o processo de lançamento. Foi um trabalho feito com responsabilidade, compromisso e envolvimento real.',
    solutionType: 'IA aplicada a lançamentos, automação de campanhas e resgate inteligente de leads',
  },
  {
    id: 4,
    videoId: 'NpUP4oTZ4I0',
    companyName: 'jornada tax',
    quote: 'Podem confiar, a jornada techs é cliente e gostamos muito do atendimento deles, desde o início tem sido muito bom. Se você ainda não tem automação ou IA para seu negócio, corra atrás desse serviço!',
    solutionType: 'Automatização de processos de venda, IA de suporte, recuperação de carrinhos abandonados e e-mail marketing',
  },
];

// Componente de Card de Caso
function CaseCard({ caseItem, index }: { caseItem: CaseStudy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
    >
      {/* Vídeo YouTube Shorts - Formato 9:16 */}
      <div className="w-full" style={{ aspectRatio: '9 / 16', maxHeight: '400px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${caseItem.videoId}`}
          title={`Depoimento - ${caseItem.companyName}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Nome da Empresa */}
        <h3 className="text-cyan-400 text-xs font-medium uppercase tracking-wide">
          {caseItem.companyName}
        </h3>

        {/* Frase do Cliente */}
        <blockquote className="text-white text-base md:text-lg font-light leading-relaxed flex-1">
          "{caseItem.quote}"
        </blockquote>

        {/* Microcopy - Tipo de Solução */}
        <p className="text-gray-500 text-xs font-light">
          {caseItem.solutionType}
        </p>
      </div>
    </motion.article>
  );
}

export default function CasesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cases" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPlus 
        plusColor="#666666" 
        plusSize={50} 
        fade={true}
        className="opacity-80"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header da Seção */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
            Casos reais de automação em operação
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Empresas que aplicaram automação e Inteligência Artificial para ganhar eficiência, escala e previsibilidade.
          </p>
        </motion.header>

        {/* Grid de Casos - 3 colunas desktop, 1 coluna mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>

        {/* CTA Sutil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6 font-light">
            Quer resultados parecidos no seu negócio?
          </p>
          <Button
            variant="expandIcon"
            Icon={() => <ArrowRight className="h-4 w-4" />}
            iconPlacement="right"
            onClick={scrollToContact}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3"
          >
            Agendar chamada de avaliação
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
