const axios = require('axios');
const crypto = require('crypto');

const options = {
  baseURL: 'https://gateway.marvel.com/v1/public',
  timeout: 5000,
  params: {
    key: '164c6660',
  }
}

const generateParams = (publicKey, privateKey) => {
  const ts = new Date().getTime();

  return {
    ts,
    apikey: publicKey,
    hash: crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex')
  };
}

const create = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  
  const {
    publicKey = '',
    privateKey = ''
  } = user;
  
  return axios.create({
    ...options,
    params: generateParams(publicKey, privateKey)
  });
};

export const verify = async (publicKey, privateKey) => {
  const { data } = await axios.get('/characters', {
    ...options,
    limit: 1,
    params: generateParams(publicKey, privateKey)
  });

  return data.code === 200;
}

export default {
  ...create(),
  verify
}