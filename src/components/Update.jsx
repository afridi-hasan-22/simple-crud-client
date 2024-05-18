import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const updatedUser = {name , email}

    fetch(`http://localhost:5000/users/${user._id}`, {
      method : 'PUT',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset()
      });
  };
  return (
    <div>
      <h1>Update information of : {user.name}</h1>
      <form onSubmit={handleUpdate}>
        <input type='text' name='name' defaultValue={user?.name} id='' /> <br />
        <input
          type='email'
          name='email'
          defaultValue={user?.email}
          id=''
        />{' '}
        <br />
        <input type='submit' value='Update' />
      </form>
    </div>
  );
};

export default Update;
