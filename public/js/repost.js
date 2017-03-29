let wallId;
let postId;
let linkToPost;

window.onload = () => {
    linkToPost = document.getElementById('linkToPost');
    linkToPost.onchange = () => {
        const extract = extractGroup_IdPost_Id(linkToPost.value);

        wallId = document.getElementById('wallId');
        wallId.innerText = extract.wallId;

        postId = document.getElementById('postId');
        postId.innerText = extract.postId;
    }
    const getReposts = document.getElementById('getReposts');
    getReposts.onclick = APIgetReposts;
}

function extractGroup_IdPost_Id(linkToPost) {
    let splitted = linkToPost.split('wall');
    if (splitted[0] !== 'https://vk.com/')
        return {
            wallId: null,
            postId: null
        };
    let ids = splitted[1].split('_');
    return {
        wallId: ids[0],
        postId: ids[1]
    }
}

function APIgetReposts() {
    request('getReposts', {wallId: wallId.innerText, postId: postId.innerText})
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
}