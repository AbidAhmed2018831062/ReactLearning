import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Posts()
{
    const navi=useNavigate();
    const {id}=useParams();
    const goBack=()=>{
        navi("/post",{
            replace:true
        });
    }
return(
    <div>
        <p>Hi I am Post-{id}</p>
        <button onClick={goBack}>Go Back</button>
    </div>
)
}

export default Posts;