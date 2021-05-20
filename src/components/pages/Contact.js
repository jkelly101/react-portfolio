import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "../Footer";

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Contact me with any questions!
      </p>
      <address>
        <strong>Jennifer Kelly</strong>
        <p>New Jersey, US</p>
      </address>
      <hr />
      <address>
        <abbr title="Phone">P: </abbr>
        (856) 404-1413
        <abbr title="Email">E: </abbr>
        <a href="mailto:#">jenLkelly@gmail.com</a>
      </address>
    </div>
  );
}

export default Contact;
