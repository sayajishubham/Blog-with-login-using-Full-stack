import React, { useEffect, useState } from "react";
import { DeletePost, getPost } from "../utils/post.utils";
import { NavLink } from "react-router";

function List() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const check = async () => {
      const res = await getPost();
      setposts(res);
    };
    check();
  }, []);
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>written by {post.author.username}</p>
          <div className="flex justify-between ">
            <>
              <button
                className="rounded-md text-xs"
                onClick={(e) => DeletePost(post._id)}
              >
                Delete
              </button>
              <NavLink to={`/update/${post._id}`}>
                {" "}
                <button className="rounded-md">Edit</button>
              </NavLink>
            </>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default List;
