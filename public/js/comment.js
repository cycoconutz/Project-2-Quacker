const currentUrl = window.location.href;
const replyBtn = document.querySelector('replyBtn').value;
const postId = currentUrl.substring(currentUrl.lastIndexOf('/'));

const commentFormHandler = async function (event) {
  event.preventDefault();

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        message,
        post_id: postId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    document.location.reload();
  }
};

replyBtn.addEventListener('submit', commentFormHandler);
