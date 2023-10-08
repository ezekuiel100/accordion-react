import { useState } from "react";
import "./style.css";

const dados = [
  {
    titulo: "Aqui tem um titulo",
    texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Vitae voluptatibus ut soluta delectus eaque officia eligendi corruptitemporibus tempora et nesciunt. `,
  },

  {
    titulo: "Aqui tem um titulo",
    texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Vitae voluptatibus ut soluta delectus eaque officia eligendi corruptitemporibus tempora et nesciunt. `,
  },

  {
    titulo: "Aqui tem um titulo",
    texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Vitae voluptatibus ut soluta delectus eaque officia eligendi corruptitemporibus tempora et nesciunt. `,
  },
];

function App() {
  const [atualAberto, setAtualAberto] = useState(null);

  return (
    <>
      {dados.map((dados, i) => (
        <Accordion
          index={i}
          dados={dados}
          setAtualAberto={setAtualAberto}
          atualAberto={atualAberto}
          key={i}
        />
      ))}
    </>
  );
}

function Accordion({ dados, setAtualAberto, atualAberto, index }) {
  let { titulo, texto } = dados;

  let open = index === atualAberto;

  return (
    <div className="accordion" onClick={() => setAtualAberto(index)}>
      <p className="titulo">{titulo}</p>
      {open && <p className="texto">{texto}</p>}
    </div>
  );
}

export default App;
