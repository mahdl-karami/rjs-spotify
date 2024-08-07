//? import hooks
import { useEffect, useState } from "react";
//? import services
import ACCESS_TOKEN from "./services/accessToken";

function App() {
  //! set states
  const [accessToken, setAccessToken] = useState("");
  //! fetch access token from accounts.spotify.com/api/token
  useEffect(() => {
    const { URL, DATA } = ACCESS_TOKEN;
    fetch(URL, {
      ...DATA,
    })
      .then((res) => res.json())
      .then((json) => setAccessToken(json));
  }, []);
  //! jsx
  return (
    <div>
      App اب
      <button onClick={() => console.log(accessToken)}>x</button>
    </div>
  );
}

export default App;
