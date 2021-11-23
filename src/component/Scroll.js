import React from "react";  

const Scroll = (props)=>{

    return (
        
        <div style={{height:"500px", overflowY:"scroll", border:"solid 5px black"}}>
            {props.children}
        </div>
            
            )
};

export default Scroll;