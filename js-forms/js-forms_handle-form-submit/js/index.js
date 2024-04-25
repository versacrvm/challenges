console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  formElements.firstName.focus();

  event.target.reset();
});

// firstName, lastName, age, email, complaint, details, badness, oder-date, tos
