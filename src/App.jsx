import { useMemo, useState } from 'react';
import logo from '../pinteresrt_icon.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';

const pins = [
  { id: 1, name: 'Inspiration pin 1', image: img1 },
  { id: 2, name: 'Inspiration pin 2', image: img2 },
  { id: 3, name: 'Inspiration pin 3', image: img3, tall: true },
  { id: 4, name: 'Inspiration pin 4', image: img4 },
  { id: 5, name: 'Inspiration pin 5', image: img5 },
  { id: 6, name: 'Inspiration pin 6', image: img6, tall: true },
  { id: 7, name: 'Inspiration pin 7', image: img7 },
  { id: 8, name: 'Inspiration pin 8', image: img8 }
];

const navItems = [
  { label: 'Home', icon: 'home', active: false },
  { label: 'Explore', icon: 'explore', active: true },
  { label: 'Saved', icon: 'dashboard', active: false },
  { label: 'Create', icon: 'add_box', active: false },
  { label: 'Notifications', icon: 'notifications', active: false },
  { label: 'Messages', icon: 'chat_bubble_outline', active: false }
];

function App() {
  const [query, setQuery] = useState('');
  const [savedPins, setSavedPins] = useState(new Set());

  const filteredPins = useMemo(
    () =>
      pins.filter((pin) =>
        pin.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const toggleSave = (pinId) => {
    setSavedPins((previous) => {
      const next = new Set(previous);
      if (next.has(pinId)) {
        next.delete(pinId);
      } else {
        next.add(pinId);
      }
      return next;
    });
  };

  const handleDownload = (name) => {
    window.alert(`Downloading ${name}...`);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <img src={logo} className="logo" alt="Pinterest logo" />

        {navItems.map((item) => (
          <div key={item.label} className="icon-box">
            <a className={item.active ? 'active' : ''} href="#">
              <span className="material-icons-outlined">{item.icon}</span>
            </a>
            <span className="tooltip">{item.label}</span>
          </div>
        ))}

        <div className="bottom">
          <div className="icon-box">
            <a href="#">
              <span className="material-icons-outlined">settings</span>
            </a>
            <span className="tooltip">Settings</span>
          </div>
        </div>
      </aside>

      <div className="page">
        <header className="topbar">
          <div className="search-box">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="Search ideas"
            />
            <div className="top-icons">
              <span className="material-icons-outlined">photo_camera</span>
              <span className="material-icons-outlined">mic</span>
            </div>
          </div>

          <div className="profile">M</div>
        </header>

        <main className="content">
          <section className="heading">
            <h1>Explore</h1>
            <p>Discover new ideas and inspiration</p>
          </section>

          <section className="gallery">
            {filteredPins.map((pin) => (
              <div
                key={pin.id}
                className={`card${pin.tall ? ' tall' : ''}`}
                data-name={pin.name}
              >
                <img src={pin.image} alt={pin.name} />
                <div className="overlay">
                  <button
                    type="button"
                    className={savedPins.has(pin.id) ? 'saved' : ''}
                    onClick={() => toggleSave(pin.id)}
                  >
                    {savedPins.has(pin.id) ? 'Saved' : 'Save'}
                  </button>
                  <a
                    href={pin.image}
                    download
                    className="download-btn"
                    onClick={() => handleDownload(pin.name)}
                  >
                    <i className="fa-solid fa-download"></i>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
