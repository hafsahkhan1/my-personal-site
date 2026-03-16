import React from 'react'
import Menu from '../components/menu.jsx'

const pictures = () => {
  return (
    <div style={{margin: "30px"}}>
        <Menu/>
        <div style={{alignItems: 'center', justifyItems: 'center', gap: "20px"}}>
          <figure>
              <img src = "sunset59.jpeg"/>
              <figcaption>Here's a picture I took at the train station I commute from!</figcaption>
          </figure>
          {/* maybe want to make pictures hoverable to show caption? prevent resizing issue */}
        </div>
    </div>
  )
}

export default pictures