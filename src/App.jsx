import React from 'react'
import Home from './pages/Home'
import Navbar from './components/shared/Navbar'
import ScrollProvider from './components/Common/ScrollProvider'

const App = () => {
  return (
    <ScrollProvider>
      <Navbar />
      <Home />
    </ScrollProvider>
  )
}

export default App