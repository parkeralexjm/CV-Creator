import React from "react"

const DisplayExperience = ({experience}) => {
  return (
  <div className="displayExperience">
    <div className="displayExpPosition">{experience.expPosition}</div>
    <div className="displayExpCompany">{experience.expCompany}</div>
    <div className="displayExpCity">{experience.expCity}</div>
    <div className="displayExpStart">{experience.expStartDate}</div>
    <div className="displayExpEnd">{experience.expEndDate}</div>
  </div>
  )
}

export default DisplayExperience;