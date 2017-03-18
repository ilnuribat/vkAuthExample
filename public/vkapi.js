window.onload = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/clientid');
    xhr.onload = () => {
        xhr;
        var href = document.getElementById('href');
        href.href += xhr.response;
    }
    xhr.send();
}