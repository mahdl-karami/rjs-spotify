//? import hooks
import { useEffect, useState } from "react";
//? import iconst
import { MdVerified } from "react-icons/md";
//? import services
import ARTIST from "../services/artist";
import followerConvertor from "../helpers/followerConvertor";

function Banner({ artistId }) {
  //! set states
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  //! fetch artist profile
  useEffect(() => {
    setLoading(true);
    const { URL, DATA } = ARTIST(artistId);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => {
        setArtist(json);
        setLoading(false);
      })
      .catch((err) => setErr(err));
  }, [artistId]);
  //! jsx
  return (
    <div className="banner">
      {/* //! error */}
      {err && (
        <>
          <div className="banner-image banner-loading"></div>
          <div className="banner-text">
            <span>Oh Nooo !</span>
            <h1>{"error : " + err}</h1>
            <p>Please report to me : mo.mahdi.ka@gmail.com</p>
          </div>
        </>
      )}
      {/* //! loading */}
      {loading && (
        <>
          <div className="banner-image banner-loading"></div>
          <div className="banner-text">
            <span>Pleas Wait ...</span>
            <h1>Loading Data ...</h1>
            <p>Folowers : ???</p>
          </div>
        </>
      )}
      {/* //! success */}
      {!loading && !err && (
        <>
          <div className="banner-image">
            <img src={artist?.images[0].url} alt="" />
          </div>
          <div className="banner-text">
            <span>
              <MdVerified /> Verified Artist
            </span>
            <h1>{artist?.name}</h1>
            <p>Folowers : {followerConvertor(artist?.followers.total)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
