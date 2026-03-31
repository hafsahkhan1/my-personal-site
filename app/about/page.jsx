import React from 'react'
import Menu from '../components/menu.jsx'
import ActiveLink from '../components/activeLink.tsx'

const about = () => {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <h3>about me.</h3>
      <div style={{display: "flex", flex: "row", alignItems:"center"}}>
        <div>
          <h5 style={{marginBottom: "64px"}}>Hi! My name is Hafsah.</h5>
          <p>
            I am currently a computer science student at the University of Illinois Chicago, with a minor in finance.
            I will be graduating in May of 2027. I am also an Honors College student!
          </p>
          <p>
            I first began my journey into the world of computer science and technology when I discovered the programming
            education site <i>Scratch</i> in third grade, and ever since then, I was hooked. I would spend time both
            playing games that other users had created as well as attempting to design my own small programs. I eventually 
            went on to join my middle school and high school's robotics team, where I competed in VEX Robotics competitions
            within a group of peers, working together to design and develop robots with the aim of accomplishing tasks to
            win matches, which further cemented my resolve to work with and develop new and exciting technology when I grew up. 
          </p>
          <p>
            Since then, I've gained many technical skills and experiences through my time at UIC, as well as independent
            exploration. I've learned essentials vital to building a strong foundation in this field, which were supplemented
            through projects, and built upon these concepts through creative and unique projects. Although I sometimes find
            myself unsure of which niche I would like to apply myself to as a career in the future within the vast field of
            computer science, I'm open to exploring new and challenging topics. I'm especially interested in exploring the
            intersection of technology and other up-and-coming fields, and how technology both advances these fields and also
            makes them more accessible for all.
          </p>
          <p>
            I also really enjoy attending hackathons! Many of the projects I've worked on and really learned from were completed
            during hackathons. Although it can sometimes be daunting to jump into a project where you're planning and
            implementing everything under a short deadline, I find hackathons to be a great experience for experimenting and
            trying out new tools I wouldn't have otherwise used. Now that I have more skills, I also want to start building
            more complete and more complex projects rather than simply trying to create a finished product.
          </p>
        </div>
        <img src="aboutPage/archery.jpeg" style={{margin:"30px"}}/>
        
      </div>
    <div>
          <p>
            Outside of classes, I'm involved with UIC's Lunabotics' systems engineering group of the Chicago Engineering
            Design Team as well as the UIC chapter of Women in Computer Science (with whom I was able to develop this site!),
            and suprisingly UIC's archery club. There are plenty of other student orgs here at UIC I enjoy dropping in to
            check out from time to time, but I would say these ones are the orgs that I'm most consistent with.
          </p>
          
          <p style={{marginBottom: "50px"}}>
            Outside of school entirely, I love to read and crochet (but not at the same time). I enjoy binge-watching dramatic TV
            shows and eating ice cream sandwiches (sometimes at the same time). Sometimes I take <a href="../pictures">pictures</a>.
            I especially love trying out new foods and cuisines whenever I can, and exploring new places with friends and family.
          </p>
        </div>
      <div style={{display: "flex", flex: "row", justifyContent: "space-between", alignItems:"center"}}>
        <img src="aboutPage/spaceAppsSelfie.jpeg"/>
        <div>
          <h5>Contact Me!</h5>
          <div style={{display: "flex", flex: "row", gap: "18px"}}>
            <ActiveLink
              linkText={"LinkedIn"}
              linkSrc={"https://www.linkedin.com/in/hafsah-k-897721329/"}
              isMenu={false}
            />
            <ActiveLink
              linkText={"GitHub"}
              linkSrc={"https://github.com/hafsahkhan1"}
              isMenu={false}
            />
            <ActiveLink
              linkText={"Email"}
              linkSrc={"mailto:hafsah12khan@gmail.com"}
              isMenu={false}
            />
          </div>
        </div>
        <img src="aboutPage/beanselfie.jpg"/>
      </div>
    </div>
  )
}

export default about