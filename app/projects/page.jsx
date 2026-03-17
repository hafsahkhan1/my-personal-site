import React from 'react'
import Menu from '../components/menu.jsx'
import ActiveLink from '../components/activeLink.tsx'

// should probably turn into a ts file and map over

const projects = () => {
  return (
    <div style={{margin: "30px"}}>
      <Menu/>
      <h3>projects.</h3>
      <div style={{marginBottom: "50px"}}>
        <h5 style={{marginBottom: "0px"}}>WiCS Wired: Dev Project Spring 2026 (Personal Website)</h5>
        <p style={{whiteSpace: "pre"}}><b>Dev Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/hafsahkhan1/my-personal-site"/>    |    UIC    |    <i>Chicago, IL</i></p>
        <p>
          Current Project!
        </p>
        <p>
          As part of the spring semester WiCS dev project, I, along with a group of peers, have spent the
          semester designing, developing, and deploying personal websites. Along the way, we've learned the
          basics of front-end web development and explored React.js, Tailwind CSS, and HTML. Special thanks
          to dev project leads Zeel Patel and Flori Che, we couldn't have done it without you!
        </p>
        <p>
          
        </p>
      </div>
      <div style={{marginBottom: "50px"}}>
        <h5 style={{marginBottom: "0px"}}>SparkHacks 2026: Corporate Ladder</h5>
        <p style={{whiteSpace: "pre"}}><b>Hackathon Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/ToppiTheThinker/spark-hacks-2026"/>    |    UIC    |    <i>Chicago, IL</i></p>
        <p>
          SparkHacks is definitely my favorite hackathon (I'm only a little biased!), and this was proven to be
          true once again at the 2026 iteration of this event. This time, I worked with teammates I had worked
          with previously, as well as teammates I hadn't worked with before, which made for a fun experience.
        </p>
        <p>
          This year's hackathon was cinema-themed, and as a result, we decided to build a game that focused on
          storybuilding, rather than all the technical aspects of game development. Specifically, we drew
          inspiration from other web games that are relatively short but attempt to make a point to the player,
          which hopefully makes them think or sticks with them long after the end of the game. And, of course,
          we tried to center our concept around a topic that is relatively current without being too controversial.
          Specifically, we decided to explore AI usage and its complexity as a tool!
        </p>
        <p>
          In the game, which was built as a single website using React and NextJS, and styled with Tailwind CSS,
          the user plays as an unnamed corporate worker who has just gained employment at a corporation that provides
          workers with an AI assistant to work on tasks more efficiently. But the AI isn't always reliable, which
          can lead to consequences for the player, creating a dilemma between whether it's worth it to rely on a
          tool that may not complete the task properly, for the sake of speeding through it. The player can choose
          whether or not they want to use the AI's help, which influences how the game ends. As part of our focus
          on the storytelling of the game, we decided to write out and plan all of the possible decisions the user
          could make throughout our game, and the various endings that would come about based on the decisions they
          made. Although we weren't able to implement all of the endings or user paths that we had planned, we
          tried to reflect the vast spectrum of decisions that could be made to impact the user's outcome, moving
          away from the idea that the AI was "good" or "bad", but rather, that it was a tool, and the user's decisions
          on how to use it ultimately defined their ending.
        </p>
      </div>

      <div style={{marginBottom: "50px"}}>
        <h5 style={{marginBottom: "0px"}}>UncommonHacks 2025: Climate Change Warriors</h5>
        <p style={{whiteSpace: "pre"}}><b>Hackathon Participant</b>    |    <ActiveLink linkText={"Github Repo"} linkSrc="https://github.com/abyssaldragonz/UncommonHacks2025-ClimateWarriors"/>    |    <ActiveLink linkText={"Play Here!"} linkSrc="https://play.unity.com/en/games/e4f3e200-e539-42d9-a0c1-f05f939b6fda/webgl-builds"/>    |    UChicago    |    <i>Chicago, IL</i></p>
        <p>
          UncommonHacks was an interesting experience, mostly because all of the members of my team were totally
          new to the tool that we would be using to build our project, which was a game! The theme of this hackathon
          was retro gaming, so we decided to make a game ourselves. This project was implemented using the Unity
          game engine, and written using C#. Although there was a pretty steep learning curve at first, we eventually
          figured out how to implement the basic features we needed to really make our game, and gradually added
          other stylistic and extra features.
        </p>
        <p>
          Throughout the design process and actually developing the game, we really wanted to focus on telling a
          story through the game that we were creating. We especially wanted to make the concept of the game
          something that would make the player think, and something that would potentially be relevant to the real
          world. As a result, we decided to build the storyline of the game as a world where you, as the player, get
          to play as one of the four elements of nature, fighting against climate change. That being said, we didn't
          want the actual gameplay experience to become overrun by the story we were telling, or become too "preachy".
          So, in the end, we ended up with a climate-change themed platformer game.
        </p>
        <p>
          Although it was pretty daunting (to me at least) to try something completely new and without much structure
          at a hackathon, I realized that the hackathon environment was perfect for trying out some new, totally random
          technology and seeing how you fare. Of course there were stakes, namely winning the competition or not,
          but at the end of the day, my team and I were able to explore a cool new technology that we hadn't previously
          used. As a result, we were also able to learn a lot over the course of just a single weekend, by jumping
          straight into development. The experience proved to be extremely valuable and honestly made me more open
          towards just jumping into new skills or frameworks that interest me, because at the end of the day,
          the only way to really learn something in this field is to practice it.
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