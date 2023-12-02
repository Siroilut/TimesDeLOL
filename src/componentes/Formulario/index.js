import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import ListaSuspensa from "../ListaSuspensa/index.js";
import Botao from "../Botao/index.js";
import { useState } from "react";

const Formulario = ({colaboradorCadastrado, lanes}) => {
 
  const [nome, setNome] = useState("");
  const [campeao, setCampeao] = useState("");
  const [imagem, setImagem] = useState("");
  const [lane, setLane] = useState("");

  const opcoesImagens = [
    { valor: '/imagens/campeoes/aatrox.jpg', label: 'Aatrox'},
    { valor: '/imagens/campeoes/ahri.jpg', label: 'ahri'},
    { valor: '/imagens/campeoes/alistar.jpg', label: 'alistar'},
    { valor: '/imagens/campeoes/amumu.jpg', label: 'amumu'},
    { valor: '/imagens/campeoes/blitzcrank.jpg', label: 'blitzcrank'},
    { valor: '/imagens/campeoes/braum.jpg', label: 'braum'},
    { valor: '/imagens/campeoes/camille.jpg', label: 'camille'},
    { valor: '/imagens/campeoes/chogath.jpg', label: 'chogath'},
    { valor: '/imagens/campeoes/drmundo.jpg', label: 'drmundo'},  
   ]

  const salvar = (event) => {
    event.preventDefault();
    colaboradorCadastrado({
      nome,
      campeao,
      imagem,
      lane
    });
    setNome('')
    setCampeao('')
    setImagem('')
    setLane('')
  };
  return (
    <section className="formulario">
      <form onSubmit={salvar}>
        <h2>Preencha os dados para criar o seu card</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu NickName"
          valor={nome}
          alterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Campeão"
          placeholder="Digite o nome do seu Campeão"
          valor={campeao}
          alterado={valor => setCampeao(valor)}
        />
        
          <label>Selecione a imagem do seu campeão </label>
          <select
            required={true}
            value={imagem}
            onChange={(evento) => setImagem(evento.target.value)}
          >
            <option value="" disabled hidden>
              Escolha uma imagem
            </option>
            {opcoesImagens.map((opcao) => (
              <option key={opcao.valor} value={opcao.valor} data-imagem={opcao.valor}>
                {opcao.label}
              </option>
            ))}
          </select>
        <ListaSuspensa
          obrigatorio={true}
          label="Lanes"
          items={lanes}
          valor={lane}
          alterado={valor => setLane(valor)}
        />
        <Botao texto="criar card" />
      </form>
    </section>
  );
};

export default Formulario;
