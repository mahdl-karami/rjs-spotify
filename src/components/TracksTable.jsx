import React, { useEffect, useState } from "react";
import TRACKS from "../services/topTracks";

function TracksTable({ artistId }) {
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    const { URL, DATA } = TRACKS(artistId);
    setTopTracks([]);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => {
        setTopTracks(json?.tracks);
        console.log(topTracks);
      })
      .catch((err) => console.log(err));
  }, [artistId]);
  return (
    <div className="tracks-table">
      {topTracks?.map((track, index) => (
        <div>
          <p>{index}</p>
          <div>
            <img src={track.album.images[2].url} alt="" />
            <h3>{track.name}</h3>
          </div>
          <p>5:55</p>
        </div>
      ))}
    </div>
  );
}

export default TracksTable;
