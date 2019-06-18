const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function getDate() {
  const now = new Date();
  const secondsDeg = ((now.getSeconds() / 60) * 360) + 90;
  const minutesDeg = ((now.getMinutes() / 60) * 360) + 90;
  const hoursDeg = ((now.getHours() / 12) * 360) + 90 + minutesDeg / 60 ;
  moveHands(secondsDeg, minutesDeg, hoursDeg);
}

function moveHands(secondsDeg, minutesDeg, hoursDeg) {
  secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

getDate();
setInterval(getDate, 1000);
