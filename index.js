function upBtn() {
  let number = document.querySelector("#number");
  let value = number.innerHTML;
  ++value;
  document.querySelector("#number").innerHTML = value;
}
function downBtn() {
  let number = document.querySelector("#number");
  let value = number.innerHTML;
  --value;
  document.querySelector("#number").innerHTML = value;
}

//let add = document.querySelector("#up-btn");
//let subract = document.querySelector("#down-btn");

//add.addEventListener("click", function () {
//let output = document.querySelector("#number");
//let result = Number(output.innerHTML) + 1;

// output.innerHTML = result;
//});

//subract.addEventListener("click", function () {
//let output = document.querySelector("#number");
//let result = Number(output.innerText) - 1;

//output.innerHTML = result;
//});
