import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function PrivacyPolicy() {
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
            Política de Privacidade
          </motion.h1>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-gray-400 leading-relaxed mb-4">
              A Polímatas respeita a sua privacidade e está comprometida em proteger os dados pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ao utilizar este site, você concorda com as práticas descritas nesta Política de Privacidade.
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
              <h2 className="text-2xl font-medium text-white mb-4">1. Dados que coletamos</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Podemos coletar informações de forma automática ou fornecidas voluntariamente pelo usuário.
              </p>
              
              <h3 className="text-lg font-medium text-cyan-400 mb-3">🔹 Dados fornecidos pelo usuário</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Outras informações enviadas voluntariamente durante o agendamento de chamadas ou contato</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mb-6">
                Esses dados são coletados principalmente por meio de ferramentas de agendamento, como o Calendly.
              </p>

              <h3 className="text-lg font-medium text-cyan-400 mb-3">🔹 Dados coletados automaticamente</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de navegação</li>
                <li>Origem do tráfego (ex: Google, redes sociais, campanhas)</li>
                <li>Cookies e identificadores semelhantes</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                Esses dados são utilizados para análise de tráfego, melhoria da experiência do usuário e estratégias de marketing.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">2. Uso de cookies e tecnologias semelhantes</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Analisar o desempenho e uso do site</li>
                <li>Entender a origem do tráfego</li>
                <li>Melhorar a experiência do usuário</li>
                <li>Apoiar ações de marketing e publicidade</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                O usuário pode aceitar, recusar ou gerenciar o uso de cookies por meio do banner de consentimento exibido ao acessar o site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">3. Finalidade do uso dos dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Os dados coletados podem ser utilizados para:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Agendamento e realização de chamadas de avaliação</li>
                <li>Análise de tráfego e métricas do site</li>
                <li>Comunicação com o usuário</li>
                <li>Melhoria dos serviços e conteúdos oferecidos</li>
                <li>Cumprimento de obrigações legais</li>
              </ul>
              <p className="text-gray-400 leading-relaxed font-medium">
                A Polímatas não vende dados pessoais a terceiros.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">4. Compartilhamento de dados com terceiros</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Os dados podem ser compartilhados com ferramentas e plataformas de terceiros, exclusivamente para viabilizar as funcionalidades do site, como:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Ferramentas de análise (ex: Google Analytics)</li>
                <li>Plataformas de vídeo (ex: YouTube)</li>
                <li>Ferramentas de agendamento (ex: Calendly)</li>
                <li>Plataformas de marketing e automação</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                Esses serviços possuem suas próprias políticas de privacidade e seguem padrões de segurança compatíveis.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">5. Armazenamento e segurança dos dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acessos não autorizados, perda, uso indevido ou divulgação indevida.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando obrigações legais.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">6. Direitos do titular dos dados</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                De acordo com a LGPD, você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar correção ou atualização</li>
                <li>Solicitar exclusão ou anonimização, quando aplicável</li>
                <li>Revogar consentimentos concedidos</li>
              </ul>
              <p className="text-gray-400 leading-relaxed">
                Para exercer seus direitos, entre em contato pelos canais disponíveis no site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">7. Links e serviços externos</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Este site pode conter links, vídeos ou integrações com serviços externos.
              </p>
              <p className="text-gray-400 leading-relaxed">
                A Polímatas não se responsabiliza pelas práticas de privacidade desses terceiros.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">8. Alterações nesta Política</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir melhorias ou exigências legais.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Recomendamos a revisão periódica desta página.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-medium text-white mb-4">9. Contato</h2>
              <p className="text-gray-400 leading-relaxed">
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato pelos canais oficiais disponíveis no site.
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
