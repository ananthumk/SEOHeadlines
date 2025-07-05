import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import GeneratePage from './components/GeneratePage/GeneratePage'
import Footer from './components/Footer/Footer'

function App() {


  return (
      <div>
      <Navbar />
      <GeneratePage />
      <Footer />
      </div>
  )
}

export default App
