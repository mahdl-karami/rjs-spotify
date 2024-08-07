//? import hooks
import { useEffect, useState } from "react";
//? import services
import ACCESS_TOKEN from "./services/accessToken";
//? import helpers
import setCookie from "./helpers/setCookie";
import getCookie from "./helpers/getCookie";
import getArtists from "./services/artists";
import ARTISTS from "./services/artists";

function App() {
  //! set states
  const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
  const [artists, setArtists] = useState([]);
  //! fetch access token from accounts.spotify.com/api/token or use from cookies
  useEffect(() => {
    if (accessToken) {
      console.log("accessToken is ready");
    } else {
      const { URL, DATA } = ACCESS_TOKEN;
      fetch(URL, {
        ...DATA,
      })
        .then((res) => res.json())
        .then((json) => {
          setAccessToken(json.access_token);
          setCookie("accessToken", json.access_token);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  //! fetch artists data from spotify api
  useEffect(() => {
    if (accessToken) {
      const { URL, DATA } = ARTISTS;
      fetch(URL, {
        ...DATA,
      })
        .then((res) => res.json())
        .then((json) => setArtists(json))
        .catch((err) => console.log(err));
    }
  }, [accessToken]);
  //! jsx
  return (
    <div>
      App اب
      <button onClick={() => console.log(accessToken)}>x</button>
    </div>
  );
}

export default App;
