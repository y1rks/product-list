import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopPage = () => {

  const [posts, setPosts] = useState([])
  const url = 'http://localhost:3000/api/confirm'

  useEffect(() => {
    fetch(url, {method: 'GET'})
    .then(async (res) => {
      return res.json()
    })
    .then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <>
      <h1>Products List</h1>
      <Link to="/play/hoge">Player Page</Link>
      <p>---------------------</p>
      <div>
        <ul>
          {
            posts.map(post => 
            <li key={post.id}>
                <div>
                    <p>{post.id}</p>
                    <p>{post.name}</p>
                    <p>{post.price}円</p>
                    <p>{post.description}</p>
                </div>
            </li>
            )
          }
        </ul>
      </div>
    </>
  );
};

export default TopPage;
