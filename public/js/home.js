let methodName;
let methodBody;

window.onload = () => {
    methodName = document.getElementById('methodName');
    methodBody = document.getElementById('methodBody');
}

function getLikes() {
    methodName.innerText = 'Getting likes';
    request('likes', {})
        .then((result) => {
            methodBody.innerText = result;
        })
        .catch((err) => {
            methodBody.innerHTML = err;
        });
}
function getWallPosts() {
    methodName.innerText = 'Getting wall posts';
    request('wallposts', {})
        .then((result) => {
            methodBody.innerText = result;
        })
        .catch((err) => {
            methodBody.innerHTML = err;
        });
}
function getViewsCounter() {
    methodName.innerText = 'Getting wall stats';
    request('viewsCounter')
        .then(result => {
            methodBody.innerHTML = result;
        })
        .catch(err => {
            methodBody.innerHTML = err;
        });
}
