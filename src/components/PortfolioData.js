import React from 'react';
// Components
import ProjectCards from './ProjectCards';

// portfolio data
import pfData from './PortfolioData.json';

function PortfolioData () {

  

  return (
    <div>
      <h2>Projects and Homework</h2>

      {pfData.map((data, index) => (
        <ProjectCards 
          title={data.title}
          description={data.description}
          repo={data.repo}
          deployedPage={data.deployedPage}
        />
      ))}
            {/* <h3>Songwriters Lament</h3>
            <p>My second project. Working and figuring out passport for login information, we also made an application for saving lyrics for each user.</p>
            <a href="https://github.com/schoess/Songwriters_Lament">Repo</a>
            <a href="https://project-2-schoess.herokuapp.com/">Deployed Page</a>
            <p></p>

            <h3>Employee Management Team</h3>
            <p>My third project. Building a website to handle employee information and keeping track of documents of those employees. A nice challenge for my team who built it with no knowledge of AWS and Chat implementation.</p>
            <a href="https://github.com/jonafi/emt">Repo</a>
            <a href="https://team-c2c-emt.herokuapp.com/">Deployed Page</a>
            <p></p>

            <h3>Object Oriented Programming</h3>
            <p></p>
            <a href="https://github.com/tiempoAutomata/HWOOPandTDD">Repo </a>
            <a href="">Deployed Page</a>
            <p></p>

            <h3>Weather API</h3>
            <p></p>
            <a href="https://github.com/tiempoAutomata/HWWeatherAPI">Repo </a>
            <a href="https://tiempoautomata.github.io/HWWeatherAPI">Deployed Page</a>
            <p></p>

            <h3>Password Generator</h3>
            <p></p>
            <a href="https://github.com/tiempoAutomata/HWPasswordGenerator">Repo </a>
            <a href="https://tiempoautomata.github.io/HWPasswordGenerator/">Deployed Page</a>
            <p></p>

            <h3>Note Taker</h3>
            <p></p>
            <a href="https://github.com/tiempoAutomata/HWNoteTaker">Repo </a>
            <a href="https://aqueous-woodland-55844.herokuapp.com/">Deployed Page</a>
            <p></p> */}
    </div>
  )
}

export default PortfolioData;