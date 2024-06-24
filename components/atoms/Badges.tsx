import React from 'react';

interface BadgeProps {
  text: string;
  type: 'caution' | 'healthy';
}

const Badge: React.FC<BadgeProps> = ({ text, type }) => {
  // Define class depending on type
  const badgeClasses =
    type === 'caution'
      ? 'bg-red-100 text-red-700'
      : 'bg-green-100 text-green-700';

  return (
    <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 ${badgeClasses}`}>
      <p className="whitespace-nowrap text-sm">{text}</p>
    </span>
  );
};

export default Badge;
