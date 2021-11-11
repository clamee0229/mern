import './App.css'

import React, {useState} from 'react'
import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <div className = 'container'>
          <h1>Favorite Authors</h1>
          <Link to = '/' className = 'btn btn-primary'>Home</Link>
          <Switch>
            <Route exact path = '/'>
              <AllAuthors formSubmitted = {formSubmitted}></AllAuthors>
            </Route>
            <Route exact path = '/new'>
              <NewAuthorForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted} />
            </Route>
            <Route exact path = '/edit/:id'>
              <EditAuthorForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></EditAuthorForm>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
