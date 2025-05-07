import React from 'react';
import clsx from 'clsx';

const GradientHeading = ({
  text,
  fromColor = 'var(--tw-green-400, #4ade80)', // Light green
  toColor = 'var(--tw-blue-400, #60a5fa)',     // Light blue
  className = '',
  size = 'text-4xl md:text-5xl lg:text-6xl',
}) => {
  const gradientStyle = {
    display: 'inline-block',
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', // For Firefox support
    color: 'transparent',   // Fallback for browsers that don't support background-clip
    backgroundSize: '100%', // Ensures gradient covers the full width
    padding: '0.05em 0',    // Small padding to ensure gradient edges are visible
    width: 'fit-content',   // Makes the element fit the content width
  };

  return (
    <h2
      className={clsx('font-bold font-calsans', size, className)}
      style={gradientStyle}
    >
      {text}
    </h2>
  );
};

export default GradientHeading;
