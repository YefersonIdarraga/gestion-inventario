import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './layout/Home'
import Map from './layout/Map'
import Error404 from './helper/Error404'
import Signin from './layout/Signin'
import Signup from './layout/Signup'
import Registered from './layout/Registered'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/map' element={<Map />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/registered' element={<Registered />}/>
      <Route path='*' element={<Error404 />}/>
    </Routes>
  </BrowserRouter>
)
