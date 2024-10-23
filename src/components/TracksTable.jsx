//? import hooks
import { useEffect, useState } from "react";
//? import services
import TRACKS from "../services/topTracks";
//? import helpers
import timeCalculator from "../helpers/timeCalculator";
import openLink from "../helpers/openLink";
// ? import components
import Error from "./Error";
import Loading from "./Loading";

function TracksTable({ artistId }) {
  //! set states
  const [topTracks, setTopTracks] = useState([]);
  const [visibleTracks, setVisibleTracks] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  //! fetch artist top tracks (top 10)
  useEffect(() => {
    const { URL, DATA } = TRACKS(artistId);
    setTopTracks([]);
    setShowMore(false);
    fetch(URL, { ...DATA })
      .then((res) => res.json())
      .then((json) => {
        setTopTracks(json?.tracks);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  }, [artistId]);
  //!
  useEffect(() => {
    if (!showMore) {
      const newTopTracks = [...topTracks];
      setVisibleTracks(newTopTracks.splice(0, 5));
    } else {
      setVisibleTracks(topTracks);
    }
  }, [showMore, topTracks]);
  //! jsx
  return (
    <>
      {/* //! error */}
      {err ? <Error text={"artist musics"} error={err} /> : null}
      {/* //! loading */}
      {loading ? <Loading /> : null}
      {/* //! success */}
      {!loading && !err ? (
        <div className="tracks-table">
          {visibleTracks?.map(({ album, name, duration_ms, external_urls: { spotify } }, index) => (
            <div key={index} className="track" onClick={() => openLink(spotify)}>
              <div>
                <p>{index + 1}</p>
                <img src={album.images[2].url} alt="" />
                <h4>{name}</h4>
              </div>
              <p>{timeCalculator(duration_ms)}</p>
            </div>
          ))}
          {visibleTracks.length ? (
            <p onClick={() => setShowMore((prevS) => !prevS)} className="show-more">
              {showMore ? "Show less" : "See more"}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default TracksTable;
