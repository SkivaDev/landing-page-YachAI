import React from 'react'
import Header from '../containers/Header'
import HeroSection from '../containers/HeroSection'
import Features from '../containers/Features'

function Home() {
  return (
    <>
      <Header/>
      <main>
        <HeroSection/>
        <Features/>
      </main>
    </>
  )
}

export default Home