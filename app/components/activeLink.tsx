'use client'

import { useState } from "react";

interface ActiveLinkProps{
    linkText: String,
    linkSrc: string;
}

export default function activeLink({linkText, linkSrc}: ActiveLinkProps){
    const [hover, setHover] = useState(false);
    return(
        <a href={linkSrc}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{textDecoration: hover ? 'underline' : 'none'}}
        >{linkText}</a>
    );
}