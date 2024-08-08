//? import hooks
import { useEffect, useState } from "react";
//? import services
import ARTISTS from "../services/artists";
//? import icons
import { GoSearch, GoHome } from "react-icons/go";
//? react router dom
import { Link } from "react-router-dom";

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
    <div className="sidebar">
      <div className="sidebar-box">
        <Link to="/">
          <div className="sidebar-btn">
            <GoHome />
          </div>
        </Link>
        <div className="sidebar-btn">
          <GoSearch />
        </div>
      </div>
      <div className="sidebar-box artists">
        {artists?.artists.map(({ images, name, id }, index) => (
          <Link key={index} to={`/artist/${id}`}>
            <div className="sidebar-btn">
              <div className="artist-image">
                <img src={images[0].url} alt={name + " profile image"} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
