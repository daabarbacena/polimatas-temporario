import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/polimatas.ai/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@PolimatasAI/videos', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contato@polimatas.tec.br', label: 'Email' },
  ];

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'how-it-works', label: 'Como funciona' },
    { id: 'cases', label: 'Casos' },
    { id: 'team', label: 'Quem somos' },
    { id: 'compare', label: 'Comparações' },
    { id: 'contact', label: 'Contato' },
  ];

  const legalLinks = [
    { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { label: 'Termos de Uso', href: '/termos-de-uso' },
    { label: 'Cookies', href: '/politica-de-cookies' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-16 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 0%, #38b6fe10, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Polímatas AI Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-light tracking-tight text-white">
                Polímatas
              </span>
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Transformando negócios com automação inteligente e soluções de IA sob medida.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white text-sm font-medium mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-500 hover:text-white transition-colors text-sm font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white text-sm font-medium mb-4">Redes Sociais</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all group"
                    style={{
                      background: 'linear-gradient(135deg, #38b6fe10, #ac5ff710)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(56, 182, 254, 0.1)',
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.1,
                    }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-[#38b6fe] transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs font-light">
            © 2025 Polímatas AI. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs font-light">
            CNPJ: 60.808.811/0001-45
          </p>
        </motion.div>

        {/* Privacy and tracking notice */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600 text-xs font-light max-w-3xl mx-auto mb-3">
            Este site utiliza cookies e tecnologias de rastreamento para melhorar sua experiência de navegação e analisar o tráfego. 
            Ao continuar navegando, você concorda com nossa{' '}
            <Link to="/politica-de-privacidade" className="text-[#38b6fe] hover:underline">Política de Privacidade</Link>
            {' '}e{' '}
            <Link to="/termos-de-uso" className="text-[#38b6fe] hover:underline">Termos de Uso</Link>.
          </p>
          <p className="text-gray-700 text-xs font-light">
            Utilizamos Google Analytics e outras ferramentas de análise para monitorar e melhorar nossos serviços.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
