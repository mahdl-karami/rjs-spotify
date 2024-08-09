import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import ARTIST from "../services/artist";

function Banner({ artistId }) {

  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(!artist.length);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (artist.length) {
      console.log("artist is ready");
    } else {
      setLoading(true);
      const { URL, DATA } = ARTIST(artistId);
      fetch(URL, { ...DATA })
        .then((res) => res.json())
        .then((json) => {
          setArtist(json);
          setLoading(false);
        })
        .catch((err) => setErr(err));
    }
  }, [artistId]);

  return (
    <div className="banner">
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
            <p>Folowers : {artist?.followers.total}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
