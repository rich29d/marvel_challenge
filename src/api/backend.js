require("dotenv").config();

const axios = require("axios");

const options = {
  baseURL: "http://localhost:8080",
  timeout: 5000
};

const create = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    ...options,
    headers: { Authorization: `JWT ${token}` }
  });
};

export const verify = async (email, senha) => {
  const { data } = await axios.post(
    "/login",
    {
      email,
      senha
    },
    options
  );

  return data;
};

export default {
  ...create(),
  verify
};
