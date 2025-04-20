import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import SearchPosts from "./SearchPost";
import Results from "./Results";

function Header() {
  const { onClearPosts } = useContext(PostContext);
  return (
    <header>
      <h1>
        <span>⚛️</span> Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
