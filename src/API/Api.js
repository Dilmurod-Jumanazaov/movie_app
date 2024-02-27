import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "9cffb48f822125924918026676445ca2";

export const API = {
  getMovies: async (extraUrl) => {
    const response = await axios(BASE_URL + extraUrl, {
      params: {
        api_key: API_KEY
      }
    })
    return response;
  }
}