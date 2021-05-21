import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Contact me with any questions!</p>
      <div className="content">
        <ul>
          <address>
            <strong>Jennifer Kelly</strong>
            <p>New Jersey, US</p>
          </address>
          <hr />
          <li>
            <strong>Phone: </strong> 856-404-1413
          </li>
          <li>
            <strong>Email: </strong> <a href="mailto:#">jenLkelly@gmail.com</a>
          </li>
          <li>
            <strong>GitHub: </strong>{" "}
            <a href="https://github.com/jkelly101" target="_blank" rel="noreferrer">jkelly101</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
