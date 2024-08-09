import React, { useEffect, useState } from "react";
import TRACKS from "../services/topTracks";

function TracksTable({ artistId }) {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { URL, DATA } = TRACKS(artistId);
    setTopTracks([]);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => {
        setTopTracks(json?.tracks);
        setLoading(false);
      })
      .catch((err) => setErr(err));
  }, [artistId]);
  return (
    <>
      {err && <p>Ops, Error : {err}</p>}
      {loading && <></>}
      {!loading && !err && (
        <div className="tracks-table">
          {topTracks?.map((track, index) => (
            <div key={index}>
              <p>{index + 1}</p>
              <div>
                <img src={track.album.images[2].url} alt="" />
                <h3>{track.name}</h3>
              </div>
              <p>5:55</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TracksTable;
