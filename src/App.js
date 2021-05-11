import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/home/Homepage';
import './App.css';
import Poster from './pages/posts/Poster';
import Contacts from './pages/contacts/Contacts';
import Photos from './pages/photos/Photos';

function App() {
  return (
    <div className="App">
      <header className="nav-page">
      <Navigation />
      </header>
      <div className="general">
      <Switch>
        <Route path = "/react-deploy-21hw/" exact component = {Home} />
        <Route path = "/react-deploy-21hw/posts" exact component = {Poster} />
        <Route path = "/react-deploy-21hw/photos" exact component = {Photos} />
        <Route path = "/react-deploy-21hw/contacts" exact component = {Contacts} />
        </Switch>
        </div>
   </div>

    
  );
}

export default App;
