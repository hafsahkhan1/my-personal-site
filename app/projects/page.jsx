import React from 'react'
import Menu from '../components/menu.jsx'
import ActiveLink from '../components/activeLink.tsx'

const projects = () => {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <h3>projects.</h3>
      <div style={{marginBottom: "50px"}}>
        <h5 style={{marginBottom: "0px"}}>SparkHacks 2026: Corporate Ladder</h5>
        <p style={{whiteSpace: "pre"}}><b>Hackathon Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/ToppiTheThinker/spark-hacks-2026"/>    |    UIC    |    <i>Chicago, IL</i></p>
        <p>
          wow description
        </p>
      </div>

      <div style={{marginBottom: "50px"}}>
        <h5 style={{marginBottom: "0px"}}>UncommonHacks 2025: Climate Change Warriors</h5>
        <p style={{whiteSpace: "pre"}}><b>Hackathon Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/abyssaldragonz/UncommonHacks2025-ClimateWarriors"/>    |    UChicago    |    <i>Chicago, IL</i></p>
        <p>
          UncommonHacks was an interesting experience, mostly because all of the members of my team were totally
          new to the tool that we would be using to build our project, which was a game! The theme of this hackathon
          was retro gaming, so we decided to make a game ourselves.
        </p>
      </div>

      <div style={{marginBottom: "30px"}}>
        <h5 style={{marginBottom: "0px"}}>SparkHacks 2025: Pod Thai</h5>
        <p style={{whiteSpace: "pre"}}><b>Hackathon Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/michelle-tanner/sparkhacks2025"/>    |    UIC    |    <i>Chicago, IL</i></p>
        <p>
          SparkHacks 2025 was an extremely fun experience for me, as it was my first hackathon after starting
          college. Initially, my friend and I, who were both freshmen, didn't have anyone else to work for the
          project, and were unsure who would accept two freshmen with little product experience to their team.
          But, as fate would have it, we ended up meeting a group of juniors who guided us through our first
          real hacakthon experience.
        </p>
        <p>
          At this hackathon, there were a number of different tracks to develop projects for and submit to. We
          decided to compete in the track that aimed at uplifting small businesses. Specfically, we wanted to
          help design the site for a local restaurant that we all loved. We had noticed that the site they used
          for their business was insecure and generally didn't follow good design principles, so we decided that
          for our project, we would redesign and modernize a website for their business. To do this, we used
          Astro.js, a powerful tool similar to React that helped us create a clean, intuitive, but effective
          site for the restaurant. In particular, we tried to emphasize the cultural values and community at the
          center of the restaurant throughout our design, ensuring that they were at the center of the project
          we were building.
        </p>
        <p>
          Although we didn't end up winning the hackathon, it proved to be an extremely valuable experience for
          me, mostly because I learned so much I would never have encountered in a class for years. Even though
          I didn't have all of the technical skills to be able to contribute signficantly to this project yet, I
          still was able to help with designing and other non-technical tasks throughout the event, while also
          learning a lot and enjoying myself. It proved to be a very memorable first hackathon experience!
        </p>
      </div>
    </div>
  )
}

export default projects