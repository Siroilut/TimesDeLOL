import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const corSecundariaCss = { backgroundColor: props.corSecundaria };
  const corPrimariaCss = { borderColor: props.corPrimaria };

  return (
    <section className="lane" style={corSecundariaCss}>
      <h3 style={corPrimariaCss}>{props.nome}</h3>
      <div className="colaboradores">
      {props.colaboradores.map((colaborador) => (
        <Colaborador
          nome={colaborador.nome}
          campeao={colaborador.campeao}
          imagem={colaborador.imagem}
        />
      ))}
      </div>
    </section>
  );
};

export default Time;
