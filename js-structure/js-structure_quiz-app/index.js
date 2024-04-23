// Store the cards in a global state
import { cards } from "./components/Card/Card.js";
import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Bookmark from "./components/Bookmark/Bookmark.js";
import { Card } from "./components/Card/Card.js";
import { CardList } from "./components/CardList/CardList.js";
import App from "./components/App/App.js";

// function header was here
// function handleformsubmit here
// form function here
//function bookmark
// function card + function cardlist
//app function

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
