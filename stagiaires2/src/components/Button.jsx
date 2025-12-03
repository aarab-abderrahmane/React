import React from 'react';
import { Loader2 } from 'lucide-react';


export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center  justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-primary-700 text-white shadow-sm shadow-primary-500/30 focus:ring-primary-500",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm focus:ring-slate-200",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-transparent focus:ring-red-500",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-200",
    outline: "bg-transparent border border-slate-300 text-slate-700 hover:border-primary-500 hover:text-primary-600 focus:ring-primary-500"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};