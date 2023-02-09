import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './layout/Home'
import Error404 from './helper/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='*' element={<Error404 />}/>
    </Routes>
  </BrowserRouter>
)
