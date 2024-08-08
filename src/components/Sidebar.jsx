import { useEffect, useState } from "react";
import ARTISTS from "../services/artists";

function Sidebar() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(!artists.length);
  const [err, setErr] = useState(null);
  useEffect(() => {
    if (artists.length) {
      console.log("artists is ready");
    } else {
      const { URL, DATA } = ARTISTS;
      fetch(URL, { ...DATA })
        .then((res) => res.json())
        .then((json) => {
          setArtists(json);
          setLoading(false);
        })
        .catch((err) => setErr(err));
    }
  }, []);
  //! jsx
  if (err) {
    return <h2>we Have Err : {err.toString()}</h2>;
  }
  if (loading) {
    return <h2>Loading ... (fetch artists)</h2>;
  }
  return (
    <div>
      <h3>side bar</h3>
      <button onClick={() => console.log(artists)}>give me artists</button>
    </div>
  );
}

export default Sidebar;
