import React, { useContext } from 'react'
import './FoodDisplay.css' 
import FoodItem from '../FoodItem/FoodItem'; 
import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext); 
  return (
    <div className="food-display" id="food-display">
      <h2>Top Products / Food / Dishes</h2>
        <div className='food-display-list'>
            {food_list.map((item,index) => {
                
                    return <FoodItem 
                            key={item._id}
                            id={item._id}   // 👈 add this
                            name={item.name} 
                            description={item.description}
                            price={item.price}
                            image={item.image} 
                        />
                
                return null;
            })}
        </div>
    </div>
  );
};

export default FoodDisplay;
