import "./Gallery.css";
import PinCard from "./PinCard";
import pins from "./data";

function Gallery() {
  return (
    <main className="gallery">
      {pins.map((pin) => (
        <PinCard
          key={pin.id}
          pin={pin}
        />
      ))}
    </main>
  );
}

export default Gallery;