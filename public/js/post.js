const postBtn = document.querySelector('#post-btn');
console.log('starting')

async function createPostHandler(event) {
  event.preventDefault();
  console.log('posting')

  const message = document.querySelector('#textarea1').value;
  console.log(message)
  await fetch(`/api/post/`, {
    method: 'POST',
    body: JSON.stringify({
      message
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  document.location.replace('/pond');
};

document.querySelector('#post-btn').addEventListener('submit', createPostHandler);

// Like counter

const likeBTN = document.querySelector('#likeBtn');
const count = document.querySelector('#likeCount');

// onclick


likeBTN.addEventListener('click', () => {
  count.textContent++;
});