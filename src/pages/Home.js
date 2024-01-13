import React from 'react'
import BestSellers from '../components/js/BestSellers'
import HomeSlider from '../components/js/HomeSlider'
import AdvantageSlider from '../components/js/AdvantageSlider'




export default function Home() {
  return (
    <div className='Home'>
    

        <HomeSlider />
        <BestSellers />
        <AdvantageSlider />
    </div>
  )
}
