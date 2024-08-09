import getCookie from "../helpers/getCookie";
const accessToken = getCookie("accessToken");

//? create fetch parameters
function ARTIST(id) {
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
