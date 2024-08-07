//? check https://developer.spotify.com/dashboard for client id and more ...
const client = {
  client_id: "3c608104fed7426e973bd7763bb6f0c2",
  client_secret: "93b892f9744e4693b151a7424e68d951",
};
const { client_id, client_secret } = client;

//? export fetch parameters
const ACCESS_TOKEN = {
  URL: `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  DATA: {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  },
};

export default ACCESS_TOKEN;
