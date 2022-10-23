import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  let [usersData, setUsersData] = useState({ fname: "", lname: "", email: "", password: "" })
  // const [fname, setFName] = useState("")
  // const [lname, setlName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  async function handleSubmit(e) {
    e.preventDefault()
    console.log(usersData)
    const response = await fetch(`http://localhost:4000/users/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usersData)

    })
    const parsedResponse= await response.json()
    console.log(parsedResponse)
  
  }

  // handleClose()}

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const { fname, lname, email, password } =  state;
  //   console.log("test; ",fname, lname, email, password);
  //   axios.post('/users/sign-up', {fname, lname, email, password})
  // .then(r => {
  // console.log("RESPONSE:")
  // })
  // let res = await fetch('http://localhost:4000/sign-up', {
  //   method: 'POST',
  //   // crossDomain: true,
  //   // headers: {
  //   //   'Content-Type': 'application/json',
  //   //   Accept: 'application/json',
  //   //   'Access-Control-Allow-Origin': '*',
  //   // },
  //   body: JSON.stringify({
  //     fname:fname,
  //     email:email,
  //     lname:lname,
  //     password:password
  //   }),
  // })
  // .then((res) => res.json())
  // .then((data) => {
  // console.log(data, 'userRegister');
  // });

  // render() {
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div>
        <label>First name</label>
        <input
          // value= {fname}
          type='text'
          className='form-control'
          placeholder='First name'
          // onChange={(e) =>  setFName( e.target.value )}
          onChange={e => setUsersData({ ...usersData, 'fname': e.target.value },)}
        />
      </div>

      <div>
        <label>Last name</label>
        <input
          // value= {lname}
          type='text'
          className='form-control'
          placeholder='Last name'
          // onChange={(e) =>  setlName( e.target.value )}
          onChange={e => setUsersData({ ...usersData, 'lname': e.target.value },)}
        />
      </div>

      <div>
        <label>Email address</label>
        <input
          // value= {email}
          type='email'
          className='form-control'
          placeholder='Enter email'
          // onChange={(e) =>  setEmail( e.target.value )}
          onChange={e => setUsersData({ ...usersData, 'email': e.target.value },)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          // value= {password}
          type='password'
          className='form-control'
          placeholder='Enter password'
          // onChange={(e) =>  setPassword( e.target.value )}
          onChange={e => setUsersData({ ...usersData, 'password': e.target.value },)}
        />
      </div>
      <div>
        <button type="submit">
          Sign Up
        </button>
      </div>

      <p>
        Already registered <a href='/login-user'>sign in?</a>
      </p>
    </form>
  );
}
