import logo from './logo.png';

import hamburger_icon from './hamburger_icon.png';
import hamburger_icon2 from './hamburger_icon2.png';

import search_icon from './search_icon.png';
import basket_icon from './basket_icon.png';
import user_icon from './user_icon.png';

import orders from './orders.png'
import logout from './logout.png';

import profile_image from './profile_image.png';
import cross_icon from './cross_icon.png';
import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import logo_ from './logo_.png';

import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';
import menu_9 from './menu_9.png';
import menu_10 from './menu_10.png';   
import menu_11 from './menu_11.png';
import menu_12 from './menu_12.png';

import pizza_ from './pizza_.png';


export const assets = {
    logo,
    hamburger_icon,
    hamburger_icon2,
    search_icon,
    basket_icon,
    user_icon,
    orders,  
    logout,
    profile_image,
    cross_icon,
    add_icon_white,
    add_icon_green,
    remove_icon_red,
    logo_,
    pizza_
};


export const menu_list =[
    {
        menu_name : "Pizza",
        menu_image : menu_1
    },

    {
        menu_name : "Biryani",
        menu_image : menu_2
    },

    {
        menu_name : "Burger",
        menu_image : menu_3
    },

    {
        menu_name : "Chicken",
        menu_image : menu_4        
    },

    {
        menu_name : "Thali",
        menu_image : menu_5         
    },

    {
        menu_name : "    Fride Rice  ",
        menu_image : menu_6         
    },
    {
        menu_name : "  Rolls",
        menu_image : menu_7         
    },
    {
        menu_name : "North Indian  ",
        menu_image : menu_8
    },
    {
        menu_name : "Veg Meal",
        menu_image : menu_9
    },
    {
        menu_name : "Cake",
        menu_image : menu_10
    },
    {
        menu_name : "       Panner",
        menu_image : menu_11
    },
        {
        menu_name : "       Dosa",
        menu_image : menu_12
    }

];


export const food_list = [
    {
        _id: 1,
        name: "Product Name 1",
        image: pizza_,
        price: 10.99,
        
        description: "This is a description for Product Name 1.",
        category: "Category 1"
    },
    {
        _id: 2,  
        name: "Product Name 2",
        image: menu_2,
        price: 12.99,
        
        description: "This is a description for Product Name 2.",
        category: "Category 2"
    },
    {   
        _id: 3,
        name: "Product Name 3",
        image: menu_3,
        price: 8.99,  
        
        description: "This is a description for Product Name 3.",
        category: "Category 1"
    },
    {
        _id: 4,
        name: "Product Name 4",
        image: menu_4,
        price: 15.99,
        
        description: "This is a description for Product Name 4.",
        category: "Category 3"
    },
    {       
        _id: 5,
        name: "Product Name 5",
        image: menu_5,
        price: 9.99,    
        
        description: "This is a description for Product Name 5.",
        category: "Category 2"
    }       

];