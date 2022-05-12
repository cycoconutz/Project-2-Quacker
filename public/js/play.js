var audio = document.getElementById("audio");
var audio3 = document.getElementById("audio3");

function play1() {

    audio.play();
}

function play3() {
    audio3.play();
}
audio.addEventListener('click', play1())
audio3.addEventListener('click', play3())
