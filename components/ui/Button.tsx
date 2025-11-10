import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variantClasses = 
      variant === 'primary' ? 'bg-charcoal text-white hover:bg-charcoal/90' :
      variant === 'secondary' ? 'border border-charcoal text-charcoal hover:bg-charcoal/5' :
      'text-charcoal hover:bg-charcoal/5';
    
    const sizeClasses = 
      size === 'sm' ? 'h-9 px-4 py-2 text-sm' :
      size === 'lg' ? 'h-14 px-8 py-3 text-lg' :
      'h-11 px-6 py-2.5 text-base';

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses,
          sizeClasses,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 