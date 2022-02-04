import { useState, useEffect, useCallback } from "react";

import './App.css';

const colors = [
  { value: "rgb(228,219,204)", label: "Aroma de Café" },
  { value: "rgb(216,225,214)", label: "Frescor da Natureza" },
  { value: "rgb(239,239,220)", label: "Areia Fina" },
  { value: "rgb(233,231,215)", label: "Guardanapo de Pano" },
  { value: "rgb(243,241,229)", label: "Espuma de Baunilha" },
  { value: "rgb(246,193,174)", label: "Salada de Frutas" },
  { value: "rgb(244,230,221)", label: "Bolo de Noiva" },
  { value: "rgb(248,218,201)", label: "Céu de Primavera" },
  { value: "rgb(254,213,200)", label: "Rosa Amor" },
  { value: "rgb(244,222,215)", label: "Beleza Natural" },
  { value: "rgb(155,175,191)", label: "Céu Nublado" },
  { value: "rgb(184,205,176)", label: "Maçã Verde" },
  { value: "rgb(212,227,218)", label: "Verde Gasoso" },
  { value: "rgb(232,231,207)", label: "Gelo e Limão" },
  { value: "rgb(61,65,95)", label: "Indigo Blue" },
  { value: "rgb(0,93,132)", label: "Azul-profundo" },
  { value: "rgb(170,127,89)", label: "Cuia de Chimarrao" },
  { value: "rgb(226,188,179)", label: "Capa de Livro" },
  { value: "rgb(133,151,170)", label: "Ilha Azul" },
  { value: "rgb(146,182,193)", label: "Rio Ebro" },
  { value: "rgb(161,198,200)", label: "Vidro Temperado" },
  { value: "rgb(203,188,156)", label: "Cerrado" },
  { value: "rgb(215,205,184)", label: "Lamparina" },
  { value: "rgb(233,209,184)", label: "Canjica" },
  { value: "rgb(219,204,202)", label: "Caminho de Vento" },
  { value: "rgb(162,170,176)", label: "Caminho de Brita" },
  { value: "rgb(217,211,194)", label: "Biscoito de Mantecal" }
];

const floors = [
  {value: "/chao-apartamento.jpg", label: "Apartamento"},
  {value: "/chao-cozinha.jpg", label: "Cozinha"},
]

function App() {
  const [color, setColor] = useState(0);
  const [floor, setFloor] = useState(0);

  const onKeyDown = useCallback((event) => {
    const keyMap = {
      ArrowLeft: [-1, setColor, colors.length],
      ArrowRight: [+1, setColor, colors.length],
      ArrowUp: [-1, setFloor, floors.length],
      ArrowDown: [+1, setFloor, floors.length],
    };

    if (!(event.key in keyMap)) return;

    const [inc, fn, len] = keyMap[event.key];

    fn(v => (v + inc + len) % len)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <>
      <div style={{ background: colors[color].value }} className="paint">
        <h3>{colors[color].label}</h3>
      </div>
      <div className="baseboard">
        <div className="baseboard-top" />
        <div className="baseboard-bottom" />
      </div>
      <div className="floor" style={{ backgroundImage: `url(${floors[floor].value})` }}>
        <h3>{floors[floor].label}</h3>
      </div>
    </>
  )
}

export default App;
