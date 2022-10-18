import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home';
import Account from './components/Pages/Account';
import Project from './components/Pages/Project';
import Team from './components/Pages/Team';
import SignUp from './components/Pages/signup_component';
import Login from './components/Pages/login_registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/project" element={<Project />} />
              <Route path="/team" element={<Team />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/login-user' element={<Login />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

