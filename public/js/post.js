// const postBtn = document.getElementById('post-btn');
console.log('starting')

const createPostHandler = async function (event) {
  event.preventDefault();
  console.log('posting')

  const postMessage = document.querySelector('#textarea1').value;
  console.log(postMessage)
  await fetch(`/api/post/`, {
    method: 'POST',
    message: JSON.stringify({
      postMessage,
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  document.location.replace('/pond');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', createPostHandler);
