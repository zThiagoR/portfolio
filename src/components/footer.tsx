import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import SocialLinks from './socialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          className="mt-12 border-t border-accent/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary">
            © {currentYear} Thiago M. Feito com{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FaHeart className="mx-1 inline text-danger" size={14} />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
