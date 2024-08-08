import { useParams } from "react-router-dom";
import ARTIST from "../services/artist";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import TracksTable from "../components/TracksTable";

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
      <Banner artist={artist} />
      <TracksTable  artistId={artistId}/>
    </div>
  );
}

export default Artist;
