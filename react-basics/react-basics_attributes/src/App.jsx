import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">I'm a title</h2>
      <label htmlFor="connect">i'm a label</label>
      <input id="connect" type="text" />
      <a
        textContent="something to know"
        className="article__link"
        href="https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label"
      ></a>
    </article>
  );
}
