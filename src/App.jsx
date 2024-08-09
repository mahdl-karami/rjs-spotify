//? import icons
import { FaSpotify } from "react-icons/fa";

function App() {
  return (
    <div className="home">
      <span className="home-logo">
        <FaSpotify />
        <h1> Spotify </h1>
      </span>
      <div className="home-text">
        <p>
          UI Template website :{" "}
          <a href="https://open.spotify.com/" target="_blank">
            spotify
          </a>
        </p>
        <p>
          API services :{" "}
          <a href="https://developer.spotify.com/" target="_blank">
            developer spotify
          </a>
        </p>
        <p>
          Developer :{" "}
          <a href="https://github.com/mahdl-karami" target="_blank">
            Mahdl-Karami
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
