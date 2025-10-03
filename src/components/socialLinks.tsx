import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
  variant?: 'default' | 'footer';
}

export default function SocialLinks({
  variant = 'default'
}: SocialLinksProps) {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/zThiagoR',
      label: 'GitHub'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/thiago-m',
      label: 'LinkedIn'
    }
  ];

  const baseClasses = `w-12 h-12 bg-card/60 backdrop-blur-sm border ${variant === 'footer' ? 'border-accent/30' : 'border-border'} rounded-xl flex items-center justify-center ${variant === 'footer' ? 'text-text-primary' : 'text-text-secondary'} hover:text-accent hover:border-accent transition-all duration-300`;

  return (
    <div className={`flex space-x-4`}>
      {socialLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={baseClasses}
            whileHover={{
              scale: 1.1,
              borderColor: "#00d4ff",
              boxShadow: variant === 'footer' ? "0 5px 15px rgba(0, 212, 255, 0.3)" : undefined
            }}
            whileTap={{ scale: 0.9 }}
          >
            <IconComponent size={14} />
          </motion.a>
        );
      })}
    </div>
  );
}