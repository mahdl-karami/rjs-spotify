//? import hooks
import { useEffect, useState } from "react";
//? react router dom
import { Outlet } from "react-router-dom";
//? import components (header, footer, sidebar and ...)
import Sidebar from "../components/Sidebar";
import Error from "../components/Error";
//? import services
import ACCESS_TOKEN from "../services/accessToken";
//? import helpers
import setCookie from "../helpers/setCookie";
import getCookie from "../helpers/getCookie";
import Loading from "../components/Loading";

function Root() {
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
          setLoading(false);
          setAccessToken(json.access_token);
          setCookie("accessToken", json.access_token);
        })
        .catch((err) => setErr(err));
    }
  }, []);
  return (
    <>
      <Sidebar accessToken={accessToken} />
      <main>
        {loading && (
          <div>
            <Loading />
          </div>
        )}
        {err && <Error text={"access token"} error={err} />}
        {!loading && !err && <Outlet />}
      </main>
    </>
  );
}

export default Root;
