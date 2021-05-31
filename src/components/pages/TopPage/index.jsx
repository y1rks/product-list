import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SEARCH_URL = "http://localhost:3000/api/search?q=";
const DELETE_URL = "http://localhost:3000/api/delete?id=";

function fetchProducts(event, setPosts) {
  const url = SEARCH_URL + event.target.value;
  fetch(url, { method: "GET" })
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      setPosts(data);
    });
}

function deleteProduct(id, setPosts) {
  const url = DELETE_URL + id;
  fetch(url, {
    method: "GET",
  })
    .then(async (res) => {
      return res.json();
    })
    .then(() => {
      fetch(SEARCH_URL, { method: "GET" })
        .then(async (res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        });
    });
}

const TopPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(SEARCH_URL, { method: "GET" })
      .then(async (res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <h1>Products List</h1>
      <Link to="/register">Register</Link>
      <div>
        <p>Search:</p>
        <input
          type="text"
          onChange={(e) => {
            fetchProducts(e, setPosts);
          }}
        ></input>
      </div>
      <div>
        <ul>
          {posts.map((post) => (
            <div key={post.id}>
              <p>ID: {post.id}</p>
              <p>Name: {post.name}</p>
              <p>Price: {post.price}円</p>
              <p>Description: {post.description}</p>
              <Link to={"/edit/" + post.id}>
                <button>Edit</button>
              </Link>
              <button onClick={(e) => deleteProduct(post.id, setPosts)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopPage;
