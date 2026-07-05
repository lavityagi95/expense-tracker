import "../style/card.css";

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      
    </div>
  );
}


export default Card;