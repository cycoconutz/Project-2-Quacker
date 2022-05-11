const postBtn = document.getElementById('post-btn');
const createPostHandler = async function (event) {
  event.preventDefault();

  const postMessage = document.querySelector('#textarea1').value;

  const response = await fetch('/api/post/', {
    method: 'POST',
    body: JSON.stringify({
      message: postMessage,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/pond');
  } else {
    alert('Failed to login');
  }
};

postBtn.addEventListener('submit', createPostHandler);
