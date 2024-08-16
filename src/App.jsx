import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index'
import Blog from './Blog'
import BlogSingle from './BlogSingle'
import Car from './Car'
import About from './About'
import CarSingle from './CarSingle'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

function App() {
  

  return (
    <>
    <BrowserRouter>
  <ScrollToTop/>
<Routes>
  <Route path='/' element={<Index/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/cars' element={<Car/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/blogsingle' element={<BlogSingle/>}></Route>
  <Route path='/cars/:id' element={<CarSingle/>}></Route>
  

</Routes>
</BrowserRouter>
    </>
  )
}

export default App

