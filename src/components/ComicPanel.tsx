import React from 'react';
import { motion } from 'framer-motion';

interface ComicPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'tilted' | 'arrow';
  tiltDirection?: 'left' | 'right';
  delay?: number;
}

const ComicPanel: React.FC<ComicPanelProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  tiltDirection = 'right',
  delay = 0
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'tilted':
        return tiltDirection === 'right' ? 'rotate-1' : '-rotate-1';
      case 'arrow':
        return 'relative';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative bg-white comic-border comic-shadow ${getVariantStyles()} ${className}`}
    >
      {variant === 'arrow' && (
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 
          border-t-[15px] border-t-transparent
          border-l-[20px] border-l-black
          border-b-[15px] border-b-transparent">
          <div className="absolute -top-[10px] -left-[18px]
            border-t-[10px] border-t-transparent
            border-l-[15px] border-l-white
            border-b-[10px] border-b-transparent" />
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default ComicPanel;