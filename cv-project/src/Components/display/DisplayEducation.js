import React from "react"

const DisplayEducation = ({education}) => {
  return (
    <div className="displayEd">
      <div className="displayEdHeader">Education</div>
      <div className="displayEdInfo">
        <div className="displayEdDate">{education.edStartDate} - {education.edEndDate}</div>
        <div className="displayEdDetail">
          <div className="displayEdInstitution">{education.edInstitution}</div>
          <div className="displayEdCity">{education.edCity}</div>
          <div className="displayEdQualification">{education.edQualification}</div>
          <div className="displayEdTitle">{education.edTitle}</div>
        </div>
      </div>
    </div>
  )
}

export default DisplayEducation