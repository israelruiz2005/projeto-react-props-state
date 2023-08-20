import "./style.css";

export default function CardInformacoes(props) {
  return (
    <div className="CardInformacao">
      <h3>Informação sobre o {props.tipoAnimal}</h3>
      <p>{props.informacaoAnimal}</p>
    </div>
  );
}
