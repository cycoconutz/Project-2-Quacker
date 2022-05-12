const currentUrl = window.location.href;
const postId = currentUrl.substring(currentUrl.lastIndexOf('/'));
const postBtn = document.querySelector('#post-btn');
const deleteBtn = document.querySelector('#deleteBtn');
console.log('starting');

// Create a post functionality
async function createPostHandler(event) {
  event.preventDefault();
  console.log('posting');

  const message = document.querySelector('#textarea1').value;
  console.log(message);
  await fetch(`/api/post/`, {
    method: 'POST',
    body: JSON.stringify({
      message,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/pond');
}

document
  .querySelector('#post-btn')
  .addEventListener('click', createPostHandler);

// Like counter

const likeBTN = document.querySelector('#likeBtn');
const count = document.querySelector('#likeCount');

// onclick

likeBTN.addEventListener('click', () => {
  count.textContent++;
});

// Create a Delete functionality
async function deletePostHandler(event) {
  event.preventDefault();
  console.log('deleting');

  // console.log(message);
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE',
    // body: JSON.stringify({
    //   post_id: postId,
    // }),
    // headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/pond');
}

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deletePostHandler);
