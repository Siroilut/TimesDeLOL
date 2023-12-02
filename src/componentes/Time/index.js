import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ lane, colaboradores, mudarCor }) => {
  return (
    <section
      className="lane"
      style={{
        backgroundImage:"url(/imagens/Imagem-de-fundo-7.png)",
        backgroundColor: hexToRgba(lane.cor, "0.1") }}
    >
      <input
        value={lane.cor}
        onChange={(evento) => mudarCor(evento.target.value, lane.id)}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: lane.cor }}>{lane.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => (
          <Colaborador
            key={indice}
            colaborador={colaborador}
            corDeFundo={lane.cor}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
