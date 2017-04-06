function request(route, options, method) {
    return new Promise((resolve, reject) => {
        if (!method) method = 'GET';
        const xhr = new XMLHttpRequest();
        let params = '';
        for (let key in options)
            params += `${key}=${options[key]}&`;
        let URI = `/api/${route}`;

        if (method === 'GET' || method === 'DELETE')
            URI += `?{params}`;

        xhr.open(method, URI);
        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }
        xhr.onerror = (err) => {
            reject(err);
        }

        if (method === 'POST' || method === 'PUT') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(params);
        }
        else
            xhr.send();
    });
}
