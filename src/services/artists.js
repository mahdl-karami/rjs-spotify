import getCookie from "../helpers/getCookie";
import artists_ids from "../constants/artists_ids";
const accessToken = getCookie("accessToken");

//? create fetch parameters
const ARTISTS = {
  URL: "https://api.spotify.com/v1/artists/?ids=" + artists_ids,
  DATA: {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  },
};

export default ARTISTS;
