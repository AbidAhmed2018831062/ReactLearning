import React from 'react';
import { Link } from 'react-router-dom';

function Nav()
{

return(
   <nav>
       <li>
       <Link to='/'>Home</Link>
       </li>
       <li>
       <Link to='/service'>Service</Link>
       </li>
       <li>
       <Link to='/about'>About</Link>
       </li>
       </nav>
)
}

export default Nav;