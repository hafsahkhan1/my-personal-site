import React from 'react'
import Menu from '../components/menu.jsx'
import ActiveLink from '../components/activeLink.tsx'

const about = () => {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <h3>about me.</h3>
      <h5>Hi! My name is Hafsah.</h5>
      <p>
        I am currently a computer science student at the University of Illinois Chicago, with a minor in finance.
        I will be graduating in May of 2027.
      </p>
      <p>
        I first began my journey into the world of computer science and technology when I discovered the programming
        education site <i>Scratch</i> in third grade, and ever since then, I was hooked. I would spent time both
        playing games that other users had created as well as attempting to design my own small programs. I eventually 
        went on to join my middle school and high school's robotics team, where I competed in VEX Robotics competitions
        within a group of peers, working together to design and develop robots with the aim of accomplishing tasks to
        win matches, which further cemented my resolve to work with and develop new and exciting technology when I grew up. 
      </p>
      <p>
        Since then, I've gained many technical skills and experiences through my time at UIC, as well as independent
        exploration. Through courses like Data Structures and Machine Organization, I've learned essentials vital to
        building a strong foundation in this field, which were supplemented through projects, and other classes that
        built upon these concepts, such as Programming Language Design and Software Design, through creative and
        unique projects. Although I sometimes find myself unsure of which niche I would like to apply myself to as
        a career in the future within the vast field of computer science, I'm open to exploring new and challenging
        topics. I'm especially interested in exploring the intersection of technology and other up-and-coming fields,
        and how technology both advances these fields and also makes them more accessible for all.
      </p>
      <p style={{marginBottom: "50px"}}>
        Outside of school, I love to read and crochet (but not at the same time). I enjoy binge-watching dramatic TV
        shows and eating ice cream sandwiches (sometimes at the same time). I'm involved with UIC's Lunabotics chapter
        of the Chicago Engineering Design Team as well as the UIC chapter of Women in Computer Science (with whom I was
        able to develop this site!), as well as UIC's archery club.
      </p>
      <div>
        <h5>Contact Me!</h5>
        <div style={{display: "flex", flex: "row", gap: "18px"}}>
          <ActiveLink
            linkText={"LinkedIn"}
            linkSrc={"https://www.linkedin.com/in/hafsah-k-897721329/"}
          />
          <ActiveLink
            linkText={"GitHub"}
            linkSrc={"https://github.com/hafsahkhan1"}
          />
          <ActiveLink
            linkText={"Email"}
            linkSrc={"mailto:hafsah12khan@gmail.com"}
          />
        </div>
      </div>
    </div>
  )
}

export default about