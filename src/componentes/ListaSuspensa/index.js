import "./ListaSuspensa.css";

const ListaSuspensa = ({label, items,  valor, alterado, obrigatorio = false}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => alterado(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option />
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ListaSuspensa;
