import React from "react";
import Header from "./display/Header"
import Sidebar from "./display/Sidebar"
import DisplayExperience from "./display/DisplayExperience"
import DisplayEducation from "./display/DisplayEducation"

const CVDisplay = ({ personal, experience, education}) => {
  return (
    <div className="display">
      <Header personal={personal}/>
      <Sidebar personal={personal}/>
      <div className="displayContent">
        <div className="displayStatement">{personal.statement}</div>
        <DisplayExperience experience={experience}/>
        <DisplayEducation education={education}/>
      </div>
</div>
  )
}

export default CVDisplay;