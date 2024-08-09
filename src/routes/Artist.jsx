import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import TracksTable from "../components/TracksTable";

function Artist() {
  const artistId = useParams().artistId;
  return (
    <div className="artist-profile">
      <Banner artistId={artistId} />
      <TracksTable artistId={artistId} />
    </div>
  );
}

export default Artist;
