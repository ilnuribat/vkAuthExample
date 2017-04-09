const request = require('request');
const config = require('./config');
const access_token = `access_token=${config.access_token}`;
const URL = `https://api.vk.com/method`;

module.exports = (method, options) =>
    new Promise((resolve, reject) => {
        let params = '';
        for (let key in options)
            params += `&${key}=${options[key]}`;
        const URI = `${URL}/${method}?${access_token}${params}`;
        console.log(URI);
        request.get(URI, (error, response, body) => {
            if (error) {
                reject(error);
                return;
            }
            const jsonBody = JSON.parse(body);
            if (jsonBody.error)
                reject(jsonBody.error);
            else 
                resolve(jsonBody.response);
        });
    });