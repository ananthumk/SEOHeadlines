import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import GeneratePage from './components/GeneratePage/GeneratePage'
import Footer from './components/Footer/Footer'

function App() {


  return (
      <div>
      <Navbar />
      <div className='pt-[65px] md:pt-20'>
        <GeneratePage />
        <Footer />
      </div>
      </div>
  )
}

export default App
