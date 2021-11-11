
import './App.css';

import React, {useState} from 'react'
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import ProductDetail from './components/ProductDetail';
import EditProductForm from './components/EditProductForm';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
        <h1>Product Manager</h1>
        <Link to = '/' class = 'btn btn-info'>Home</Link>
        <Switch>
          <Route exact path = '/'>
            <NewProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></NewProductForm>
            <hr></hr>
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>
          <Route exact path = '/product/:id'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path = '/edit/:id'>
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
