// HOMEPAGE LOGIN INFO
// Variables
const submitBtn = document.getElementById('submitBtn');
const email = document.querySelector('#user-email').value.trim();
const password = document.querySelector('#user-password').value.trim();

// function declaration
const loginFormHandler = async (event) => {
  console.log('entered form handler');
  event.preventDefault();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(email, password),
    headers: { 'Content-Type': 'application/json' }, // tells the fetch its going to be JSON
  });

  if (response.ok) {
    document.location.replace('/pond');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
