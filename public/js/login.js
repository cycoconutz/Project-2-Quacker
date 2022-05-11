const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login').value;
  const passwordEl = document.querySelector('#password-input-login').value;
  console.log(usernameEl)
  console.log(passwordEl)

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl,
      password: passwordEl,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/pond');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
