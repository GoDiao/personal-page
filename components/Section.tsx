import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-6xl mx-auto scroll-mt-20 ${className}`}>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block relative pb-4">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};