import React from "react";

function Category()
{
    return(
        <>
        <h1 style={{textAlign:"center",marginTop:"50px"}}><i>CATEGORIES</i></h1>

        <div style={{display:"flex"}}>
        <div style={{textAlign:"center"}}>
        <img src="image1.jpg" height={"500px"} width={"500px"}></img>
        <h1>plant1</h1>
       
        </div>
        <div style={{textAlign:"center"}}>
       <img src="flower1.png" height={"500px"} width={"400px"}></img>
        <h1>plant1</h1>
       
        </div>
        <div style={{textAlign:"center"}}>
       <img src="flower2.jpg" height={"500px"} width={"500px"}></img>
        <h1>plant1</h1>
       
        </div>
        </div>

         <div style={{display:"flex"}}>
        <div style={{textAlign:"center"}}>
       <img src="newimage4.jpg" height={"500px"} width={"500px"}></img>
        <h1>plant1</h1>
       
        </div>
        <div style={{textAlign:"center"}}>
        <img src="newimage2.jpg" height={"500px"} width={"500px"}></img>
        <h1>plant1</h1>
       
        </div>
        <div style={{textAlign:"center"}}>
        <img src="newimage3.jpg" height={"500px"} width={"500px"}></img>
        <h1>plant1</h1>
       
        </div>
        </div>
        </>
    )
}
export default Category;