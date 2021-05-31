import React, { useState } from "react";
import { Link } from "react-router-dom";

const REGISTER_URL = "http://localhost:3000/api/register";

function registerProduct(name, price, description) {
  fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then(async (res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

const RegisterPage = () => {
  const [name, setName] = useState("default");
  const [price, setPrice] = useState(10000);
  const [description, setDescription] = useState("No description");

  return (
    <>
      <h1>Register</h1>
      <p>
        Name:
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </p>
      <p>
        Price:
        <input type="text" onChange={(e) => setPrice(e.target.value)}></input>
      </p>
      <p>
        Description:
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </p>
      <Link to="/">
        <button onClick={(e) => registerProduct(name, price, description)}>
          Register
        </button>
      </Link>
    </>
  );
};

export default RegisterPage;
