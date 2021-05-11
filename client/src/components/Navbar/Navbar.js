import React , {useState} from 'react'
import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Sidebar} from './Sidebar'; 
import logo from '../../assets/logo/logo.png'; 
import {IconContext}  from 'react-icons'; 
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => { 
        setSidebar(!sidebar)
    }
    return (
        <>
        
        <IconContext.Provider value={{ color: 'gold' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
        <img className='logo' src ={logo} alt ="cologne" />
      </>
    )
}

export default Navbar
