import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import SocialLinks from './socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-darker via-primary to-secondary border-t border-accent/20">
      <div className="container mx-auto px-6 py-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-space font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent">
                Thiago M.
              </span>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Desenvolvedor Full Stack & Freelancer.
            </p>
            <div className="flex justify-center md:justify-start">
              <SocialLinks variant="footer" />
            </div>
          </motion.div>

        <motion.div
          className="border-t border-accent/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Thiago M. Feito com{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="inline text-danger mx-1" size={14} />
            </motion.span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-xl flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -2,
              boxShadow: "0 5px 15px rgba(0, 212, 255, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Voltar ao topo"
          >
            <FaArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
