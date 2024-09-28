// Arrow.jsx
import React from 'react';

const Arrow = () => {
  return (
    <div className="arrow flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 10a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 10z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10 5a.5.5 0 01.5.5v9a.5.5 0 01-1 0v-9A.5.5 0 0110 5z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default Arrow;