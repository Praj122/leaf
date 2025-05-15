import React from "react";

function Home()
{
    return(
        <>
        <div style={{display:"flex",marginTop:"10px" ,marginLeft:"100px"}}>
            <div style={{width:"50%",textAlign:"center",paddingTop:"100px",color:"white",background:"#91d973"}}>
                <h1>Explore From A</h1>
                <h1><i>Variety Of plant</i></h1>
            </div>
            <div style={{width:"50%",marginLeft:"10px"}}>
                <img src="main.jpg" width={"70%"}></img>
            </div>
        </div>
        </>
    )
}
export default Home;