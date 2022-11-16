import React, { Component } from "react";

const Education = ({ education, handleEducation}) => {  

  return (
    <div className="education">
      <div className="sectionTitle">
        Education
      </div>
      <input
      name="edInstitution"
      placeholder="Institution"
      value={education.edInstitution}
      onChange={handleEducation}
      />
      <input
      name="edCity"
      placeholder="City"
      value={education.edCity}
      onChange={handleEducation}
      />
      <input
      name="edQualification"
      placeholder="Qualification type"
      value={education.edQualification}
      onChange={handleEducation}
      />
      <input
      name="edTitle"
      placeholder="Qualification title"
      value={education.edTitle}
      onChange={handleEducation}
      />
      <input
      name="edStartDate"
      placeholder="Start date"
      value={education.edStartDate}
      onChange={handleEducation}
      />
      <input
      name="edEndDate"
      placeholder="end date"
      value={education.edEndDate}
      onChange={handleEducation}
      />
      <button
      className="edRemoveExperience"
      name="Remove"
      >Remove</button>
      <button
      className="edAddExperience"
      name="Add"
      >Add</button>
    </div>
    )
  }

export default Education;