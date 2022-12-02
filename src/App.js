import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import {Products} from './components/Products'
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
    <>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/products/:id' element = {<Products/>}/>
      </Routes>
    </>
    </QueryClientProvider>
  );
}

export default App;
