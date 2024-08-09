//? import hooks
import { useEffect, useState } from "react";
//? import services
import ARTISTS from "../services/artists";
//? import icons
import { GoSearch, GoHome } from "react-icons/go";
import { PiSpinner } from "react-icons/pi";
import { MdOutlineErrorOutline } from "react-icons/md";
//? react router dom
import { Link } from "react-router-dom";

function Sidebar({ accessToken }) {
  //! set states
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  //! fetch artists profiles
  useEffect(() => {
    if (accessToken) {
      const { URL, DATA } = ARTISTS;
      fetch(URL, { ...DATA })
        .then((res) => res.json())
        .then((json) => {
          setArtists(json);
          setLoading(false);
        })
        .catch((err) => setErr(err));
    }
  }, [accessToken]);
  //! jsx
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
        {/*//! error */}
        {err && !loading && (
          <div className="sidebar.btn">
            <div className="sidebar-error">
              <MdOutlineErrorOutline />
            </div>
          </div>
        )}
        {/*//! loading */}
        {loading && (
          <div className="sidebar.btn">
            <div className="sidebar-loading">
              <PiSpinner />
            </div>
          </div>
        )}
        {/*//! success */}
        {!loading && !err && (
          <>
            {artists?.artists?.map(({ images, name, id }, index) => (
              <Link key={index} to={`/artist/${id}`}>
                <div className="sidebar-btn">
                  <div className="artist-image">
                    <img src={images[0].url} alt={name + " profile image"} />
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
