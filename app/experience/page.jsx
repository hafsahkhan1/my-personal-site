import React from 'react'
import Menu from '../components/menu.jsx'
import ActiveLink from '../components/activeLink.tsx'

const experience = () => {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <h3>experience.</h3>
      <div style={{display: "flex", flex: "row", justifyContent: "space-between"}}>
        <div>
          <h5 style={{marginBottom: "0px"}}>Robotics GUI Engineer Intern</h5>
          <p style={{whiteSpace: "pre"}}><b>Summer 2025</b>    |    UIC Robotics and Motion Laboratory    |    <i>Chicago, IL</i></p>
          <p>
            During this valuable internship experience, I worked with UIC's Robotics and Motion Laboratory,
            where I was tasked with further designing and implementing the GUI for a previously developed
            robotic simulation application. Specifically, I worked with improving the already existing GUI,
            to make it cleaner, as well as in implementing new features, such as a graphing window that
            allowed users to determine which robot data variables they would like to see graphed, and then
            the graphs themselves. This application was implemented in C and C++, using MuJoCo, an open-source
            physics engine, through which the robotics were rendered, and the OpenGL API, which was used in
            simulating the robots and the GUI.
          </p>
          <p>
            This was a challenging experience for me at first, because it was the first time I had ever
            worked with such a large codebase, and it took some time at the very beginning of the internship
            experience for me to first familiarize myself with the code, as well as the technical aspects of
            the robot simulation and related physics knowledged needed to put the whole thing together. That
            being said, I had a lot of support through the summer from the
            lab's <ActiveLink linkText={"leadership"} linkSrc="https://pab47.github.io/index.html" isMenu={false}/>,
            specifically Professor Pranav Bhounsule and Daniel Torres, without whom I couldn't have been successful.
          </p>
        </div>  
        <img src="expPage/keyboard.jpeg" style={{marginLeft:"30px"}}/>
      </div>
    </div>
  )
}

export default experience