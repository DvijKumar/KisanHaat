import React from 'react'
import './Product_SideBar.css'
import CategorySideBar from './CategorySideBar'
import AllProducts from './AllProducts'

const Product_SideBar = () => {
  return (
    <div className='product_sidebar'>
      <CategorySideBar />
      <AllProducts />
    </div>
  )
}

export default Product_SideBar