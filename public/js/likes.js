const postId = document.querySelector('.card-id#{{post.id}}').value;

const editLikesHandler = async function (event) {
    console.log('likes button working')
    event.preventDefault();
    const likes = document.querySelector('.likeBtn').value;
    console.log(likes)
    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            likes: likes,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
};

// const deleteClickHandler = async function () {
//     await fetch(`/api/post/${postId}`, {
//         method: 'DELETE'
//     });

//     document.location.replace('/dashboard');
// };

document
    .querySelector('#edit-post-form')
    .addEventListener('click', editLikesHandler);
// document
//     .querySelector('#delete-btn')
//     .addEventListener('click', deleteClickHandler);