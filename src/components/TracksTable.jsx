//? import hooks
import { useEffect, useState } from "react";
//? import services
import TRACKS from "../services/topTracks";
//? import helpers
import timeCalculator from "../helpers/timeCalculator";

function TracksTable({ artistId }) {
  //! set states
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  //! fetch artist top tracks (top 10)
  useEffect(() => {
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
  //! jsx
  return (
    <>
      {/* //! error */}
      {err && <p>Ops, Error : {err}</p>}
      {/* //! loading */}
      {loading && <></>}
      {/* //! success */}
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
