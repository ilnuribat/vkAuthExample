function request(route, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let params = '';
        for (let key in options)
            params += `&${key}=${options[key]}`;
        const URI = `/api/${route}?${params}`;
        xhr.open('GET', URI);
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
        xhr.onerror = (err) => {
            reject(err);
        }
        xhr.send();
    });
}
