import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import './App.css'

function App() {
  const lanes = [
    {
      nome: "TOP",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9 ",
    },
    {
      nome: "MID",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "JUNGLE",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "ADC",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "SUPORTE",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    };
  return (
    <div className="App">
      <Banner />
      <Formulario lanes={lanes.map(lane => lane.nome)}
        colaboradorCadastrado={(colaborador) => novoColaborador(colaborador)}
      />
      <h2 className="jogadores">Jogadores Disponiveis</h2>
      {lanes.map((lane) => (
        
        <Time
          key={lane.nome}
          nome={lane.nome}
          corPrimaria={lane.corPrimaria}
          corSecundaria={lane.corSecundaria}
          colaboradores={colaboradores.filter( colaborador => colaborador.lane === lane.nome)}
        />
      ))}
    </div>
  );
}

export default App;
