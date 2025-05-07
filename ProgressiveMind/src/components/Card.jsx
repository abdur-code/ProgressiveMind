import React from 'react';
import clsx from 'clsx';

const Card = ({
  title,
  description,
  textColor = 'text-white',
  bgColor = 'bg-black',
  rounded = 'rounded-xl',
  padding = 'p-6',
  margin = 'm-6',
  className = '',
  children,
}) => {
  return (
    <div
      className={clsx(
        'relative group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl',
        margin,
        className,
        bgColor,
        rounded,
        padding,
        'border-2 border-blue-400 hover:border-gray-500'
      )}
    >
      {/* Icon container with animation */}
      <div className="transform transition-transform duration-300 group-hover:scale-110">
        {children}
      </div>
      
      <h3 className={clsx('text-xl font-bold font-calsans mb-2', textColor)}>
        {title}
      </h3>
      <p className="text-sm font-calsans mb-4 text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default Card;
