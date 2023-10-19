import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import BannerSlider from '../../Components/Banner/BannerSlider'
import HomeCategories from '../../Components/Category/HomeCategories'
import Product_Sidebar from '../../Components/Product/Product_SideBar'

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      
      </div>
  )
}

export default Home