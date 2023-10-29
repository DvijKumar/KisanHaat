import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import BannerSlider from '../../Components/Banner/BannerSlider'
import HomeCategories from '../../Components/Category/HomeCategories'
import ProductSidebar from '../../Components/Product/ProductSideBar'
import Footer1 from '../../Components/Footer/Footer1'
import Footer2 from '../../Components/Footer/Footer2'

const Home = () => {
  return (
    <div>
      <div className='bg'></div>
      <div className='bg bg2'></div>
      <div className='bg bg3'></div>
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <ProductSidebar />
      <Footer1 />
      <Footer2 />
      
      </div>
  )
}

export default Home