console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise 1: Append a new entry to the toast messages container
  //console.log("I clicked the button");
  const newEntry = document.createElement("li");
  newEntry.textContent = "Here is another message";
  newEntry.classList.add(["toast-container__message"]);
  const orderedList = document.querySelector('[data-js="toast-container"]');
  orderedList.append(newEntry);
  //console.log(newEntry);
});

clearButton.addEventListener("click", () => {
  // Exercise 2: Clear the stack of toast messages
  const messageContainer = document.querySelector(
    '[data-js="toast-container"]'
  );
  messageContainer.innerHTML = "";
});
