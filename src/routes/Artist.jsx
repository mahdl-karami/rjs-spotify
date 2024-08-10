//? react router dom
import { useParams } from "react-router-dom";
//? import components
import Banner from "../components/Banner";
import TracksTable from "../components/TracksTable";
import getCookie from "../helpers/getCookie";
import { useEffect, useState } from "react";

function Artist() {
  //! route path = /artist/:artistId
  const artistId = useParams().artistId;
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    if (!accessToken) {
      setAccessToken(getCookie("accessToken"));
    }
  }, [accessToken, artistId]);

  return (
    <>
      {accessToken && (
        <div className="artist-profile">
          <Banner artistId={artistId} />
          <TracksTable artistId={artistId} />
        </div>
      )}
    </>
  );
}

export default Artist;
