import React from 'react';
import { useParams } from 'react-router-dom';

function Posts()
{
    const {id}=useParams();
return(
    <div>
        <p>Hi I am Post-{id}</p>
    </div>
)
}

export default Posts;