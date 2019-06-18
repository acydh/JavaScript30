// event.wich used in this tutorial is now deprecated, so I'll use event.code instead.

function playSound(e) {
  const key = e.code;
  const instrument = document.querySelector(`audio[data-code="${key}"]`);
  const instrumentBox = document.querySelector(`div[data-code="${key}"]`);
  if (instrument === null || instrumentBox === null) return null; //key doesn't correspond to any instrument, so quit.
  instrumentBox.classList.add("playing");
  instrument.currentTime = 0; //rewind to the start
  instrument.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.addEventListener('keydown', playSound);
