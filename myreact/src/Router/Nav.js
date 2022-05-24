import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../assets/css/specific.module.css';
function Nav()
{
    let activeStyle = {
        textDecoration: "none",
      };
    //let activeClassName = "underline";
return(
   <nav>
       <li>
       <NavLink to='/' className={(navInfo)=>{console.log(navInfo.isActive);
         return(navInfo.isActive?styles.abid:"")}}>Home</NavLink>
       </li>
       <li>
       <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/service'>Service</NavLink>
       </li>
       <li>
       <NavLink className={(info)=> info.isActive?styles.abid:""} to='/about'>About</NavLink>
       </li>
       </nav>
)
}

export default Nav;