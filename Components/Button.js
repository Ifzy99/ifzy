import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ 
  text, 
  onClick, 
  className = '', 
  icon, 
  iconPosition = 'right' 
}) => {
  const iconElement = icon ? (
    <FontAwesomeIcon 
      icon={icon} 
      className={`${iconPosition === 'right' ? 'ml-2' : 'mr-2'}`}
    />
  ) : null;

  return (
    <button
      onClick={onClick}
      className={`group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-yellow-600 dark:bg-cyanLight backdrop-blur-lg px-6 py-2 text-base font-semibold text-white dark:text-veryDarkBlue transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20 ${className}`}
    >
      {iconPosition === 'left' && iconElement}
      <span className="text-lg">{text}</span>
      {iconPosition === 'right' && iconElement}
      <div
        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
      >
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </button>
  );
};

export default Button;