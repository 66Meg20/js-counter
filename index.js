//let counter = 0;
//function count() {
//  counter++;
// document.getElementById("number").innerHTML = counter;
//}

//document.addEventListener("DOMContentLoaded", function () {
// document.getElementById("up-btn").onclick = count;
//});

let add = document.querySelector("#up-btn");
let subract = document.querySelector("#down-btn");

add.addEventListener("click", function () {
  let output = document.querySelector("#number");
  let result = Number(output.innerHTML) + 1;

  output.innerText = result;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#number");
  let result = Number(output.innerText) - 1;

  output.innerText = result;
});
