window.onload = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/authurl');
    xhr.onload = () => {
        let href = document.getElementById('href');
        href.href = xhr.response;
    }
    xhr.send();
}