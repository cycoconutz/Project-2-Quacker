const loginFormHandler = async function (event) {
  event.preventDefault();

<<<<<<< HEAD
  const email = document.querySelector('#user-email').value.trim();
  const password = document.querySelector('#user-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/pondfeed');
    } else {
      alert('Failed to log in.');
    }
=======
  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');
  console.log(usernameEl)
  console.log(passwordEl)



  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/pondfeed');
  } else {
    alert('Failed to login');
>>>>>>> main
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
