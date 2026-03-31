'use client'

import { useState } from "react";
import '../globals.css'

interface ActiveLinkProps{
    linkText: String,
    linkSrc: string,
    isMenu: boolean;
}

export default function activeLink({linkText, linkSrc, isMenu}: ActiveLinkProps){
    const [hover, setHover] = useState(false);
    return(
        <a href={linkSrc}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{textDecoration: hover ? 'underline' : 'none', color: isMenu ? "var(--secondary)" : "var(--accent)"}}
        >{linkText}</a>
    );
}