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
  //! destructuring artist
  const { external_urls, name, images, followers } = artist;
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
            <a href={external_urls.spotify} target="_blank">
              <img src={images[0].url} alt="" />
            </a>
          </div>
          <div className="banner-text">
            <span>
              <MdVerified />
              <p>Verified Artist</p>
            </span>
            <h1>
              <a href={external_urls.spotify} target="_blank">
                {name}
              </a>
              <MdVerified />
            </h1>
            <p>Folowers : {followerConvertor(followers.total)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
