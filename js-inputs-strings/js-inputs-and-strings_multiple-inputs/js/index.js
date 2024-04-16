/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");
const button2 = document.querySelector("[data-js=button2]");
const button3 = document.querySelector("[data-js=button3]");

button.addEventListener("click", () => {
  const copyfirstInput = firstInput.value;
  secondInput.value = copyfirstInput;
});

button2.addEventListener("click", () => {
  const copyfirstInput = firstInput.value.toUpperCase();
  secondInput.value = copyfirstInput;
});

button3.addEventListener("click", () => {
  const switchFirstInput = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = switchFirstInput;
});
