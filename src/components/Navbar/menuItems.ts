import { Scroll, Sparkles, Sun, Heart, Hash, Wand2 } from 'lucide-react';

export const menuItems = [
  {
    title: 'Tarot',
    path: '/tarot',
    icon: Scroll,
    submenu: [
      {
        title: 'Consultas de Tarot',
        path: '/tarot/consultas-tarot',
        submenu: [
          { title: 'Consulta 1 Carta', path: '/tarot/consultas-tarot/consulta-1-carta' },
          { title: 'Tirada Sí o No', path: '/tarot/consultas-tarot/tirada-si-o-no' },
          { title: 'Tirada Celta', path: '/tarot/consultas-tarot/tirada-celta' },
          { title: 'Tirada Estrella', path: '/tarot/consultas-tarot/tirada-estrella' },
          { title: 'Tirada Lunar', path: '/tarot/consultas-tarot/tirada-lunar' },
          { title: 'Tirada Solar', path: '/tarot/consultas-tarot/tirada-solar' },
          { title: 'Tirada Amor', path: '/tarot/consultas-tarot/tirada-amor' },
          { title: 'Tirada Tiempo', path: '/tarot/consultas-tarot/tirada-tiempo' },
          { title: 'Tirada Dinero', path: '/tarot/consultas-tarot/tirada-dinero' }
        ]
      },
      {
        title: 'Información Tarot',
        path: '/tarot/informacion-tarot',
        submenu: [
          { title: 'Historia y Origen', path: '/tarot/informacion-tarot/historia-origen-tarot' },
          { title: 'Tarot en la Actualidad', path: '/tarot/informacion-tarot/tarot-actualidad' },
          {
            title: 'Baraja de Tarot',
            path: '/tarot/informacion-tarot/baraja-tarot',
            submenu: [
              { title: 'Arcanos Mayores', path: '/tarot/informacion-tarot/baraja-tarot/arcanos-mayores' },
              { title: 'Arcanos Menores', path: '/tarot/informacion-tarot/baraja-tarot/arcanos-menores' }
            ]
          },
          {
            title: 'Tipos de Barajas',
            path: '/tarot/informacion-tarot/tipos-barajas-tarot',
            submenu: [
              { title: 'Rider Waite', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-rider-waite' },
              { title: 'Marsella', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-marsella' },
              { title: 'Egipcio', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-egipcio' },
              { title: 'Ángeles', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-angeles' },
              { title: 'Gitano', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-gitano' },
              { title: 'Zen', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-zen' },
              { title: 'Celta', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-celta' },
              { title: 'Esotérico', path: '/tarot/informacion-tarot/tipos-barajas-tarot/tarot-esoterico' }
            ]
          },
          {
            title: 'Combinaciones',
            path: '/tarot/informacion-tarot/combinaciones-tarot',
            submenu: [
              { title: 'Arcanos Mayores', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-arcanos-mayores' },
              { title: 'Arcanos Menores', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-arcanos-menores' },
              { title: 'Amor', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-amor' },
              { title: 'Dinero', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-dinero' },
              { title: 'Salud', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-salud' },
              { title: 'Suerte', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-suerte' },
              { title: 'Conflictos', path: '/tarot/informacion-tarot/combinaciones-tarot/combinaciones-conflictos' }
            ]
          },
          { title: 'Significado del Tarot', path: '/tarot/informacion-tarot/significado-tarot' },
          {
            title: 'Aprender Tarot',
            path: '/tarot/informacion-tarot/aprender-tarot',
            submenu: [
              { title: 'Cursos de Adivinación', path: '/tarot/informacion-tarot/aprender-tarot/cursos-tarot-adivinacion' },
              { title: 'Consejos Principiantes', path: '/tarot/informacion-tarot/aprender-tarot/consejos-principiantes' },
              { title: 'Guía de Interpretación', path: '/tarot/informacion-tarot/aprender-tarot/guia-interpretacion' },
              { title: 'Técnicas Avanzadas', path: '/tarot/informacion-tarot/aprender-tarot/tecnicas-avanzadas' }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Astrología',
    path: '/astrologia',
    icon: Sparkles,
    submenu: [
      {
        title: 'Consultas Astrológicas',
        path: '/astrologia/consultas-astrologicas',
        submenu: [
          { title: 'Carta Astral', path: '/astrologia/consultas-astrologicas/calcular-carta-astral' },
          { title: 'Calcular Ascendente', path: '/astrologia/consultas-astrologicas/calcular-ascendente' },
          { title: 'Signo Lunar', path: '/astrologia/consultas-astrologicas/calcular-signo-lunar' },
          { title: 'Calcular Lilith', path: '/astrologia/consultas-astrologicas/calcular-lilith' },
          { title: 'Nodos Norte y Sur', path: '/astrologia/consultas-astrologicas/calcular-nodo-norte-sur' },
          { title: 'Aspectos Planetarios', path: '/astrologia/consultas-astrologicas/aspectos-planetarios' },
          { title: 'Interpretación Casas', path: '/astrologia/consultas-astrologicas/interpretacion-casas' },
          { title: 'Análisis Retrógrados', path: '/astrologia/consultas-astrologicas/analisis-retrogrados' },
          { title: 'Fases Luna e Influencia', path: '/astrologia/consultas-astrologicas/fases-luna-influencia' },
          { title: 'Sinastría Parejas', path: '/astrologia/consultas-astrologicas/sinastria-parejas' }
        ]
      },
      {
        title: 'Información Astrología',
        path: '/astrologia/informacion-astrologia',
        submenu: [
          { title: 'Historia Astrología', path: '/astrologia/informacion-astrologia/historia-astrologia' },
          { title: 'Signos del Zodíaco', path: '/astrologia/informacion-astrologia/doce-signos-zodiaco' },
          { title: 'Planetas y Simbolismo', path: '/astrologia/informacion-astrologia/planetas-simbolismo' },
          { title: 'Elementos Astrología', path: '/astrologia/informacion-astrologia/cuatro-elementos-astrologia' },
          { title: 'Ciclos Astrológicos', path: '/astrologia/informacion-astrologia/ciclos-astrologicos' },
          { title: 'Casas y Significados', path: '/astrologia/informacion-astrologia/casas-significados' },
          { title: 'Sol, Luna y Ascendente', path: '/astrologia/informacion-astrologia/sol-luna-ascendente' },
          { title: 'Nodos y Karma', path: '/astrologia/informacion-astrologia/nodos-karma' },
          { title: 'Energía de Eclipses', path: '/astrologia/informacion-astrologia/energia-eclipses' },
          { title: 'Astrología y Personalidad', path: '/astrologia/informacion-astrologia/astrologia-personalidad' },
          { title: 'Interpretación Tránsitos', path: '/astrologia/informacion-astrologia/interpretacion-transitos' },
          { title: 'Desarrollo Personal', path: '/astrologia/informacion-astrologia/desarrollo-personal' }
        ]
      }
    ]
  },
  {
    title: 'Horóscopo',
    path: '/horoscopo',
    icon: Sun,
    submenu: [
      { title: 'Calcular Horóscopo', path: '/horoscopo/calcular-horoscopo' },
      {
        title: 'Horóscopo Diario',
        path: '/horoscopo/horoscopo-diario',
        submenu: [
          { title: 'Predicción Diaria', path: '/horoscopo/horoscopo-diario/prediccion-diaria' },
          { title: 'Predicción Semanal', path: '/horoscopo/horoscopo-diario/prediccion-semanal' },
          { title: 'Predicción Mensual', path: '/horoscopo/horoscopo-diario/prediccion-mensual' },
          { title: 'Predicción Anual', path: '/horoscopo/horoscopo-diario/prediccion-anual' }
        ]
      },
      {
        title: 'Horóscopo por Signos',
        path: '/horoscopo/horoscopo-signos',
        submenu: [
          { title: 'Aries', path: '/horoscopo/horoscopo-signos/horoscopo-aries' },
          { title: 'Tauro', path: '/horoscopo/horoscopo-signos/horoscopo-tauro' },
          { title: 'Géminis', path: '/horoscopo/horoscopo-signos/horoscopo-geminis' },
          { title: 'Cáncer', path: '/horoscopo/horoscopo-signos/horoscopo-cancer' },
          { title: 'Leo', path: '/horoscopo/horoscopo-signos/horoscopo-leo' },
          { title: 'Virgo', path: '/horoscopo/horoscopo-signos/horoscopo-virgo' },
          { title: 'Libra', path: '/horoscopo/horoscopo-signos/horoscopo-libra' },
          { title: 'Escorpio', path: '/horoscopo/horoscopo-signos/horoscopo-escorpio' },
          { title: 'Sagitario', path: '/horoscopo/horoscopo-signos/horoscopo-sagitario' },
          { title: 'Capricornio', path: '/horoscopo/horoscopo-signos/horoscopo-capricornio' },
          { title: 'Acuario', path: '/horoscopo/horoscopo-signos/horoscopo-acuario' },
          { title: 'Piscis', path: '/horoscopo/horoscopo-signos/horoscopo-piscis' }
        ]
      },
      {
        title: 'Información Horóscopo',
        path: '/horoscopo/informacion-horoscopo',
        submenu: [
          {
            title: 'Historia del Horóscopo',
            path: '/horoscopo/informacion-horoscopo/historia-horoscopo',
            submenu: [
              { title: 'Origen', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/origen-horoscopo' },
              { title: 'Evolución', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/evolucion-siglos' },
              { title: 'Cultura', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/horoscopo-cultura' },
              { title: 'Raíces', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/zodiaco-raices' },
              { title: 'Adaptación Moderna', path: '/horoscopo/informacion-horoscopo/historia-horoscopo/adaptacion-horoscopo-moderno' }
            ]
          },
          { title: 'Compatibilidad Signos', path: '/horoscopo/informacion-horoscopo/compatibilidad-signos' },
          {
            title: 'Horóscopos Especiales',
            path: '/horoscopo/informacion-horoscopo/horoscopos-especiales',
            submenu: [
              { title: 'Horóscopo Celta', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-celta' },
              { title: 'Horóscopo Egipcio', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-egipcio' },
              { title: 'Horóscopo Chino', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-chino' },
              { title: 'Horóscopo Maya', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-maya' },
              { title: 'Horóscopo Azteca', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-azteca' },
              { title: 'Horóscopo Gitano', path: '/horoscopo/informacion-horoscopo/horoscopos-especiales/horoscopo-gitano' }
            ]
          },
          { title: '¿Qué es Ofiuco?', path: '/horoscopo/informacion-horoscopo/que-es-ofiuco' }
        ]
      }
    ]
  },
  {
    title: 'Amor',
    path: '/amor',
    icon: Heart,
    submenu: [
      {
        title: 'Consultas de Amor',
        path: '/amor/consultas-amor',
        submenu: [
          { title: 'Compatibilidad de Pareja', path: '/amor/consultas-amor/compatibilidad-pareja' },
          { title: 'Compatibilidad Numérica', path: '/amor/consultas-amor/compatibilidad-numerica' },
          { title: 'Alma Gemela y Destino', path: '/amor/consultas-amor/alma-gemela-destino' },
          { title: 'Relaciones Kármicas', path: '/amor/consultas-amor/relaciones-karmicas' },
          { title: 'Consejos de Amor', path: '/amor/consultas-amor/consejos-amor' },
          { title: 'Predicciones Romance', path: '/amor/consultas-amor/predicciones-romance' },
          { title: 'Rituales para Relaciones', path: '/amor/consultas-amor/rituales-fortalecer-relaciones' },
          { title: 'Hechizos de Amor', path: '/amor/consultas-amor/hechizos-amor' },
          { title: 'Rituales Reconciliación', path: '/amor/consultas-amor/rituales-reconciliacion' },
          { title: 'Magia Luna y Romance', path: '/amor/consultas-amor/magia-luna-romance' },
          { title: 'Compatibilidad Elementos', path: '/amor/consultas-amor/compatibilidad-elementos' },
          { title: 'Fases Luna y Relaciones', path: '/amor/consultas-amor/fases-luna-relaciones' }
        ]
      },
      {
        title: 'Información Amor',
        path: '/amor/informacion-amor',
        submenu: [
          { title: 'Alma Gemela y Conexión', path: '/amor/informacion-amor/alma-gemela-conexion' },
          { title: 'Relaciones y Karma', path: '/amor/informacion-amor/relaciones-karma' },
          { title: 'Astrología y Amor', path: '/amor/informacion-amor/astrologia-amor' },
          { title: 'Fases Relación Zodíaco', path: '/amor/informacion-amor/fases-relacion-zodiaco' },
          { title: 'Energías del Amor', path: '/amor/informacion-amor/energias-amor' },
          { title: 'Guía Relaciones Duraderas', path: '/amor/informacion-amor/guia-relaciones-duraderas' },
          { title: 'Amor y Espiritualidad', path: '/amor/informacion-amor/amor-espiritualidad' },
          { title: 'Compatibilidad por Áreas', path: '/amor/informacion-amor/compatibilidad-areas' }
        ]
      }
    ]
  },
  {
    title: 'Numerología',
    path: '/numerologia',
    icon: Hash,
    submenu: [
      {
        title: 'Cálculos Numerológicos',
        path: '/numerologia/calculos-numerologicos',
        submenu: [
          { title: 'Número de Vida', path: '/numerologia/calculos-numerologicos/calcular-numero-vida' },
          { title: 'Número de Expresión', path: '/numerologia/calculos-numerologicos/calcular-numero-expresion' },
          { title: 'Número del Alma', path: '/numerologia/calculos-numerologicos/calcular-numero-alma' },
          { title: 'Número de Personalidad', path: '/numerologia/calculos-numerologicos/calcular-numero-personalidad' },
          { title: 'Número de Destino', path: '/numerologia/calculos-numerologicos/calcular-numero-destino' },
          { title: 'Número de Matrimonio', path: '/numerologia/calculos-numerologicos/calcular-numero-matrimonio' },
          { title: 'Número de Año Personal', path: '/numerologia/calculos-numerologicos/calcular-numero-ano-personal' },
          { title: 'Número de Misión', path: '/numerologia/calculos-numerologicos/calcular-numero-mision' }
        ]
      },
      {
        title: 'Información Numerología',
        path: '/numerologia/informacion-numerologia',
        submenu: [
          { title: 'Introducción', path: '/numerologia/informacion-numerologia/introduccion-numerologia' },
          { title: 'Números Básicos', path: '/numerologia/informacion-numerologia/signific ado-numeros-basicos' },
          { title: 'Números Maestros y Kármicos', path: '/numerologia/informacion-numerologia/numeros-maestros-karmicos' },
          { title: 'Ciclo de Vida', path: '/numerologia/informacion-numerologia/ciclo-vida-numerologia' },
          { title: 'Compatibilidad Numérica', path: '/numerologia/informacion-numerologia/compatibilidad-numerica' },
          { title: 'Influencia en la Vida', path: '/numerologia/informacion-numerologia/numeros-influencia-vida' },
          { title: 'Caminos de Vida', path: '/numerologia/informacion-numerologia/numeros-caminos-vida' },
          { title: 'Energía Números Maestros', path: '/numerologia/informacion-numerologia/energia-numeros-maestros' }
        ]
      }
    ]
  },
  {
    title: 'Esoterismo',
    path: '/esoterismo',
    icon: Wand2,
    submenu: [
      {
        title: 'Interpretación y Adivinación',
        path: '/esoterismo/interpretacion-adivinacion',
        submenu: [
          { title: 'Interpretación Sueños', path: '/esoterismo/interpretacion-adivinacion/interpretacion-suenos' },
          { title: 'Significado Nombres', path: '/esoterismo/interpretacion-adivinacion/significado-nombres' },
          { title: 'Lectura de Manos', path: '/esoterismo/interpretacion-adivinacion/lectura-manos' },
          { title: 'Interpretación Auras', path: '/esoterismo/interpretacion-adivinacion/interpretacion-auras' },
          { title: 'Numerología Fechas', path: '/esoterismo/interpretacion-adivinacion/numerologia-fechas' },
          { title: 'Significado Runas', path: '/esoterismo/interpretacion-adivinacion/runas-significado' },
          { title: 'Bola de Cristal', path: '/esoterismo/interpretacion-adivinacion/bola-cristal' },
          { title: 'Conexión Ángeles', path: '/esoterismo/interpretacion-adivinacion/conexion-angeles' }
        ]
      },
      {
        title: 'Hechizos y Rituales',
        path: '/esoterismo/hechizos-rituales',
        submenu: [
          { title: 'Rituales de Amor', path: '/esoterismo/hechizos-rituales/rituales-amor' },
          { title: 'Hechizos de Dinero', path: '/esoterismo/hechizos-rituales/hechizos-dinero' },
          { title: 'Rituales de Atracción', path: '/esoterismo/hechizos-rituales/rituales-atraccion' },
          { title: 'Magia Lunar', path: '/esoterismo/hechizos-rituales/magia-lunar' }
        ]
      },
      {
        title: 'Diccionario Esotérico',
        path: '/esoterismo/diccionario-esoterico',
        submenu: [
          { title: 'Símbolos Místicos', path: '/esoterismo/diccionario-esoterico/simbolos-misticos' },
          { title: 'Animales Espirituales', path: '/esoterismo/diccionario-esoterico/animales-espirituales' },
          { title: 'Amuletos Protección', path: '/esoterismo/diccionario-esoterico/amuletos-proteccion' },
          { title: 'Plantas Mágicas', path: '/esoterismo/diccionario-esoterico/plantas-magicas' }
        ]
      }
    ]
  }
];