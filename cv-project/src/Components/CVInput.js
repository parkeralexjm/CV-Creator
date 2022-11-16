import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import { emptyCV, exampleCV } from "./Utilities";
import CVDisplay from "./CVDisplay";

class CVInput extends Component {
  constructor(props) {
    super(props);
    this.state = exampleCV;
  };

  handlePersonal = (event) => {
    const { name, value } = event.target
    
    this.setState(prevState => ({
      personal: {
        ...prevState.personal,
        [name]: value
      }
    }))
  }

  handleExperience = (event) => {
    const { name, value } = event.target
    
    this.setState(prevState => ({
      experience: {
        ...prevState.experience,
        [name]: value
      }
    }))
  }

  handleEducation = (event) => {
    const { name, value } = event.target
    
    this.setState(prevState => ({
      education: {
        ...prevState.education,
        [name]: value
      }
    }))
  }

  handleReset = (event) => {
    this.setState(emptyCV);
  }
  
  render() {
    const personal = this.state.personal;
    const experience = this.state.experience;
    const education = this.state.education;
    return (
      <div>
        <div className="content">
          <Personal 
            handlePersonal={this.handlePersonal}
            personal={personal}
          />
          <Experience 
            handleExperience={this.handleExperience}
            experience={experience}
          />
          <Education 
            handleEducation={this.handleEducation}
            education={education}
          />
        </div>
        <div className="output">
          <CVDisplay
            personal={personal}
            experience={experience}
            education={education}
          />
        </div>
      </div>
    )
  }
}

export default CVInput