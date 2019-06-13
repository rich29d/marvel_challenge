//const dotenv = require('dotenv');
const axios = require('axios');
const md5 = require('md5');

//const config = dotenv.config();
 
/*if (config.error) {
  throw config.error
}*/

const create = () => {
  const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
  
  const {
    publicKey,
    privateKey
  } = user || {};

  const options = {
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 5000,
  }

  if (publicKey && privateKey) {
    const ts = new Date().getTime();
    
    options.params = {
      ts,
      apikey: publicKey,
      hash: md5(ts + publicKey + privateKey)
    };
  }
  
  return axios.create(options);
};

module.exports = create();