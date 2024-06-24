import React from 'react'

interface ButtonProps {
  text: string;
  handleClick: () => Promise<void> | void;
  variant?: 'primary' |'warning' |'success' |'info';
}

const CustomButton: React.FC<ButtonProps> = ({ text, handleClick, variant = 'primary' }) => {
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-400 active:bg-yellow-600',
    success: 'bg-green-600 text-white hover:bg-green-500 active:bg-green-700',
    info: 'bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600',
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`inline-block rounded px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring ${variantClasses[variant]}`}
      >
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
