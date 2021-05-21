import React from "react";


function Projects(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Link:</strong> {props.gitHub}
          </li>
          <li>
            <strong>Web Link:</strong> {props.web}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
