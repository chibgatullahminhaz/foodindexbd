import react  from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePages'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfount'
function App() {

  return (
    <>
    <Routes>
    <Route path='/'  element={<HomePage />} />
    <Route  path='/about' element={ <About /> } />
    <Route  path='/contact' element={ <Contact /> } />
    <Route  path='/policy' element={ <Policy /> } />
    <Route  path='*' element={ <Pagenotfound /> } />
    <Route  path='/about' element={ <About /> } />

    </Routes>
    
     
    </>
  )
}

export default App
