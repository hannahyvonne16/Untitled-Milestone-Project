import React, { Component } from 'react';
import { useState, useContext } from 'react';
import { CurrentUser } from '../../context/CurrentUser';

export default function Login() {
  const { setCurrentUser } = useContext(CurrentUser)
  let [errorMessage, setErrorMessage] = useState(null)
  let [usersData, setUsersData] = useState({ email: "", password: "" })
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(usersData);
    const response = await fetch(`http://localhost:4000/authentication/login-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usersData),

    });
    const parsedResponse = await response.json()
    console.log(parsedResponse)

    if (response.status === 200) {
      setCurrentUser(parsedResponse.user)
      localStorage.setItem('token', parsedResponse.token)
    } else {
      setErrorMessage(parsedResponse.message)
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      <div>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          onChange={e => setUsersData({ ...usersData, 'email': e.target.value },)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          onChange={e => setUsersData({ ...usersData, 'password': e.target.value },)}
        />
      </div>

      <div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
      <p>
        <a href='/sign-up'>Sign up</a>
      </p>
    </form>
  );
}
