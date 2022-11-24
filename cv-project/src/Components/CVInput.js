import React, { Component } from "react";
import Education from "./inputs/Education";
import Experience from "./inputs/Experience";
import Personal from "./inputs/Personal";
import { emptyCV, exampleCV } from "./Utilities";
import CVDisplay from "./CVDisplay";

class CVInput extends Component {
  constructor(props) {
    super(props);
    this.state = emptyCV;
    this.handleReset = this.handleReset.bind(this)
    this.handleExample = this.handleExample.bind(this)
  };

  handleReset() {  
    this.setState(emptyCV);
  }

  handleExample() {
    this.setState(exampleCV)
  }

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


  
  render() {
    const personal = this.state.personal;
    const experience = this.state.experience;
    const education = this.state.education;

    return (
      <div className="content">
        <div className="cvInput">
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
          <button onClick={this.handleReset} id="reset">
            Reset
          </button>
          <button onClick={this.handleExample} id="example">
            Example CV
          </button>
        </div>
        <div className="cvOutput">
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