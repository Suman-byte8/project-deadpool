import React from 'react'
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <div className="w-full h-full"> 
      <Navbar />
      <Home />
    </div>
  )
}

export default App