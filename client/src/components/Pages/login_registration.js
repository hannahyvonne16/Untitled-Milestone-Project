import React, { Component } from 'react';
import {useState} from 'react';

export default function Login(){
let [usersData, setUsersData] = useState({email:"", password: ""})
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(usersData);
   const response = await fetch(`http://localhost:4000/authentication/login-user`, {
      method: 'POST',
  //     // crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
  //       // Accept: 'application/json',
  //       // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(usersData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, 'userRegister');
  //       if (data.status === 'ok') {
  //         alert('login successful');
  //         window.localStorage.setItem('token', data.data);
  //         window.location.href = './userDetails';
  //       }
      });
      const parsedResponse= await response.json()
    console.log(parsedResponse)
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
