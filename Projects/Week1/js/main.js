const ball = document.getElementById("ball"); // Get the ball
document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0; // set initial position

console.log(ball);

/*
handleKeyPress
responds to certain key presses by updating position.
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // update the ball's position
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  console.log(ball);
  ball.style.left = position + "px";
}
