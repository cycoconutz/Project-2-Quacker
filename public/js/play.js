var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var quack1 = document.getElementById("quack1");
var quack2 = document.getElementById("quack2");
var quack3 = document.getElementById("quack3");

function play1() {
    audio1.play();
}
function play2() {
    audio2.play();
}
function play3() {
    audio3.play();
}
quack1.addEventListener('click', play1())
quack3.addEventListener('click', play3())
