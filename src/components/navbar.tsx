import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const menus = [
    { name: 'Home', to: 'home' },
    { name: 'Experiência', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projetos', to: 'projects' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'border-b border-accent/20 bg-dark/90 backdrop-blur-md'
        : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="cursor-pointer font-space text-2xl font-bold text-accent"
            >
              TM
            </button>
          </motion.div>

          <ul className="hidden items-center space-x-8 md:flex">
            {menus.map((menu, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(menu.to)}
                  className="group relative cursor-pointer font-medium text-text-primary transition-colors duration-300 hover:text-accent"
                >
                  {menu.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-10 items-center justify-center rounded-lg border border-accent/30 bg-card/60 text-text-primary backdrop-blur-sm transition-colors duration-300 hover:text-accent md:hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            className="absolute inset-x-6 top-full z-50 md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="mt-1 rounded-2xl border border-accent/20 bg-card/90 p-6 shadow-2xl backdrop-blur-md">
              <ul className="space-y-4">
                {menus.map((menu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection(menu.to);
                      }}
                      className="block w-full cursor-pointer py-2 text-left font-medium text-text-primary transition-colors duration-300 hover:text-accent"
                    >
                      {menu.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}