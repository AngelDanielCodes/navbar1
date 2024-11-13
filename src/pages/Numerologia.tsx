import React from 'react';
import { useLocation } from 'react-router-dom';

const Numerologia = () => {
  const location = useLocation();
  
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">Numerología</h1>
      <p className="mt-4 text-gray-600">
        Sección actual: {location.pathname}
      </p>
    </article>
  );
};

export default Numerologia;