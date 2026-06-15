import React from 'react';
import { motion } from 'framer-motion';

interface PandaCharacterProps {
  variant: 'sitting' | 'waving' | 'lying' | 'barrel' | 'bamboo' | 'hero';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const PandaCharacter: React.FC<PandaCharacterProps> = ({ 
  variant, 
  className = '',
  size = 'md',
  animate = true
}) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
    xl: 'w-72 h-72'
  };

  const renderPanda = () => {
    switch (variant) {
      case 'hero':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Main body */}
            <ellipse cx="100" cy="120" rx="55" ry="50" fill="white" stroke="black" strokeWidth="3"/>
            {/* Head */}
            <ellipse cx="100" cy="70" rx="45" ry="40" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="65" cy="45" r="15" fill="black"/>
            <circle cx="135" cy="45" r="15" fill="black"/>
            {/* Eye patches */}
            <ellipse cx="80" cy="65" rx="12" ry="15" fill="black" transform="rotate(-15 80 65)"/>
            <ellipse cx="120" cy="65" rx="12" ry="15" fill="black" transform="rotate(15 120 65)"/>
            {/* Eyes */}
            <circle cx="82" cy="62" r="4" fill="white"/>
            <circle cx="118" cy="62" r="4" fill="white"/>
            <circle cx="82" cy="62" r="2" fill="black"/>
            <circle cx="118" cy="62" r="2" fill="black"/>
            {/* Nose */}
            <ellipse cx="100" cy="78" rx="6" ry="4" fill="black"/>
            {/* Mouth */}
            <path d="M 92 85 Q 100 92 108 85" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            {/* Arms holding bamboo */}
            <ellipse cx="55" cy="110" rx="15" ry="25" fill="black" transform="rotate(-30 55 110)"/>
            <ellipse cx="145" cy="110" rx="15" ry="25" fill="black" transform="rotate(30 145 110)"/>
            {/* Bamboo */}
            <rect x="95" y="60" width="6" height="80" fill="#90EE90" stroke="black" strokeWidth="2"/>
            <rect x="93" y="75" width="10" height="4" fill="#228B22" stroke="black" strokeWidth="1"/>
            <rect x="93" y="95" width="10" height="4" fill="#228B22" stroke="black" strokeWidth="1"/>
            <rect x="93" y="115" width="10" height="4" fill="#228B22" stroke="black" strokeWidth="1"/>
            {/* Bamboo leaves */}
            <ellipse cx="85" cy="55" rx="12" ry="4" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(-30 85 55)"/>
            <ellipse cx="115" cy="50" rx="12" ry="4" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(30 115 50)"/>
            <ellipse cx="80" cy="70" rx="10" ry="3" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(-45 80 70)"/>
            {/* Legs */}
            <ellipse cx="75" cy="155" rx="18" ry="12" fill="black"/>
            <ellipse cx="125" cy="155" rx="18" ry="12" fill="black"/>
            {/* Paw pads */}
            <circle cx="75" cy="152" r="3" fill="#333"/>
            <circle cx="125" cy="152" r="3" fill="#333"/>
            <ellipse cx="75" cy="158" rx="5" ry="3" fill="#333"/>
            <ellipse cx="125" cy="158" rx="5" ry="3" fill="#333"/>
          </svg>
        );
      
      case 'waving':
        return (
          <svg viewBox="0 0 200 220" className="w-full h-full">
            {/* Body */}
            <ellipse cx="100" cy="130" rx="50" ry="55" fill="white" stroke="black" strokeWidth="3"/>
            {/* Head */}
            <ellipse cx="100" cy="75" rx="42" ry="38" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="68" cy="48" r="14" fill="black"/>
            <circle cx="132" cy="48" r="14" fill="black"/>
            {/* Eye patches */}
            <ellipse cx="82" cy="70" rx="11" ry="14" fill="black" transform="rotate(-15 82 70)"/>
            <ellipse cx="118" cy="70" rx="11" ry="14" fill="black" transform="rotate(15 118 70)"/>
            {/* Eyes - winking left, open right */}
            <path d="M 76 68 Q 82 72 88 68" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="116" cy="68" r="3" fill="white"/>
            <circle cx="116" cy="68" r="1.5" fill="black"/>
            {/* Nose */}
            <ellipse cx="100" cy="82" rx="5" ry="3.5" fill="black"/>
            {/* Mouth - happy */}
            <path d="M 90 88 Q 100 98 110 88" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Waving arm */}
            <ellipse cx="145" cy="95" rx="12" ry="22" fill="black" transform="rotate(-60 145 95)"/>
            <ellipse cx="155" cy="70" rx="10" ry="18" fill="black" transform="rotate(-30 155 70)"/>
            {/* Other arm */}
            <ellipse cx="55" cy="115" rx="12" ry="22" fill="black" transform="rotate(20 55 115)"/>
            {/* Legs */}
            <ellipse cx="75" cy="170" rx="16" ry="10" fill="black"/>
            <ellipse cx="125" cy="170" rx="16" ry="10" fill="black"/>
            {/* Sparkle */}
            <path d="M 160 50 L 163 58 L 171 61 L 163 64 L 160 72 L 157 64 L 149 61 L 157 58 Z" fill="black"/>
          </svg>
        );

      case 'lying':
        return (
          <svg viewBox="0 0 220 150" className="w-full h-full">
            {/* Body - lying down */}
            <ellipse cx="110" cy="85" rx="70" ry="35" fill="white" stroke="black" strokeWidth="3"/>
            {/* Head */}
            <ellipse cx="60" cy="70" rx="38" ry="35" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="32" cy="45" r="13" fill="black"/>
            <circle cx="88" cy="45" r="13" fill="black"/>
            {/* Eye patches */}
            <ellipse cx="48" cy="65" rx="10" ry="13" fill="black" transform="rotate(-10 48 65)"/>
            <ellipse cx="72" cy="65" rx="10" ry="13" fill="black" transform="rotate(10 72 65)"/>
            {/* Eyes - both open, happy */}
            <circle cx="49" cy="63" r="3" fill="white"/>
            <circle cx="71" cy="63" r="3" fill="white"/>
            <circle cx="49" cy="63" r="1.5" fill="black"/>
            <circle cx="71" cy="63" r="1.5" fill="black"/>
            {/* Nose */}
            <ellipse cx="60" cy="78" rx="5" ry="3" fill="black"/>
            {/* Mouth - big smile */}
            <path d="M 50 83 Q 60 92 70 83" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            {/* Front paws */}
            <ellipse cx="90" cy="105" rx="14" ry="10" fill="black" transform="rotate(-20 90 105)"/>
            <ellipse cx="130" cy="100" rx="14" ry="10" fill="black" transform="rotate(10 130 100)"/>
            {/* Back legs/feet up */}
            <ellipse cx="170" cy="65" rx="12" ry="18" fill="black" transform="rotate(-70 170 65)"/>
            <ellipse cx="185" cy="55" rx="10" ry="14" fill="black" transform="rotate(-50 185 55)"/>
            {/* Tail */}
            <circle cx="185" cy="90" r="12" fill="black"/>
            {/* Belly patch */}
            <ellipse cx="120" cy="85" rx="25" ry="18" fill="#f8f8f8" stroke="black" strokeWidth="1.5"/>
          </svg>
        );

      case 'barrel':
        return (
          <svg viewBox="0 0 180 200" className="w-full h-full">
            {/* Barrel */}
            <rect x="45" y="80" width="50" height="70" rx="5" fill="#8B4513" stroke="black" strokeWidth="3"/>
            <rect x="45" y="90" width="50" height="8" fill="#654321" stroke="black" strokeWidth="2"/>
            <rect x="45" y="110" width="50" height="8" fill="#654321" stroke="black" strokeWidth="2"/>
            <rect x="45" y="130" width="50" height="8" fill="#654321" stroke="black" strokeWidth="2"/>
            {/* Panda peeking from barrel */}
            <ellipse cx="70" cy="65" rx="35" ry="32" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="42" cy="42" r="12" fill="black"/>
            <circle cx="98" cy="42" r="12" fill="black"/>
            {/* Eye patches */}
            <ellipse cx="55" cy="60" rx="10" ry="12" fill="black" transform="rotate(-12 55 60)"/>
            <ellipse cx="85" cy="60" rx="10" ry="12" fill="black" transform="rotate(12 85 60)"/>
            {/* Eyes */}
            <circle cx="56" cy="58" r="3" fill="white"/>
            <circle cx="84" cy="58" r="3" fill="white"/>
            <circle cx="56" cy="58" r="1.5" fill="black"/>
            <circle cx="84" cy="58" r="1.5" fill="black"/>
            {/* Nose */}
            <ellipse cx="70" cy="72" rx="4" ry="3" fill="black"/>
            {/* Mouth */}
            <path d="M 63 78 Q 70 84 77 78" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            {/* Paws on barrel rim */}
            <ellipse cx="35" cy="85" rx="10" ry="14" fill="black" transform="rotate(-20 35 85)"/>
            <ellipse cx="105" cy="85" rx="10" ry="14" fill="black" transform="rotate(20 105 85)"/>
          </svg>
        );

      case 'sitting':
        return (
          <svg viewBox="0 0 200 220" className="w-full h-full">
            {/* Body */}
            <ellipse cx="100" cy="130" rx="48" ry="52" fill="white" stroke="black" strokeWidth="3"/>
            {/* Head */}
            <ellipse cx="100" cy="75" rx="42" ry="38" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="68" cy="48" r="14" fill="black"/>
            <circle cx="132" cy="48" r="14" fill="black"/>
            {/* Eye patches */}
            <ellipse cx="82" cy="70" rx="11" ry="14" fill="black" transform="rotate(-15 82 70)"/>
            <ellipse cx="118" cy="70" rx="11" ry="14" fill="black" transform="rotate(15 118 70)"/>
            {/* Eyes */}
            <circle cx="84" cy="68" r="3.5" fill="white"/>
            <circle cx="116" cy="68" r="3.5" fill="white"/>
            <circle cx="84" cy="68" r="2" fill="black"/>
            <circle cx="116" cy="68" r="2" fill="black"/>
            {/* Nose */}
            <ellipse cx="100" cy="82" rx="5" ry="3.5" fill="black"/>
            {/* Mouth */}
            <path d="M 92 88 Q 100 95 108 88" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Arms */}
            <ellipse cx="55" cy="115" rx="13" ry="22" fill="black" transform="rotate(15 55 115)"/>
            <ellipse cx="145" cy="115" rx="13" ry="22" fill="black" transform="rotate(-15 145 115)"/>
            {/* Legs */}
            <ellipse cx="75" cy="170" rx="16" ry="12" fill="black"/>
            <ellipse cx="125" cy="170" rx="16" ry="12" fill="black"/>
            {/* Bamboo beside */}
            <rect x="155" y="60" width="5" height="100" fill="#90EE90" stroke="black" strokeWidth="2"/>
            <ellipse cx="150" y="80" rx="10" ry="3" fill="#90EE90" stroke="black" strokeWidth="1" transform="rotate(-30 150 80)"/>
            <ellipse cx="165" y="100" rx="10" ry="3" fill="#90EE90" stroke="black" strokeWidth="1" transform="rotate(30 165 100)"/>
          </svg>
        );

      case 'bamboo':
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Body */}
            <ellipse cx="100" cy="125" rx="50" ry="48" fill="white" stroke="black" strokeWidth="3"/>
            {/* Head */}
            <ellipse cx="100" cy="70" rx="44" ry="40" fill="white" stroke="black" strokeWidth="3"/>
            {/* Ears */}
            <circle cx="65" cy="45" r="14" fill="black"/>
            <circle cx="135" cy="45" r="14" fill="black"/>
            {/* Eye patches - sleepy/happy */}
            <ellipse cx="82" cy="68" rx="12" ry="14" fill="black" transform="rotate(-15 82 68)"/>
            <ellipse cx="118" cy="68" rx="12" ry="14" fill="black" transform="rotate(15 118 68)"/>
            {/* Eyes - closed happy */}
            <path d="M 76 66 Q 82 70 88 66" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 112 66 Q 118 70 124 66" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {/* Nose */}
            <ellipse cx="100" cy="80" rx="5" ry="3.5" fill="black"/>
            {/* Mouth - content smile */}
            <path d="M 92 86 Q 100 92 108 86" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            {/* Arms holding bamboo */}
            <ellipse cx="55" cy="110" rx="14" ry="24" fill="black" transform="rotate(25 55 110)"/>
            <ellipse cx="145" cy="110" rx="14" ry="24" fill="black" transform="rotate(-25 145 110)"/>
            {/* Bamboo */}
            <rect x="96" y="50" width="8" height="90" fill="#90EE90" stroke="black" strokeWidth="2"/>
            <rect x="94" y="70" width="12" height="5" fill="#228B22" stroke="black" strokeWidth="1"/>
            <rect x="94" y="95" width="12" height="5" fill="#228B22" stroke="black" strokeWidth="1"/>
            <rect x="94" y="120" width="12" height="5" fill="#228B22" stroke="black" strokeWidth="1"/>
            {/* Leaves */}
            <ellipse cx="85" cy="55" rx="14" ry="4" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(-35 85 55)"/>
            <ellipse cx="118" cy="50" rx="14" ry="4" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(35 118 50)"/>
            <ellipse cx="80" cy="75" rx="12" ry="3" fill="#90EE90" stroke="black" strokeWidth="1.5" transform="rotate(-50 80 75)"/>
            {/* Legs */}
            <ellipse cx="75" cy="165" rx="17" ry="11" fill="black"/>
            <ellipse cx="125" cy="165" rx="17" ry="11" fill="black"/>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={animate ? {
        y: [0, -8, 0],
      } : {}}
      transition={animate ? {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      {renderPanda()}
    </motion.div>
  );
};

export default PandaCharacter;