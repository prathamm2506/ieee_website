import React from 'react'
import Header from '../components/header/Header'
import CommunityStats from '../components/stats/CommunityStats'
import Testimonials from '../components/testimonials/Testimonials'
import Aboutus from '../components/Aboutus/Aboutus'
import Provide from '../components/provide/Provide'

const Home = () => {
  return (
    <div>
        <Header/>
        <Aboutus/>
        {/* <CommunityStats/> */}
        <Provide/>
        <Testimonials/>
    </div>
  )
}

export default Home