import "./App.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const boards = [
    { title: "Nature", img: "https://picsum.photos/300/450?1" },
    { title: "Beach", img: "https://picsum.photos/300/350?2" },
    { title: "Mountains", img: "https://picsum.photos/300/500?3" },
    { title: "Travel", img: "https://picsum.photos/300/400?4" },
    { title: "Food", img: "https://picsum.photos/300/380?5" },
    { title: "Animals", img: "https://picsum.photos/300/470?6" },
    { title: "Cars", img: "https://picsum.photos/300/420?7" },
    { title: "Flowers", img: "https://picsum.photos/300/460?8" },
    { title: "Sky", img: "https://picsum.photos/300/390?9" },
    { title: "City", img: "https://picsum.photos/300/480?10" },
    { title: "Forest", img: "https://picsum.photos/300/410?11" },
    { title: "Sunset", img: "https://picsum.photos/300/520?12" }
  ];

  return (
    <div>
      <nav>
        <h2>Pinterest</h2>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </nav>

      <h1>Welcome to My Pinterest Clone</h1>

      <div className="boards">
        {boards
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div className="board" key={index}>
              <img src={item.img} alt={item.title} />
              <button>Save</button>
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
      <footer>
       <p>© 2026 My Pinterest Clone</p>
      </footer>
      </div>
  );
}

export default App;