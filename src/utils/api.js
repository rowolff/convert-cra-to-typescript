import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";

export const apiFactory = (baseUrl = API_BASE) => {
  const getPosts = () => {
    return axios.get(`${baseUrl}/posts`);
  };

  return { getPosts };
};
