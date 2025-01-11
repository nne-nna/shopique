import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import Categories from '../components/Categories'
import CashBack from '../components/CashBack'
import InfoCards from '../components/InfoCards'

const Home = () => {
  return (
    <div>
        <Hero />
        <Categories />
        <BestSeller />
        <CashBack />
        <InfoCards />
    </div>
  )
}

export default Home