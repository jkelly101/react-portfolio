import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import projects from "./projects.json";

class App extends Component {
  state = {
    projects: [...projects],
  };

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">
              Jen Kelly
            </a> */}
            </div>
          </nav>
          {this.state.projects.map((project) => (
            <Projects key={project.id} {...project} />
          ))}

          <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="#">
              My Links
            </a> */}
            </div>
          </nav>
        </div>
        <Footer />
      </Router>
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/projects" component={Projects} />
//         <Route path="/contact" component={Contact} />
//         {this.state.projects.map((project) => (
//           <Projects key={project.id} {...project} />
//         ))}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

export default App;
