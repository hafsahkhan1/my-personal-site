'use client'

import Link from "next/link";
import { useState } from "react";

export default function Menu (){
    const [hoverHome, setHoverHome] = useState(0);
    const [hoverExp, setHoverExp] = useState(0);
    const [hoverProj, setHoverProj] = useState(0);
    const [hoverAbout, setHoverAbout] = useState(0);
    const [hoverPics, setHoverPics] = useState(0);
    return (
        <header className="flex flex-row flex-grow">
            <a href="../"
                onMouseEnter={() => setHoverHome(true)}
                onMouseLeave={() => setHoverHome(false)}
                style={{textDecoration: hoverHome ? 'underline' : 'none'}}
            >HOME</a>
            <a href="/experience"
                onMouseEnter={() => setHoverExp(true)}
                onMouseLeave={() => setHoverExp(false)}
                style={{textDecoration: hoverExp ? 'underline' : 'none'}}
            >EXPERIENCE</a>
            <a href="/projects"
                onMouseEnter={() => setHoverProj(true)}
                onMouseLeave={() => setHoverProj(false)}
                style={{textDecoration: hoverProj ? 'underline' : 'none'}}
            >PROJECTS</a>
            <a href="/about"
                onMouseEnter={() => setHoverAbout(true)}
                onMouseLeave={() => setHoverAbout(false)}
                style={{textDecoration: hoverAbout ? 'underline' : 'none'}}
            >ABOUT ME</a>
            <a href="/pictures"
                onMouseEnter={() => setHoverPics(true)}
                onMouseLeave={() => setHoverPics(false)}
                style={{textDecoration: hoverPics ? 'underline' : 'none'}}
            >PICTURES</a>
      </header>
    );
}