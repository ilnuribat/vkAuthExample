window.onload = () => {
    const linkToPost = document.getElementById('linkToPost');
    linkToPost.onchange = () => {
        const extract = extractGroup_IdPost_Id(linkToPost.value);

        const groupId = document.getElementById('groupId');
        groupId.innerText = extract.groupId;

        const postId = document.getElementById('postId');
        postId.innerText = extract.postId;
    }
}

function extractGroup_IdPost_Id(linkToPost) {
    let splitted = linkToPost.split('wall');
    if (splitted[0] !== 'https://vk.com/')
        return {
            groupId: null,
            postId: null
        };
    let ids = splitted[1].split('_');
    return {
        groupId: ids[0],
        postId: ids[1]
    }
}