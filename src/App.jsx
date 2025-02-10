import React from 'react'
import { Routes,Route,} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Emailverify from './pages/Emailverify'
import Reset_pass from './pages/Reset_pass'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>  
       <Route path='/email-verify' element={<Emailverify/>}/>
       <Route path='/Reset_pass' element={<Reset_pass/>}/>


      </Routes>
    </div>
  )
}

export default App