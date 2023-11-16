let span_counter = document.getElementById("span");
let btn_button = document.getElementById("btn");
let count = 0;

document.addEventListener("keypress", counter);
btn_button.addEventListener("click", counter);

function counter(event) {
  if (
    event.code === "Enter" ||
    event.code === "Space" ||
    event.type === "click"
  ) {
    count++;
    span_counter.innerText = count;
  }
  document.body.classList.toggle("dark-mode");
}
