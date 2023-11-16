const btnb = document.querySelector("#btnTest");

btnb.addEventListener("click", function () {
  document.body.classList.toggle("black");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
