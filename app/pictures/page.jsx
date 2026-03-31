import React from 'react'
import Menu from '../components/menu.jsx'
import ImageHover from '../components/captionedImg.jsx'
import { ImageSet } from "./images.ts"

const pictures = () => {
  return (
    <div style={{margin: "30px"}}>
        <Menu style={{marginBottom: "30px"}}/>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px"}}>
          {ImageSet.map((pic) => (
            <ImageHover 
              key={pic.id}
              src={pic.src}
              text={pic.text}
            />
          ))}
        </div>
    </div>
  )
};

export default pictures