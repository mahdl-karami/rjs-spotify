//? react router dom
import { useParams } from "react-router-dom";
//? import components
import Banner from "../components/Banner";
import TracksTable from "../components/TracksTable";

function Artist() {
  //! route path = /artist/:artistId
  const artistId = useParams().artistId;
  return (
    <div className="artist-profile">
      <Banner artistId={artistId} />
      <TracksTable artistId={artistId} />
    </div>
  );
}

export default Artist;
