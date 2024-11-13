import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

// Lazy load pages
const Home = React.lazy(() => import('../pages/Home'));
const Tarot = React.lazy(() => import('../pages/Tarot'));
const Astrologia = React.lazy(() => import('../pages/Astrologia'));
const Horoscopo = React.lazy(() => import('../pages/Horoscopo'));
const Amor = React.lazy(() => import('../pages/Amor'));
const Numerologia = React.lazy(() => import('../pages/Numerologia'));
const Esoterismo = React.lazy(() => import('../pages/Esoterismo'));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div className="p-8">Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Tarot Routes */}
          <Route path="tarot" element={<Tarot />} />
          <Route path="tarot/consultas-tarot/*" element={<Tarot />} />
          <Route path="tarot/informacion-tarot/*" element={<Tarot />} />
          
          {/* Astrología Routes */}
          <Route path="astrologia" element={<Astrologia />} />
          <Route path="astrologia/consultas-astrologicas/*" element={<Astrologia />} />
          
          {/* Horóscopo Routes */}
          <Route path="horoscopo" element={<Horoscopo />} />
          <Route path="horoscopo/horoscopo-diario/*" element={<Horoscopo />} />
          <Route path="horoscopo/horoscopo-signos/*" element={<Horoscopo />} />
          
          {/* Amor Routes */}
          <Route path="amor" element={<Amor />} />
          <Route path="amor/consultas-amor/*" element={<Amor />} />
          
          {/* Numerología Routes */}
          <Route path="numerologia" element={<Numerologia />} />
          <Route path="numerologia/calculos-numerologicos/*" element={<Numerologia />} />
          
          {/* Esoterismo Routes */}
          <Route path="esoterismo" element={<Esoterismo />} />
          <Route path="esoterismo/interpretacion-adivinacion/*" element={<Esoterismo />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;