import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SocialLinks from '../socialLinks';

export default function AboutMe() {
  const [currentRole, setCurrentRole] = useState('Full Stack');
  const roles = ['Full Stack', 'Frontend', 'Backend'];

  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRole(prev => {
          const currentIndex = roles.indexOf(prev);
          return roles[(currentIndex + 1) % roles.length];
        });
      }, 3000);

      return () => clearInterval(interval);
    }, [roles]);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-dark via-primary to-darker overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink/15 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-success rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-text-secondary text-sm font-medium">Disponível para projetos</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-space font-bold text-text-primary mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Olá, eu sou
              <motion.span
                className="block bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Thiago M.
              </motion.span>
            </motion.h1>

            <div className="text-2xl lg:text-3xl text-text-secondary font-medium h-12 mb-6">
              <span className="font-space">
                Desenvolvedor{' '}
                <motion.span
                  key={currentRole}
                  className="text-accent font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentRole}
                </motion.span>
              </span>
            </div>
          </div>

          <motion.button
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center mb-8 mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/cv-thiago.pdf';
              link.download = 'Thiago-magalhaes-CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <FaDownload className="mr-2" />
            Download CV
          </motion.button>

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-purple to-pink rounded-full blur-2xl opacity-30"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-4 bg-gradient-to-br from-accent/20 to-purple/20 rounded-full backdrop-blur-sm"></div>
              <img
                src="https://avatars.githubusercontent.com/u/56285370?v=4"
                alt="Thiago M."
                className="relative w-full h-full rounded-full border-4 border-accent/50 object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
