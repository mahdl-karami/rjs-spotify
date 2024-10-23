//? import hooks
import { useEffect, useState } from "react";
//? import icons
import { MdVerified } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
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
      {err ? (
        <>
          {console.log(err)}
          <div className="banner-image banner-loading"></div>
          <div className="banner-text">
            <span>
              <BiSolidError />
              <p>Error detected</p>
            </span>
            <h1>Please try again</h1>
            <p>Report to me : mo.mahdi.ka@gmail.com</p>
          </div>
        </>
      ) : null}
      {/* //! loading */}
      {loading ? (
        <>
          <div className="banner-image banner-loading">
            <div></div>
          </div>
          <div className="banner-text">
            <span>
              <MdVerified />
              <p>Verified Artist</p>
            </span>
            <h1>Loading artist ...</h1>
            <p>Folowers : </p>
          </div>
        </>
      ) : null}
      {/* //! success */}
      {!loading && !err ? (
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
      ) : null}
    </div>
  );
}

export default Banner;
