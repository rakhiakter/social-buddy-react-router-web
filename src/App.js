import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommentNum from './Components/CommentNum/CommentNum';

function App() {
  
  return (
    <div>
       <Header></Header>
     
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/post/:postId" component = {CommentNum}/>
          
  
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
