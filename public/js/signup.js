const signupFormHandler = async function (event) {
  event.preventDefault();
  console.log('creating');
  const firstnameEl = document.querySelector('#firstname-input-signup');
  const lastnameEl = document.querySelector('#lastname-input-signup');
  const emailEl = document.querySelector('#email-input-signup');
  const usernameEl = document.querySelector('#username-input-signup');
  const passwordEl = document.querySelector('#password-input-signup');

  const response = await fetch('/api/user/', {
    method: 'POST',
    body: JSON.stringify({
      first_name: firstnameEl.value,
      last_name: lastnameEl.value,
      email: emailEl.value,
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/pond');
  } else {
    alert('Failed to sign up');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
