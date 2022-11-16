import React from "react";

const CVDisplay = ({ personal, experience, education}) => {
  return (
    <div className="display">
      <div className="displayPersonal">
        <div className="displayName">{personal.firstName} {personal.lastName}</div>
        <div className="displayAddress">{personal.address}</div>
        <div className="displayPhone">{personal.phoneNumber}</div>
        <div className="displayEmail">{personal.email}</div>
        <div className="displayStatement">{personal.statement}</div>
      </div>
      <div className="displayExperience">
        <div className="displayExpPosition">{experience.expPosition}</div>
        <div className="displayExpCompany">{experience.expCompany}</div>
        <div className="displayExpCity">{experience.expCity}</div>
        <div className="displayExpStart">{experience.expStartDate}</div>
        <div className="displayExpEnd">{experience.expEndDate}</div>
      </div>
      <div className="displayEducation">
        <div className="displayEdInstitution">{education.edInstitution}</div>
        <div className="displayEdCity">{education.edCity}</div>
        <div className="displayEdQualification">{education.edQualification}</div>
        <div className="displayEdTitle">{education.edTitle}</div>
        <div className="displayEdStart">{education.edStartDate}</div>
        <div className="displayEdEnd">{education.edEndDate}</div>
      </div>
</div>
  )
}

export default CVDisplay;