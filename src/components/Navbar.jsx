import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="logo">
          <span>P</span>
        </div>

        <button className="nav-btn active">Home</button>
        <button className="nav-btn">Explore</button>
        <button className="nav-btn">Create</button>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="🔍 Search for ideas"
          className="search-bar"
        />
      </div>

      <div className="nav-right">
        <span className="icon">🔔</span>
        <span className="icon">💬</span>
        <div className="profile">L</div>
      </div>
    </header>
  );
}

export default Navbar;