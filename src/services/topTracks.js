import getCookie from "../helpers/getCookie";
const accessToken = getCookie("accessToken");

//? create fetch parameters
function TRACKS(id) {
  return {
    URL: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
    DATA: {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    },
  };
}

export default TRACKS;
