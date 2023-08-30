import React from 'react'
import Header from '../containers/Header'
import HeroSection from '../containers/HeroSection'
import Features from '../containers/Features'
import Benifits from '../containers/Benifits'

function Home() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <Features/>
        <Benifits/>
      </main>
    </>
  )
}

export default Home