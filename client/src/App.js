import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home';
import Account from './components/Pages/Account';
import Project from './components/Pages/Project';
import Team from './components/Pages/Team';
import SignUp from './components/Pages/signup_component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

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
              <Route path='/register' element={<SignUp />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

