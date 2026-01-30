'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-md font-bold px-4 py-2 transition-all duration-300';
  const variantClasses = {
    primary: 'bg-[#f4c653] text-[#1c170d] hover:bg-[#e5b744]',
    secondary: 'bg-gray-200 text-[#1c170d] hover:bg-gray-300'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
