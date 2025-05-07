// src/components/SectionWrapper.jsx
import React from 'react';
import clsx from 'clsx';

const SectionWrapper = ({
  children,
  className = '',
  bgColor = 'bg-black',
  textColor = 'text-white',
  padding = 'py-12 px-4',
}) => {
  return (
    <section className={clsx(bgColor, textColor, padding, className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
