import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import queryString from "query-string"

const activeStyle = {
  color: 'green',
};

const isLogin = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/">
              ./
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/profile">    
              profile
            </NavLink>
          </li>
          <li> <NavLink exact activeStyle={activeStyle} to="/profile/1">profile/1</NavLink></li>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/about" isActive={(match, location) =>{
              console.log(match, location);
              if (location.pathname !=="about") return false;
              const query = queryString.parse(location.search);
              return query.name === undefined;
            }}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={activeStyle} to="/about?name=leetw"  isActive={(match, location) =>{
              console.log(match, location);
              if (location.pathname !=="about") return false;
              const query = queryString.parse(location.search);
              return query.name !== undefined;
            }}>             
              about?name=leetw
            </NavLink>
          </li>
          <li>  <NavLink exact activeStyle={activeStyle} to="/login">login</NavLink></li>
        </ul>
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
