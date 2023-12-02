import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import './App.css'
import {v4 as uuidv4} from 'uuid'
import hexToRgba from "hex-to-rgba";


function App() {
  const [lanes, setLanes] = useState([
    {
      id:uuidv4(),
      nome: "TOP",
      cor: "#57c278"
    },
    {
      id:uuidv4(),
      nome: "MID",
      cor: "#82cffa"
    },
    {
      id:uuidv4(),
      nome: "JUNGLE",
      cor: "#a6d157"
    },
    {
      id:uuidv4(),
      nome: "ADC",
      cor: "#e06b69"
    },
    {
      id:uuidv4(),
      nome: "SUPORTE",
      cor: "#db6ebf"
    },
  ]);
  const jogadoresInicial = [
    {
      id:uuidv4(),
      nome:"jogador1",
      campeao:"Aatrox",
      imagem:'./imagens/campeoes/aatrox.jpg',
      lane:lanes[0].nome
    },
    {
      id:uuidv4(),
      nome:"jogador2",
      campeao:"Ahri",
      imagem:'/imagens/campeoes/ahri.jpg',
      lane:lanes[1].nome
    },
    {
      id:uuidv4(),
      nome:"jogador2",
      campeao:"Ahri",
      imagem:'/imagens/campeoes/ahri.jpg',
      lane:lanes[1].nome
    },
    {
      id:uuidv4(),
      nome:"jogador2",
      campeao:"Ahri",
      imagem:'/imagens/campeoes/ahri.jpg',
      lane:lanes[1].nome
    },
    {
      id:uuidv4(),
      nome:"jogador3",
      campeao:"amumu",
      imagem:'/imagens/campeoes/amumu.jpg',
      lane:lanes[2].nome
    },
    {
      id:uuidv4(),
      nome:"jogador3",
      campeao:"amumu",
      imagem:'/imagens/campeoes/amumu.jpg',
      lane:lanes[2].nome
    },
    {
      id:uuidv4(),
      nome:"jogador3",
      campeao:"amumu",
      imagem:'/imagens/campeoes/amumu.jpg',
      lane:lanes[2].nome
    },
    
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"Alistar",
      imagem:'/imagens/campeoes/alistar.jpg',
      lane:lanes[3].nome
    },
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"Alistar",
      imagem:'/imagens/campeoes/alistar.jpg',
      lane:lanes[3].nome
    },
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"Alistar",
      imagem:'/imagens/campeoes/alistar.jpg',
      lane:lanes[3].nome
    },
    {
      id:uuidv4(),
      nome:"jogador5",
      campeao:"Camille",
      imagem:'/imagens/campeoes/camille.jpg',
      lane:lanes[0].nome
    },
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"blitzcrank",
      imagem:'/imagens/campeoes/blitzcrank.jpg',
      lane:lanes[4].nome
    },
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"blitzcrank",
      imagem:'/imagens/campeoes/blitzcrank.jpg',
      lane:lanes[4].nome
    },
    {
      id:uuidv4(),
      nome:"jogador4",
      campeao:"blitzcrank",
      imagem:'/imagens/campeoes/blitzcrank.jpg',
      lane:lanes[4].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(jogadoresInicial);
  function mudarCorTimes(cor, id) {
    setLanes(lanes.map(lane => {
      if(lane.id === id){
        lane.cor = cor
      }
      return lane
    }))
  }

  const novoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    };
  return (
    <div className="App">
      {/* <Banner /> */}
      <div className="formulario-image">
      <Formulario lanes={lanes.map(lane => lane.nome)}
        colaboradorCadastrado={(colaborador) => novoColaborador(colaborador)}
      />
      </div>
        <section>
           <h2 className="jogadores" style={{backgroundColor: hexToRgba("0.6")}}>Jogadores Disponiveis</h2>
           {lanes.map((lane, indice) => 
        <Time
        mudarCor={mudarCorTimes}
          key={indice}
          lane={lane} 
          colaboradores={colaboradores.filter( colaborador => colaborador.lane === lane.nome)}
        />
        )}
        </section>
      
    </div>
  );
}

export default App;
