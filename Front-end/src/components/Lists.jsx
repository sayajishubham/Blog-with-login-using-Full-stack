import React, { useContext } from "react";
import PostContext from "../context/PostContext";

function List() {
  const { posts } = useContext(PostContext);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className="flex justify-between ">
            <button className="rounded-md text-xs">Delete</button>
            <button className="rounded-md">Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default List;
