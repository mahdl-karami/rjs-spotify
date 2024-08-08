//? import hooks
import { useEffect, useState } from "react";
//? import services
import ARTISTS from "../services/artists";
//? import icons
import { GoSearch, GoHome } from "react-icons/go";

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
      <div>
        <GoHome />
        <GoSearch />
      </div>
      <div>
        {artists?.artists.map(({ images, name }, index) => (
          <div key={index}>
            <img src={images[0].url} alt={name + " profile image"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
