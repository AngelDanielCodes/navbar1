import React from 'react';
import { useLocation } from 'react-router-dom';

const Astrologia = () => {
  const location = useLocation();
  
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900">Astrología</h1>
      <p className="mt-4 text-gray-600">
        Sección actual: {location.pathname}
      </p>
    </article>
  );
};

export default Astrologia;