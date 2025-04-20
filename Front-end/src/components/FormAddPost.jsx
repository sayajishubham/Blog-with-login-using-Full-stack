import React, { useState } from "react";
import PostContext from "../context/PostContext";
import { createPost } from "../utils/post.utils";

function FormAddPost() {
  const [title, setTitle] = useState("");
  const [content, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !title) return;
    createPost({ title, content });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={content}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
