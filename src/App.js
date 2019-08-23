import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Details from './components/Details';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Login} />
          <div className="container-fluid">
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/add" component={Add} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
