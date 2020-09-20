import React from 'react';

function MyInfo() {
  // data about me
  const info = {
    description: 
    `Hello, my name is Christian Gonzalez and I have started to learn how to code with HTML, Node, React, Sequelize, MongoDB, and Express through the coding bootcamp at the University of Minnesota.
    
    Here you can see all the works I've done along witht the projects I've created`
  }

  return (
    <div>
      <p>
        {info.description}
      </p>
    </div>

  );
}

export default MyInfo; 