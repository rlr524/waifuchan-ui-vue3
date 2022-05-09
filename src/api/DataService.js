import axios from "axios";

const ROOT_URL = process.env.DB_API_URL;

var data = JSON.stringify({
  collection: "waifus",
  database: "waifuchanDB",
  dataSource: "Cluster0",
  projection: {
    _id: 1,
  },
});

var config = {
  method: "post",
  url: ROOT_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": process.env.DB_API_KEY,
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

export default {
  fetchAllWaifus() {
    return axios.get(`${ROOT_URL}`);
  },
  fetchUser() {
    return axios.get(`${ROOT_URL}`);
  },
};
