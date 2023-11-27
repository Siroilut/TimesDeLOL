import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const digitado = (evento) => {
    // evento.preventDefault()
    props.alterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={digitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
