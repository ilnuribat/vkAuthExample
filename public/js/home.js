function getLikes(wallId, postId) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/likes?wallId=${wallId}&postId=${postId}`);
    xhr.onload = () => {
        let methodName = document.getElementById('methodName');
        methodName.value = 'Getting likes';
        let methodBody = document.getElementById('methodBody');
        methodBody.innerText = xhr.response;
    }
    xhr.send();
}
function getWallPosts(ownerId) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/wallposts?owner=${ownerId}`);
    xhr.onload = () => {
        let methodName = document.getElementById('methodName');
        methodName.value = 'Getting wall posts';
        let methodBody = document.getElementById('methodBody');
        methodBody.innerText = xhr.response;
    }
    xhr.send();
}