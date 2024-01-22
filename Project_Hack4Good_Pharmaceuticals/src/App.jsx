import { useState } from 'react'
import './App.css'

import Main from './HomePage/Main'
import Footer from './HomePage/Footer'
import Header from './HomePage/Header'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App
