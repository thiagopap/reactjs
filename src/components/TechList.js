import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "React JS", "React Native"]
  };

  render() {
    console.log(this.state.techs);
    return (
      <>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input type="text" />
      </>
    );
  }
}

export default TechList;
