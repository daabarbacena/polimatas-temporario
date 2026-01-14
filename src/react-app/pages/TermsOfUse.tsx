import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function TermsOfUse() {
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
            className="text-4xl md:text-5xl font-light text-white mb-12"
          >
            Termos de Uso
          </motion.h1>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="text-gray-400 leading-relaxed">
                Ao acessar e utilizar este site, você concorda com estes Termos de Uso e com a Política de Privacidade da Polímatas. Caso não concorde, recomendamos que não utilize o site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">2. Sobre a Polímatas</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A Polímatas oferece serviços de consultoria estratégica, automação de processos, Inteligência Artificial, mentoria e treinamentos, além de conteúdos informativos relacionados a tecnologia e inovação.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As informações apresentadas neste site têm caráter informativo e comercial, não constituindo garantia de resultados específicos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">3. Uso do Site</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                O usuário se compromete a utilizar este site de forma lícita, ética e de acordo com a legislação vigente, abstendo-se de:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Utilizar o site para fins ilegais ou não autorizados</li>
                <li>Tentar acessar áreas restritas ou sistemas sem permissão</li>
                <li>Reproduzir, copiar ou distribuir conteúdos sem autorização</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">4. Agendamento de Chamadas</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                O site disponibiliza um sistema de agendamento de chamadas gratuitas por meio de ferramentas de terceiros (ex: Calendly).
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>O agendamento não garante contratação de serviços</li>
                <li>A chamada tem caráter avaliativo e consultivo</li>
                <li>A Polímatas se reserva o direito de recusar ou remarcar atendimentos quando necessário</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">5. Propriedade Intelectual</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Todo o conteúdo deste site — incluindo textos, marcas, logotipos, identidade visual e materiais — é de propriedade da Polímatas, sendo protegido por leis de direitos autorais.
              </p>
              <p className="text-gray-400 leading-relaxed">
                É proibido o uso, reprodução ou modificação sem autorização prévia.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A Polímatas não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Decisões tomadas com base nas informações do site</li>
                <li>Resultados obtidos a partir da aplicação de automações ou estratégias</li>
                <li>Falhas técnicas de terceiros (plataformas, servidores, ferramentas externas)</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                Os serviços são prestados de forma personalizada, conforme acordado entre as partes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">7. Links e Serviços de Terceiros</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Este site pode conter links ou integrações com serviços de terceiros (ex: YouTube, Google, Calendly).
              </p>
              <p className="text-gray-400 leading-relaxed">
                A Polímatas não se responsabiliza pelas práticas, políticas ou conteúdos desses serviços externos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">8. Alterações nos Termos</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A Polímatas pode atualizar estes Termos de Uso a qualquer momento, sem aviso prévio.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Recomendamos que o usuário revise esta página periodicamente.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">9. Contato</h2>
              <p className="text-gray-400 leading-relaxed">
                Em caso de dúvidas sobre estes Termos, entre em contato pelos canais oficiais disponíveis no site.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                Última atualização: 24 de dezembro de 2025
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
