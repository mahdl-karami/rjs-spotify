import getCookie from "../helpers/getCookie";

//? create fetch parameters
function TRACKS(id) {
  const accessToken = getCookie("accessToken");
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
