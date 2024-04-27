console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//const headerElement = document.createElement("header");

const sectionElement = document.createElement("section");
sectionElement.classList.add("post");

const pElement = document.createElement("p");
pElement.classList.add("post__content");
pElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footerElement = document.createElement("footer");
footerElement.classList.add("post__footer");

const buttonElement = document.createElement("button");
buttonElement.classList.add("post__button");
buttonElement.textContent = "♥ Like";
buttonElement.addEventListener("click", handleLikeButtonClick);

const spanElement = document.createElement("span");
spanElement.classList.add("post__username");
spanElement.textContent = "@username";

document.body.append(sectionElement);
sectionElement.append(pElement, footerElement);
footerElement.append(spanElement, buttonElement);
