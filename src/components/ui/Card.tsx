import React from 'react';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variants = {
    default: 'card',
    outlined: 'border-2 border-gray-300 bg-white rounded-lg',
    elevated: 'bg-white shadow-lg border border-gray-100 rounded-lg'
  };

  return (
    <div 
      className={clsx(variants[variant], className)} 
      {...props}
    >
      {children}
    </div>
  );
};