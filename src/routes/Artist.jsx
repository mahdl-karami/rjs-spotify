import { useParams } from "react-router-dom";
import ARTIST from "../services/artist";
import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";

function Artist() {
  const artistId = useParams().artistId;
  const [artist, setArtist] = useState(undefined);

  useEffect(() => {
    const { URL, DATA } = ARTIST(artistId);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => setArtist(json));
  }, [artistId]);

  return (
    <div className="artist-profile">
      <div className="banner">
        <div>
          <img src={artist?.images[0].url} alt="" />
        </div>
        <div>
          <span>
            Verified Artist <MdVerified />
          </span>
          <h1>{artist?.name}</h1>
          <p>Folowers : {artist?.followers.total}</p>
        </div>
      </div>
    </div>
  );
}

export default Artist;
