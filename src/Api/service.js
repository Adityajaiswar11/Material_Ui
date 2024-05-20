import axios from "axios";

export const Createuser = (data) => {
  return axios.post("https://dummyjson.com/products/add", data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const Readeuser = () => {
          return axios.get("https://dummyjson.com/products?limit=100")

        };