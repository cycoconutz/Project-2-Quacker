const postMessageContainer = document.querySelector('#post-message');
const saveBtn = document.querySelector('#saveBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const editBtn = document.querySelector('#editBtn');
const editedPost = document.querySelector('#editedPost');

const currentUrl = window.location.href;
const currentPostId = currentUrl.substring(currentUrl.lastIndexOf('/'));
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

// Edit post Handler

function editPostHandler(event) {
  event.preventDefault();

  // button view
  console.log('working');
  if (editBtn.getAttribute('data-view') === 'visible') {
    editBtn.setAttribute('data-view', 'hidden');
    saveBtn.setAttribute('data-view', 'visible');
    cancelBtn.setAttribute('data-view', 'visible');
    editedPost.setAttribute('data-view', 'visible');
  } else {
    editBtn.setAttribute('data-view', 'visible');
    saveBtn.setAttribute('data-view', 'hidden');
    cancelBtn.setAttribute('data-view', 'hidden');
    cancelBtn.setAttribute('data-view', 'hidden');
  }

  // creating text field
  // const textField = document.createElement('textarea');
  // textField.setAttribute('id', 'editedPost');

  // postMessageContainer.appendChild(textField);
}
editBtn.addEventListener('click', editPostHandler);

async function saveEditHandler(event) {
  event.preventDefault();
  const editedPost = document.querySelector('#editedPost').value;
  console.log('done');
  console.log(editedPost);
  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: editedPost,
    }),
  });
  console.log(editedPost);
  document.location.replace(`/post/${postId}`);
}

saveBtn.addEventListener('click', saveEditHandler);
