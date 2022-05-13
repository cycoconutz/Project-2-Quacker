// Create a Delete functionality
const postId = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

function deletePostHandler(event) {
  event.preventDefault();
  try {
  fetch(`/api/post/${postId}`, {
    method: 'DELETE',
    //   body: JSON.stringify({
    //     id: post_id
    //   }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/pond');
} catch (err) {
  if (err) throw err;
}
};

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deletePostHandler);

