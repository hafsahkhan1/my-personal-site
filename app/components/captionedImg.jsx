'use client'
import React from 'react';
import { useState } from "react";

const ImageHover = ({ src, text }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className="image-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{position: "relative", cursor:"pointer", justifySelf: "start"}}
        > 
            <img src={src} className="image" style={{display:"block", width: "100%"}}/>
      
            <div style={{visibility: hover ? "visible" : "hidden", position:"absolute", 
                display: "flex", justifyContent:"center", alignItems:"center", backgroundColor: "rgba(0, 0, 0, 0.6)",
                top:"0", bottom:"0", left:"0", right:"0"}}>
                <p style={{margin:"50px", textAlign:"center", color:"white"}}>{text}</p>
            </div>
        </div>
    );
};

export default ImageHover;