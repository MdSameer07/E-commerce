import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import {Products} from './components/Products'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/products/:Id' element = {<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
