import React from 'react'



import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'


const ExploreMenu = ({ category, setCategory }) => {

                             

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu/ Products</h1>
        <p className='explore-menu-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

            {/* Left Button */}

            <div className='explore-menu-scroll-div-left'>
                <button 
                    className="scroll-btn left" 
                    onClick={() => document.querySelector('.explore-menu-list').scrollBy({left: -200, behavior: 'smooth'})}
                >
                   {"<"}
                </button>
            </div>

            {/* Menu List */}
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                <div
                    onClick={() =>
                    setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
                    }
                    key={index}
                    className="explore-menu-list-item"
                >
                    <img
                    className={category === item.menu_name ? "active" : ""}
                    src={item.menu_image}
                    alt=""
                    />
                    <p>{item.menu_name}</p>
                </div>
                ))}
            </div>

            {/* Right Button */}
            <div className='explore-menu-scroll-div-left'>
                <button 
                    className="scroll-btn right" 
                    onClick={() => document.querySelector('.explore-menu-list').scrollBy({left: 200, behavior: 'smooth'})}
                >
                    {">"}
                </button> 
            </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
