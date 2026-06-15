import React from 'react';
import { motion } from 'framer-motion';

interface SpeechBubbleProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ 
  text, 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-2xl px-8 py-4'
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
      className={`relative inline-block bg-white border-4 border-black rounded-full
        font-display font-bold tracking-wide text-center ${sizeClasses[size]} ${className}`}
      style={{
        filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,1))'
      }}
    >
      {text}
      {/* Tail */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0
        border-l-[10px] border-l-transparent
        border-r-[10px] border-r-transparent
        border-t-[15px] border-t-black" />
      <div className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0
        border-l-[7px] border-l-transparent
        border-r-[7px] border-r-transparent
        border-t-[11px] border-t-white" />
    </motion.div>
  );
};

export default SpeechBubble;