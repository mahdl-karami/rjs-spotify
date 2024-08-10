import getCookie from "../helpers/getCookie";

//? create fetch parameters
function ARTIST(id) {
  const accessToken = getCookie("accessToken");
  return {
    URL: "https://api.spotify.com/v1/artists/" + id,
    DATA: {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    },
  };
}

export default ARTIST;
