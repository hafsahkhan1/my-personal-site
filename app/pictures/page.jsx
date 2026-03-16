import React from 'react'
import Menu from '../components/menu.jsx'

const pictures = () => {
  return (
    <div>
        <Menu/>
        <div style={{alignItems: 'center', justifyItems: 'center'}}>
          <figure>
              <img src = "sunset59.jpeg"/>
              <figcaption>Here's a picture I took at the train station I commute from!</figcaption>
          </figure>
        </div>
    </div>
  )
}

export default pictures