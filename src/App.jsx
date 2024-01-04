
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'

import Nav from './Components/Nav'


function App() {
  return (
    <div className='App'>
      <Nav/>
       <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
