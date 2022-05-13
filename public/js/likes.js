let likeButton = document.querySelector('.likeBtn');
let countDisplay = document.querySelector('.likesCounter');
let clicked = true;
let updoots = 0;

likeButton.addEventListener('click', function () {
    if (clicked) {
        updoots++;
        var audio1 = document.getElementById("audio1");
        audio1.play();
        console.log(count)
        clicked = false;
        countDisplay.textContent = `${updoots}`;
    } else {
        updoots--;
        var audio2 = document.getElementById("audio2");
        audio2.play();
        console.log(count)
        clicked = true;
        countDisplay.textContent = `${updoots}`;
    }
})
