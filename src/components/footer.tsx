import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import SocialLinks from './socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-accent/20 bg-gradient-to-t from-darker via-primary to-secondary">
      <div className="container mx-auto px-6 py-12">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 font-space text-2xl font-bold">
              <span className="bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent">
                Thiago M.
              </span>
            </div>
            <p className="mb-6 leading-relaxed text-text-secondary">
              Desenvolvedor Full Stack & Freelancer.
            </p>
            <div className="flex justify-center md:justify-start">
              <SocialLinks variant="footer" />
            </div>
          </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between border-t border-accent/20 pt-8 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-center text-text-secondary md:mb-0 md:text-left">
            © {currentYear} Thiago M. Feito com{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="mx-1 inline text-danger" size={14} />
            </motion.span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex size-12 items-center justify-center rounded-xl border border-accent/30 bg-card/60 text-text-primary backdrop-blur-sm transition-all duration-300 hover:border-accent hover:text-accent"
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
