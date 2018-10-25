import axios from 'axios';

const server = axios.create({
  baseURL: 'http://120.78.87.58:8083',
  timeout: 5000,

});


const api = {
  sendsms: function (phone) {
    const data = {
      phoneNumber: phone
    };
    return server.post('/message/getMessage',data)
  },

};

export default api;

