import React, { useState } from "react";
import PostContext from "../context/PostContext";
import { createRandomPost } from "../Services/post.service";
import Header from "../components/Header";
import Main from "../components/Main";
import Archive from "../components/PostArchived";
import Footer from "../components/Footer";
import { getPost } from "../utils/post.utils";
export default function Home() {
  const [posts, setPosts] = useState(getPost);
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
      }}
    >
      <section>
        <Main />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}
