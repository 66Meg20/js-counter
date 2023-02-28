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
