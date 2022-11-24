import React from "react";

const Experience = ({ experience, handleExperience}) => {  
    return (
    <div className="experience">
      <div className="experienceInput">
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
      </div>
    </div>
    )
  }

export default Experience;