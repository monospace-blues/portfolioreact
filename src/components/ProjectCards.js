import React from "react";

function ProjectCard (props) {

  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.repo}>Repo </a>
      <a href={props.deployedPage}>Deployed Page</a>
      <p></p>
    </div>
  )
}

export default ProjectCard;