console.clear();

const fishName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const article = document.createElement("article");
const body = document.querySelector("body");

article.innerHTML = `
<article class ="product">
  <h2 class="product__name">${fishName}</h2>
  <div class="product__body">
  <div class="product__text-container">
  <ul class="product__categories">  
  <li class="product__category">${category1}</li>
  <li class="product__category">${category2}</li>
  <li class="product__category">${category3}</li>
  </ul>
  <p class="product__description">${description}</p>
  </div>
  <div class="product__image-container">
  <img class="product__image" src=${imageSrc} alt="">
  </div>
  </div>
  <footer class="product__footer">
  <span class="product__price">${price}</span>
  <button id=buyMe class="product__buy-button" type='button'>Buy</button> 
  </footer>
</article>
  `;

body.appendChild(article);
const buyButton = article.querySelector("#buyMe");
buyButton.addEventListener("click", () => console.log(fishName, price));
