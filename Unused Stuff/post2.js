async function newFormHandler(event) {
    event.preventDefault();

    const message = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
        message
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#post-btn').addEventListener('submit', newFormHandler);