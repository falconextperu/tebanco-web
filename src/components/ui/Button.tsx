import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variantClasses: Record<string, string> = {
  primary: 'text-white disabled:opacity-60 hover:enabled:-translate-y-0.5 hover:enabled:shadow-[0_6px_20px_rgba(0,240,255,0.5)]',
  secondary: 'bg-white/10 text-white border border-white/10 backdrop-blur-[10px] disabled:opacity-60 hover:enabled:bg-white/15 hover:enabled:-translate-y-0.5',
  outline: 'bg-transparent text-[#00f0ff] border border-[#00f0ff] disabled:opacity-60 hover:enabled:bg-[rgba(0,240,255,0.1)]',
  ghost: 'bg-transparent text-[#94a3b8] disabled:opacity-60 hover:enabled:text-white hover:enabled:bg-white/5',
};

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: 'linear-gradient(135deg, #00f0ff 0%, #7000ff 100%)',
    boxShadow: '0 4px 14px 0 rgba(0,240,255,0.3)'
  },
  secondary: {},
  outline: {},
  ghost: {},
};

const sizeClasses: Record<string, string> = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  style,
  ...props
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-lg cursor-pointer transition-all duration-200 ease-in-out border-none ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      style={{ ...variantStyles[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
