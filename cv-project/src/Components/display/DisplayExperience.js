import React from "react"

const DisplayExperience = ({experience}) => {
  return (
  <div className="displayExp">
    <div className="displayExpHeader">Experience</div>
    <div className="displayExpInfo">  
      <div className="displayExpDate">{experience.expStartDate} - {experience.expEndDate}</div>
      <div className="displayExpDetail">
        <div className="displayExpPosition">{experience.expPosition}</div>
        <div className="displayExpCompany">{experience.expCompany}</div>
        <div className="displayExpCity">{experience.expCity}</div>
      </div>
    </div>
  </div>
  )
}

export default DisplayExperience;