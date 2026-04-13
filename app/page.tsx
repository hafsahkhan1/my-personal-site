'use client'
import Menu from "./components/menu"
import React from 'react'
import { useMediaQuery } from 'react-responsive';


export default function Home() {
  const isDark = useMediaQuery({ query: '(prefers-color-scheme: dark)' });
  return (
    <div style={{}}>
      <div style={{margin: "30px"}}>
        <Menu/>
        <div // style={{backgroundImage: isDark ? `url("/backgrounds/dark/Group 25.png")` : `url("/backgrounds/light/Group 25.png")`,
            // backgroundPosition: '50% 75%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}
            >
          <div style={{display: "flex", flex: "row", justifyContent: "space-between", margin:"30px"}}>
            <img src="homePage/angelWings.jpeg"/>
            <div style={{alignItems: "center", textAlign: "right"}}>
              <h1 style={{ fontSize: '315px', marginTop: "-70px", marginBottom: "110px"}}>hello.</h1>
              <p style={{ fontSize: '50px', marginTop: "0px", marginBottom: "-10px"}}>Welcome to my personal site!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
