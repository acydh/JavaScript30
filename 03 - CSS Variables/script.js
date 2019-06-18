var rangeInputs = document.querySelectorAll(".controls input[type=range]");
var colorInputs = document.querySelectorAll(".controls input[type=color]");

rangeInputs.forEach(input => input.addEventListener("mousemove", handleInput));
colorInputs.forEach(input => input.addEventListener("change", handleInput));

function handleInput(e) {
  var suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
