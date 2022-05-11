const commentFormHandler = async function (event) {
    event.preventDefault();
    const currentUrl = window.location.href;
    const postId = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

    const body = document.querySelector('textarea[name="comment-body"]').value;

    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id: postId,
                body: body,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);