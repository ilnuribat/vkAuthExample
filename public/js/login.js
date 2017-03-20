window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/authurl');
    xhr.onload = () => {
        let href = document.getElementById('href');
        const answer = JSON.parse(xhr.response);
        href.innerHTML = answer.value;
        if (answer.url)
            href.href = answer.url;
    }
    xhr.send();
}