import { useParams } from "react-router-dom";
import ARTIST from "../services/artist";
import { useEffect, useState } from "react";

function Artist() {
  const artistId = useParams().artistId;
  const [artist, setArtist] = useState(undefined);

  useEffect(() => {
    const { URL, DATA } = ARTIST(artistId);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => setArtist(json));
  }, [artistId]);

  return <div onClick={() => console.log(artist)}>Artist</div>;
}

export default Artist;
