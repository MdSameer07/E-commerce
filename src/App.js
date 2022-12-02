import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import {ProductDetails} from './components/ProductDetails'
import {QueryClientProvider,QueryClient} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
    <>
      <NavBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/products/:id' element = {<ProductDetails/>}/>
      </Routes>
    </>
    </QueryClientProvider>
  );
}

export default App;
