import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetail from './Components/PostDetail/PostDetail';
import Header from './Components/Header/Header';

function App() {
  
  return (
   
 <Router>
   <Header />
    <Switch>
      <Route path = "/Home">
        <Home />
      </Route>
      <Route path = "/PostDetail/:postNo">
        <PostDetail />
      </Route>
      <Route exact path = "/">
        <Home />
      </Route>
      <Route path = "*">
        <NoMatch />
      </Route>
    </Switch>
  </Router> 
  );
}

export default App;
