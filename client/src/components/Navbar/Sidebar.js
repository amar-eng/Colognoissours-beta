import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';


export const Sidebar =[
    {
        title: 'Home',
        path:'/', 
        icon: <AiIcons.AiFillHome />, 
        cName: 'nav-text'

    },
    {
        title: 'Explore Scents',
        path:'/scents', 
        icon: <GiIcons.GiPerfumeBottle />, 
        cName: 'nav-text'

    },
    {
        title: 'Pricing Plans',
        path:'/pricing', 
        icon: <GiIcons.GiTakeMyMoney />, 
        cName: 'nav-text'

    },
    {
        title: 'About Us',
        path:'/about', 
        icon: <FaIcons.FaPeopleCarry />, 
        cName: 'nav-text'

    },
    {
        title: 'Cart',
        path:'/cart', 
        icon: <AiIcons.AiOutlineShoppingCart />, 
        cName: 'nav-text'

    },
    {
        title: 'Logout',
        path:'/logout', 
        icon: <AiIcons.AiOutlineLogout />, 
        cName: 'nav-text'

    },
]