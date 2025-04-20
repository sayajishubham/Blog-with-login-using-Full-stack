import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import { getPost } from "../utils/post.utils";

function Results() {
  const getdata = async () => {
    try {
      const data = await getPost();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  getdata();

  return <p>🚀 atomic posts </p>;
}

export default Results;
