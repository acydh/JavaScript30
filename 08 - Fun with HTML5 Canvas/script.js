/* eslint-disable no-unused-vars */
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let mDown = false; // wull check the mouse state in the whole document, not only in the canvas

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;


function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue += 1;
  if (ctx.lineWidth <= 10) {
    ctx.lineWidth += 1;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.lineWidth = 1;
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseover", (e) => {
  if (mDown) isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  draw(e);
});

// this is for when the mouse returns in the canvas, so even if the pointer is out of the canvas, the event of mouse up happens anyways.
document.addEventListener("mousedown", () => {
  mDown = true;
});
document.addEventListener("mouseup", () => {
  mDown = false;
});
