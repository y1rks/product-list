import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SEARCH_URL = 'http://localhost:3000/api/search?q=';

function fetchProducts(event, setPosts) {
  const url = SEARCH_URL + event.target.value;
  fetch(url, {method: 'GET'}).then(async (res) => {
    return res.json();
  }).then(data => {
    console.log(data);
    setPosts(data)
  });
}

const TopPage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(SEARCH_URL, {method: 'GET'})
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
        <input type="text" onChange={e => {fetchProducts(e, setPosts)}}></input>
      </div>
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
