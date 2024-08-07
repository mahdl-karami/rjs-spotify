//? import hooks
import { useEffect, useState } from "react";
//? import services
import ACCESS_TOKEN from "./services/accessToken";
import setCookie from "./helpers/setCookie";
import getCookie from "./helpers/getCookie";

function App() {
  //! set states
  const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
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
        });
    }
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
