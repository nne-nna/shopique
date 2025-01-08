import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
        <Hero />
        {/*<LatestCollection />*/}
        <Categories />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
    </div>
  )
}

export default Home