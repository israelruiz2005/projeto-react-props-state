import "./style.css";

export default function CardAnimal(props) {
  return (
    <div className="CardAnimal">
      <img src={props.imagemAnimal} alt="{props.tipoAnimal}" />
    </div>
  );
}
