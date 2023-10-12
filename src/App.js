import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import ParticleBg from './Components/ParticleBg/ParticleBg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <ParticleBg />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={
        <div>404 Not Found</div>
      } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App