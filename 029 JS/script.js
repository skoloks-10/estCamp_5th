const count = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const div = document.getElementsByTagName("div");
const body = document.getElementsByTagName("body");

let countValue = 0;
div[0].style.textAlign = "center";
body[0].style.border = "3px solid black";
decrease.style.border = "2px solid blue";
increase.style.border = "2px solid red";
reset.style.border = "2px solid black";

function countcolor() {
  if (countValue < 0) {
    count.style.color = "blue";
  } else if (countValue > 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }
}

decrease.addEventListener("click", () => {
  countValue--;
  count.innerText = countValue;
  countcolor();
});

increase.addEventListener("click", () => {
  countValue++;
  count.innerText = countValue;
  countcolor();
});

reset.addEventListener("click", () => {
  countValue = 0;
  count.innerText = countValue;
  count.style.color = "black";
});
