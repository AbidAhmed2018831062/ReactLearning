import React from 'react';
import { NavLink } from 'react-router-dom';

function Post()
{
    let activeClass={
        textDecoration:"none",
        color:"red"

    }
return(
    <div>
        <ul>
            <li>
                <NavLink className={(info)=> info.isActive?activeClass:""}to="/posts/1">Post 1</NavLink>
            </li>
            <li>
                <NavLink className={(info)=> info.isActive?activeClass:""} to="/posts/2">Post 2</NavLink>
            </li>
            <li>
                <NavLink className={(info)=> info.isActive?activeClass:""} to="/posts/3">Post 3</NavLink>
            </li>
        </ul>
    </div>
)
}

export default Post;