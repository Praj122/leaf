import React from 'react'
import { IoMdMenu } from "react-icons/io";
import Home from './Home';
import Category from './Category';
import About from './About';
import { Link } from "react-router-dom";

function Nav()
{
    return(
        <>
        <div style={{width:"auto",height:"50px",backgroundColor:"#91d973",color:"white",display:"flex",gap:"70px", paddingLeft:"150px"}}>
         <IoMdMenu style={{height:"60px",width:"40px"}}></IoMdMenu>
         <h3>HOME</h3>
         <h3>CATEGORIES</h3>
         <h3>PRODUCTS</h3>
         <h3>ABOUT US</h3>
         <h3>CONTACT US</h3>
         <h3>LOGIN</h3>
         <h3>SIGNUP</h3>
        </div>
        <Home></Home>
        <Category></Category>
        <About></About>
        </>
    )
}

export default Nav