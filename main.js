let myName = "Laura ";
const nameSpan = document.getElementById("name");
nameSpan.textContent = myName;

let myAge = 19;
const ageSpan = document.getElementById("age");
ageSpan.textContent = myAge;

let likesMusic = true;
let likesMusictext;

if (likesMusic === true) {
  likesMusictext = " me fascina la musica ";
} else {
  likesMusictext = " No me gusta :)";
}

const likesMusicSpan = document.querySelector("#likesMusic");
likesMusicSpan.textContent = likesMusictext;

const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

function playNote(key) {
  let noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }
  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
