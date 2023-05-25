import React from 'react'
import BannerImg from '../../../assets/images/global/banner.png'
import Banner from '../components/Banner'
import DonorCard from '../components/DonorCard'
import Introduction from '../components/Introduction'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DonorList from '../components/DonorList'

function LandingPage() {
  
  
  return (
    <div >
      <div style={{width: '100%'}}>
        <img src={BannerImg} style={{width:"100%", objectFit: "contain",  filter: 'grayscale(45%)'}}  />
        <Banner />
      </div>
      <div style={{width: '100%', marginBottom: '50px'}}>
        <Introduction />
      </div>
      <div style={{width: '100%', marginBottom: '50px'}}>
        <DonorList />
      </div>
    </div>
  )
}



export default LandingPage