import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EDIT_URL = 'http://localhost:3000/api/edit';

function getId() {
  const pathname = location.pathname;
  return pathname.match(/\d+/);
}

function editProduct(id, name, price, description) {
  fetch(EDIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      name,
      price,
      description,
    }),
  }).then( (res) => {
    return res.json();
  });
}

const EditPage = () => {
  const [id] = useState(getId());
  const [name, setName] = useState('default');
  const [price, setPrice] = useState(10000);
  const [description, setDescription] = useState('No description');

  return (
    <>
      <h1>Edit #{id} product</h1>
      <p>
        Name:
        <input type='text' onChange={(e) => setName(e.target.value)}></input>
      </p>
      <p>
        Price:
        <input type='text' onChange={(e) => setPrice(e.target.value)}></input>
      </p>
      <p>
        Description:
        <input
          type='text'
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </p>
      <Link to='/'>
        <button onClick={(e) => editProduct(id, name, price, description)}>
          Edit
        </button>
      </Link>
    </>
  );
};

export default EditPage;
