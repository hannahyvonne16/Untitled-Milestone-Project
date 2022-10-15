import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar />
        </Router>
    </div>
  );
}

export default App;
