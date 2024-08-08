import React, { useEffect, useState } from "react";
import TRACKS from "../services/topTracks";

function TracksTable({ artistId }) {
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    const { URL, DATA } = TRACKS(artistId);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => setTopTracks(json))
      .catch((err) => console.log(err));
  }, [artistId]);
  return <div>TracksTable</div>;
}

export default TracksTable;
