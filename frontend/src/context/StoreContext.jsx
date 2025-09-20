import { createContext, useEffect, useState } from "react";
import axios from 'axios';

// Create context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(""); // 🟢 token state

  const [food_list, setFoodList] = useState([]);

 // const url = "http://localhost:4000";

   const url = "https://the-good-habit-production-backend.onrender.com";

  // 🔹 Load token from localStorage when app starts
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []); 

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (cartItems[itemId] === 1) {
        const updatedCart = { ...cartItems };
        delete updatedCart[itemId];
        setCartItems(updatedCart);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id == item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async() =>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }

    // 🔹 Save token to localStorage whenever it changes
    useEffect(() => { 
      async function loadData(){
          await fetchFoodList() 
          if (token) {
            localStorage.setItem("token", token);
          } else {
            localStorage.removeItem("token");
          }
      }
      loadData();
    }, [token]);

  // Context value
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  }; 
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
