const loginFormHandler = async (event) => {
  event.preventDefault();

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
  }
};



document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);