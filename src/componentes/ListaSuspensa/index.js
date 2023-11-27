import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.alterado(evento.target.value)}
        required={props.required}
        value={props.value}
      >
        {Array.isArray(props.itens) &&
          props.itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ListaSuspensa;
