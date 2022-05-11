// const postBtn = document.getElementById('post-btn');
console.log('starting')

const createPostHandler = async function (event) {
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

document.querySelector('#post-btn').addEventListener('click', createPostHandler);

// Like counter

const likeBTN = document.querySelector('#likeBtn');
const count = document.querySelector('#likeCount');

// onclick


likeBTN.addEventListener('click', () => {
  count.textContent++;
});
