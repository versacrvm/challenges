import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags((prevTags) => [...prevTags, newTag]);
  }
  function handleDeleteTag(tagToDelete) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
