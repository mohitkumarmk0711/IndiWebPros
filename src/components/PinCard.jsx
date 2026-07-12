import "./PinCard.css";

function PinCard({ pin }) {
  return (
    <div className="pin-card">
      <div className="pin-image-container">
        <img src={pin.image} alt={pin.title} className="pin-image" />

        <button className="save-button">
          Save
        </button>
      </div>

      <div className="pin-content">
        <h3>{pin.title}</h3>
      </div>
    </div>
  );
}

export default PinCard;