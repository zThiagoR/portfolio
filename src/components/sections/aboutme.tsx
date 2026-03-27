import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SocialLinks from '../socialLinks';

const ROLES = ['Full Stack', 'Frontend', 'Backend'];

export default function AboutMe() {
  const [currentRole, setCurrentRole] = useState('Full Stack');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => {
        const currentIndex = ROLES.indexOf(prev);
        return ROLES[(currentIndex + 1) % ROLES.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

      <div className="container relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:gap-16">
        <motion.div
          className="flex w-full flex-col items-center text-center lg:max-w-xl lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <motion.h1
              className="font-space text-5xl font-bold leading-tight text-text-primary lg:text-7xl"
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

            <div className="flex min-h-12 items-center justify-center text-2xl font-medium text-text-secondary lg:justify-start lg:text-3xl">
              <span className="font-space">
                Desenvolvedor{' '}
                <span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      className="transform-gpu font-semibold text-accent will-change-[opacity] [backface-visibility:hidden]"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {currentRole}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </div>
          </div>

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
          className="mt-12 flex w-full justify-center lg:mt-0 lg:max-w-xl"
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