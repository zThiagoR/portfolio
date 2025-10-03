import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-dark/90 backdrop-blur-md border-b border-accent/20'
          : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-space font-bold cursor-pointer"
            >
              <span className="bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent">
                TM
              </span>
            </button>
          </motion.div>

          <ul className="hidden md:flex items-center space-x-8">
            {menus.map((menu, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(menu.to)}
                  className="text-text-primary hover:text-accent cursor-pointer transition-colors duration-300 font-medium relative group"
                >
                  {menu.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-lg flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>

        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-card/90 backdrop-blur-md border border-accent/20 rounded-2xl p-6 mt-4">
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
                      scrollToSection(menu.to);
                      setIsOpen(false);
                    }}
                    className="block text-text-primary hover:text-accent cursor-pointer transition-colors duration-300 font-medium py-2 w-full text-left"
                  >
                    {menu.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}