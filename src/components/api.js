import axios from "axios";

const options = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/charts/track",
  params: {
    locale: "en-US",
    pageSize: "20",
    startFrom: "0",
  },
  headers: {
    "x-rapidapi-key": "4573b4b217msha4c667d20181666p1c4bb5jsn1610f7c72ad0",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
