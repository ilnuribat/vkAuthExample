function getLikes() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/likes`);
    xhr.onload = () => {
        let methodName = document.getElementById('methodName');
        methodName.innerText = 'Getting likes';
        let methodBody = document.getElementById('methodBody');
        methodBody.innerText = xhr.response;
    }
    xhr.send();
}
function getWallPosts() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/wallposts`);
    xhr.onload = () => {
        let methodName = document.getElementById('methodName');
        methodName.innerText = 'Getting wall posts';
        let methodBody = document.getElementById('methodBody');
        methodBody.innerText = xhr.response;
    }
    xhr.send();
}
function getViewsCounter() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/viewsCounter`);
    xhr.onload = () => {
        let methodName = document.getElementById('methodName');
        methodName.innerText = 'Getting wall stats';
        let methodBody = document.getElementById('methodBody');
        methodBody.innerText = xhr.response;
    }
    xhr.send();
}