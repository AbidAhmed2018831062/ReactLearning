import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Post from "./Post";
import Posts from "./Posts";
import Service from "./Services";
export default class  App extends React.Component {
    render(){
     return (
       <>
      <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path="/post" element={<Post/>}></Route>
       <Route path="/posts/:id" element={<Posts/>}></Route>
       </Routes>
       </>
   )
     }
     
   }