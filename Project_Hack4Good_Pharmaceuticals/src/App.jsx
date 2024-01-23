import { useState } from 'react'
import './components/styles/Header.css'
import {Routes, Route } from 'react-router-dom'
import Main from './components/Main.jsx'
import Search from './components/Search.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
