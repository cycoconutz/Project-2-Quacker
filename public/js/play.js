var audio = document.getElementById("audio");
audio.addEventListener('click', play1())
// var audio2 = document.getElementById("audio2");
// audio2.addEventListener('click', play2())
var audio3 = document.getElementById("audio3");
audio3.addEventListener('click', play3())

function play1() {
    audio.play();
}
// function play2() {
//     audio2.play();
// }
function play3() {
    audio3.play();
}