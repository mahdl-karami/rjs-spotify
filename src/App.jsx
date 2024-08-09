//? import hooks
import { useEffect, useState } from "react";
//? import services
import ACCESS_TOKEN from "./services/accessToken";
//? import helpers
import setCookie from "./helpers/setCookie";
import getCookie from "./helpers/getCookie";

function App() {
  //! set states
  const [accessToken, setAccessToken] = useState(getCookie("accessToken"));
  const [loading, setLoading] = useState(!accessToken);
  const [err, setErr] = useState(false);
  //! fetch access token || use from cookies
  useEffect(() => {
    if (accessToken) {
      console.log("accessToken is ready");
    } else {
      setLoading(true);
      const { URL, DATA } = ACCESS_TOKEN;
      fetch(URL, {
        ...DATA,
      })
        .then((res) => res.json())
        .then((json) => {
          setAccessToken(json.access_token);
          setLoading(false);
          setCookie("accessToken", json.access_token);
        })
        .catch((err) => setErr(err));
    }
  }, []);
  //! jsx
  if (err) {
    return <h2>we Have Err : {err.toString()}</h2>;
  }
  if (loading) {
    return <h2>Loading ... (fetch access token)</h2>;
  }
  return (
    <>
      <h1>Spotify</h1>
      <button onClick={() => console.log(loading)}>give me log</button>
    </>
  );
}

export default App;
