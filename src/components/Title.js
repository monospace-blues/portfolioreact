import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Pdf from '../Resume.pdf';
function Title () {
  return (
    <div>
    <Jumbotron>
      <h3 className="display-4">Christian Gonzalez</h3>
      <hr className="my-4"/>
      <p></p>
      <a href = {Pdf} target = "_blank">Download Resume<br/></a>
      <a href="https://github.com/tiempoAutomata">Github<br/></a>
      <a href="https://www.linkedin.com/in/christian-gonzalez-05628519b/">Linkedin<br/></a>

      <a href="christian.gonzalez.2633@gmail.com">christian.gonzalez.2633@gmail.com</a>
    </Jumbotron>
    </div>

  )
}

export default Title; 