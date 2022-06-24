import React from "react";

import Home from "./Home";
import Playlist from "./Playlists";
import Movie from "./SingleMovie";
import Login from "./Login"
import Register from "./Register"
import {Route, Switch} from "react-router-dom";

function App() {


  const updateUser = (user) => {
      localStorage.setItem('userData', btoa(encodeURIComponent(JSON.stringify(user))))
  }

  return (
    <Switch>
      <Route path="/" exact>
          <Home updateUser={updateUser} />
      </Route>
      <Route path="/movies/:id" children={<Movie />}></Route>
      <Route path="/login">
        <Login updateUser={updateUser}/>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/playlist" children={<Playlist />}> </Route>
    </Switch>
  );
}

export default App;

export const logOutUser = () => {
    localStorage.removeItem('userData')
    window.location = "/register"
}