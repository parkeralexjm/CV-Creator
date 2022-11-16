import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class CVInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
      firstName: '',
      lastName: '',
      personalTitle: '',
      address: '',
      phoneNumber: '',
      email: '',
      statement: '',
      },
      experience: {
      expPosition: '',
      expCompany: '',
      expCity: '',
      expStartDate: '',
      expEndDate: '',
      },
      education: {
      edInstitution: '',
      edCity: '',
      edQualification: '',
      edTitle: '',
      edStartDate: '',
      edEndDate: '',
      }
    }
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
    )
  }
}

export default CVInput