import React from 'react'
import './CategorySideBar.css'
import img1 from '../../Assests/Images/1.png'
import img2 from '../../Assests/Images/2.png'
import img3 from '../../Assests/Images/3.png'
import img4 from '../../Assests/Images/4.png'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: img1,
            categoryname: 'Dairy Products'
        },
        {
            id: 2,
            categoryimage: img2,
            categoryname: 'Fertilizers'
        },
        {
            id: 3,
            categoryimage: img3,
            categoryname: 'Vegetables & Fruits'
        },
        {
            id: 4,
            categoryimage: img4,
            categoryname: 'Seeds'
        },
        {
            id: 5,
            categoryimage: img1,
            categoryname: 'Daily Products'
        },
        {
            id: 6,
            categoryimage: img2,
            categoryname: 'Fertilizers'
        },
        {
            id: 7,
            categoryimage: img3,
            categoryname: 'Vegetables & Fruits'
        },
        {
            id: 8,
            categoryimage: img4,
            categoryname: 'Seeds'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar