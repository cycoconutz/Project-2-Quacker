const postBtn = document.querySelector('#post-btn');
console.log('starting')

async function createPostHandler(event) {
  event.preventDefault();
  console.log('posting')

  const postMessage = document.querySelector('#textarea1').value;
  console.log(postMessage)
  await fetch(`/api/post/`, {
    method: 'POST',
    body: JSON.stringify({
      message: postMessage,
      user_id: req.session.id
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  document.location.replace('/pond');
};

postBtn.addEventListener('submit', createPostHandler);

// Like counter

const likeBTN = document.querySelector('#likeBtn');
const count = document.querySelector('#likeCount');

// onclick


likeBTN.addEventListener('click', () => {
  count.textContent++;
});
