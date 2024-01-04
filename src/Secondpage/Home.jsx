import React from 'react'
import Hero from '../Sections/Hero'
import Feature1 from '../Components/Feature1'
import Feature2 from '../Components/Feature2'
import CryptoNews from '../Components/CryptoNews'
import CryptoTable from '../Components/CryptoTable'

const Home = () => {
  return (
    <>
     <Hero/>
     <Feature1/>
     <CryptoTable/>
     <Feature2/>
     <CryptoNews/>
    </>
  )
}

export default Home