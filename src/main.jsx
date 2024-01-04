import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './Secondpage/Home.jsx'
import About from './Secondpage/About.jsx'
import Products from './Secondpage/Products.jsx'
import Contact from './Secondpage/Contact.jsx'
import Carrier from './Secondpage/Carrier.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='Product' element={<Products/>}></Route>
      <Route path='Carrier' element={<Carrier/>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <RouterProvider  router={router}/>
   
  </React.StrictMode>,
)
