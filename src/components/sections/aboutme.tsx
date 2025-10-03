import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import SocialLinks from '../socialLinks';

export default function AboutMe() {
  const [currentRole, setCurrentRole] = useState('Full Stack');
  const roles = useMemo(() => ['Full Stack', 'Frontend', 'Backend'], []);

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
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-dark via-primary to-darker">
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-10 top-20 size-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 size-96 rounded-full bg-purple/20 blur-3xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/15 blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-between px-6 py-20 lg:flex-row">
        <motion.div
          className="text-center lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8">
            <motion.div
              className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-card/60 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="mr-3 size-2 rounded-full bg-success"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-text-secondary">Disponível para projetos</span>
            </motion.div>

            <motion.h1
              className="mb-4 font-space text-5xl font-bold leading-tight text-text-primary lg:text-7xl"
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

            <div className="mb-6 h-12 text-2xl font-medium text-text-secondary lg:text-3xl">
              <span className="font-space">
                Desenvolvedor{' '}
                <div className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      className="font-semibold text-accent"
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.8
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        scale: 1.1
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "backInOut"
                      }}
                    >
                      {currentRole}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </span>
            </div>
          </div>

          <motion.button
            className="mx-auto mb-8 flex items-center justify-center rounded-xl border-2 border-accent px-8 py-4 font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white lg:mx-0"
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
          className="mt-12 flex justify-center lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-purple to-pink opacity-30 blur-2xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="relative size-80 lg:size-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-purple/20 backdrop-blur-sm"></div>
              <img
                src="https://avatars.githubusercontent.com/u/56285370?v=4"
                alt="Thiago M."
                className="relative size-full rounded-full border-4 border-accent/50 object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
