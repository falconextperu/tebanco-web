import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  withHoverGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  withHoverGlow = false,
  ...props 
}) => {
  const hoverClass = withHoverGlow ? 'hover-glow' : '';
  
  return (
    <div 
      className={`glass-card ${hoverClass} ${className}`.trim()} 
      {...props}
    >
      {children}
    </div>
  );
};
