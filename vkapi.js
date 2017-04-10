const request = require('request');
const config = require('./config');
const URL = `https://api.vk.com/method`;

module.exports = (method, form) =>
    new Promise((resolve, reject) => {
        form['access_token'] = config.access_token;
        const url = `${URL}/${method}`;
        console.log(url);
        request.post({url, form}, (error, response, body) => {
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