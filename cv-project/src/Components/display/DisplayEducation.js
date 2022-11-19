import React from "react"

const DisplayEducation = ({education}) => {
  return (
    <div className="displayEducation">
      <div className="displayEdInstitution">{education.edInstitution}</div>
      <div className="displayEdCity">{education.edCity}</div>
      <div className="displayEdQualification">{education.edQualification}</div>
      <div className="displayEdTitle">{education.edTitle}</div>
      <div className="displayEdStart">{education.edStartDate}</div>
      <div className="displayEdEnd">{education.edEndDate}</div>
    </div>
  )
}

export default DisplayEducation