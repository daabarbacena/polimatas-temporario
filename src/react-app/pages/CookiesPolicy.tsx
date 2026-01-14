import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function CookiesPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            Política de Cookies
          </motion.h1>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-gray-400 leading-relaxed">
              Esta Política de Cookies explica como a Polímatas utiliza cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego e apoiar nossas estratégias de marketing, sempre em conformidade com a LGPD (Lei Geral de Proteção de Dados – Lei nº 13.709/2018).
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">O que são cookies?</h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site. Eles ajudam a reconhecer preferências, entender como o site é utilizado e otimizar funcionalidades.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Quais tipos de cookies utilizamos?</h2>
              
              <h3 className="text-lg font-medium text-cyan-400 mb-3">Cookies essenciais</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Necessários para o funcionamento básico do site. Sem eles, algumas funcionalidades podem não operar corretamente.
              </p>

              <h3 className="text-lg font-medium text-cyan-400 mb-3">Cookies de desempenho e análise</h3>
              <p className="text-gray-400 leading-relaxed mb-2">
                Coletam informações anônimas sobre como os usuários navegam pelo site, como páginas visitadas, tempo de navegação e origem do tráfego.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Esses dados nos ajudam a melhorar a experiência e o conteúdo.
              </p>

              <h3 className="text-lg font-medium text-cyan-400 mb-3">Cookies de marketing</h3>
              <p className="text-gray-400 leading-relaxed mb-2">
                Utilizados para entender a origem do tráfego, mensurar campanhas e entregar comunicações mais relevantes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Esses cookies só são ativados mediante seu consentimento.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Como usamos essas informações?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Os dados coletados são utilizados para:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li>Analisar desempenho do site</li>
                <li>Entender de onde vem o tráfego</li>
                <li>Otimizar campanhas e estratégias</li>
                <li>Melhorar a experiência do usuário</li>
              </ul>
              <p className="text-gray-400 leading-relaxed font-medium">
                Não vendemos, alugamos ou compartilhamos dados pessoais de forma indevida.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Consentimento</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Ao acessar nosso site pela primeira vez, você poderá aceitar, recusar ou personalizar o uso de cookies por meio do banner de consentimento.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Você pode alterar ou revogar seu consentimento a qualquer momento.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Como gerenciar cookies?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Você pode:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Ajustar preferências no banner de cookies</li>
                <li>Configurar seu navegador para bloquear ou excluir cookies</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                A desativação de cookies pode afetar algumas funcionalidades do site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Atualizações desta política</h2>
              <p className="text-gray-400 leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças legais ou operacionais. Recomendamos revisitar esta página regularmente.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">Contato</h2>
              <p className="text-gray-400 leading-relaxed">
                Em caso de dúvidas sobre esta Política de Cookies ou sobre o uso de dados, entre em contato conosco através dos canais oficiais da Polímatas.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Última atualização: 30 de dezembro de 2025
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
