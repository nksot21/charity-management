import React from 'react'
import BannerImg from '../../../assets/images/global/banner.png'
import Banner from '../components/Banner'
import Introduction from '../components/Introduction'

function LandingPage() {
  return (
    <div >
      <div style={{width: '100%'}}>
        <img src={BannerImg} style={{width:"100%", objectFit: "contain",  filter: 'grayscale(45%)'}}  />
        <Banner />
      </div>
      <div style={{width: '100%'}}>
        <Introduction />
      </div>
      
    </div>
  )
}

export default LandingPage