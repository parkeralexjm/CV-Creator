import React, { Component } from "react";

const Experience = ({ experience, handleExperience}) => {  
    return (
    <div className="experience">
      <div className="sectionTitle">
        Experience
      </div>
      <input
      name="expPosition"
      placeholder="Position"
      value={experience.expPosition}
      onChange={handleExperience}
      />
      <input
      name="expCompany"
      placeholder="Company"
      value={experience.expCompany}
      onChange={handleExperience}
      />
      <input
      name="expCity"
      placeholder="City"
      value={experience.expCity}
      onChange={handleExperience}
      />
      <input
      name="expStartDate"
      placeholder="Start date"
      value={experience.expStartDate}
      onChange={handleExperience}
      />
      <input
      name="expEndDate"
      placeholder="End date"
      value={experience.expEndDate}
      onChange={handleExperience}
      />
      <button
      className="expRemoveExperience"
      name="Remove"
      >Remove</button>
      <button
      className="expAddExperience"
      name="Add"
      >Add</button>
    </div>
    )
  }

export default Experience;