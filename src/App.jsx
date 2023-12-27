import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Solucoes from './components/Solucoes/Solucoes'
import QuemSomos from './components/QuemSomos/QuemSomos'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'
import ConhecaInsta from './components/ConhecaInsta/ConhecaInsta'
import FaleConosco from './components/FaleConosco/FaleConosco'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Solucoes />
      <QuemSomos />
      <FaleConosco />
      <Faq />
      <ConhecaInsta />      
      <Footer />
    </>
  )
}

export default App
