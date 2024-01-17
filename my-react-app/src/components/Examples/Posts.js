import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [start, setStart] = useState(0); // For pagination
  const [limit, setLimit] = useState(10); // For pagination

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}&q=${searchTerm}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [start, limit, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setStart(0); // Resetting start when a new search term is entered
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => setStart(start - limit)}>Previous</button>
      <button onClick={() => setStart(start + limit)}>Next</button>
    </div>
  );
};

export default Posts;
