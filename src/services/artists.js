import artists_ids from "../constants/artists_ids";

//? create fetch parameters
function ARTISTS(accessToken) {
  return {
    URL: "https://api.spotify.com/v1/artists/?ids=" + artists_ids,
    DATA: {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    },
  };
}

export default ARTISTS;
