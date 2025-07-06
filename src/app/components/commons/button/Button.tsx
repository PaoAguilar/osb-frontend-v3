import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-full 
    transition-all duration-200 ease-in-out cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${loading ? 'cursor-wait' : ''}
  `;

  const variants: Record<ButtonVariant, string> = {
    primary: `
      bg-primary-orange text-white hover:bg-primary-orange/90 active:bg-primary-orange/80
      focus:ring-primary-orange shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400
      focus:ring-gray-500 shadow-sm hover:shadow-md
    `,
    success: `
      bg-green-600 text-white hover:bg-green-700 active:bg-green-800
      focus:ring-green-500 shadow-sm hover:shadow-md
    `,
    danger: `
      bg-red-600 text-white hover:bg-red-700 active:bg-red-800
      focus:ring-red-500 shadow-sm hover:shadow-md
    `,
    outline: `
      border-2 border-primary-orange text-white bg-transparent
      hover:bg-primary-orange/20 active:bg-primary-orange/80 focus:ring-primary-orange
    `,
    ghost: `
      text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200
      focus:ring-gray-500
    `,
  };

  const sizes: Record<ButtonSize, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
export type { ButtonProps, ButtonVariant, ButtonSize };