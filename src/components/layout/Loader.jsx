import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0c10] flex items-center justify-center z-[9999]">
      <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;