import React, { useEffect, useState } from "react";
import TRACKS from "../services/topTracks";
import timeCalculator from "../helpers/timeCalculator";

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
          {topTracks?.map(({ album, name, duration_ms }, index) => (
            <div key={index} className="track">
              <div>
                <p>{index + 1}</p>
                <img src={album.images[2].url} alt="" />
                <h4>{name}</h4>
              </div>
              <p>{timeCalculator(duration_ms)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default TracksTable;
