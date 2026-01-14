import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export default function SegmentationSection() {
  const navigate = useNavigate();

  return (
    <section id="segmentation" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white">Como você quer usar IA?</h2>
          <p className="text-gray-400 mt-3">Escolha uma das opções para vermos a melhor jornada.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-8 rounded-2xl cursor-pointer"
            onClick={() => {
              // Companies: scroll to services
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <h3 className="text-2xl text-white mb-3 font-medium">Para empresas</h3>
            <p className="text-gray-400 mb-6">Automatize processos, atendimento, vendas e integração de sistemas com soluções completas de IA e workflows.</p>
            <div className="inline-flex items-center gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full font-medium">Quero automatizar</button>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 p-8 rounded-2xl cursor-pointer"
            onClick={() => {
              // Mentoria: redirect to students page (future)
              navigate('/students');
            }}
          >
            <h3 className="text-2xl text-white mb-3 font-medium">Mentoria - Alunos</h3>
            <p className="text-gray-400 mb-6">Mentoria e capacitação para alunos que querem aprender a vender processos com IA. Página de alunos será lançada em breve.</p>
            <div className="inline-flex items-center gap-3">
              <button className="px-4 py-2 border border-white/10 rounded-full text-white font-medium bg-transparent">Ir para mentoria</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
