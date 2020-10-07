import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// AddUser (uses Connect)
import AddUser from "./components/AddUser";
// AddUserWithHooks (uses Hooks)
import AddUserUsingHooks from "./components/AddUserUsingHooks";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/adduser"} className="nav-link">
              Add User (Connect)
            </Link>
            <Link to={"/adduserhooks"} className="nav-link">
              Add User (Hooks)
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          {/* AddUser (Connect version) */}
          <Route exact path="/adduser" component={AddUser} />
          {/* AddUser (Hooks version) */}
          <Route exact path="/adduserhooks" component={AddUserUsingHooks} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
