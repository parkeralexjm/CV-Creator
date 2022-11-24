import React from "react";
import Header from "./display/Header"
import Sidebar from "./display/Sidebar"
import DisplayExperience from "./display/DisplayExperience"
import DisplayEducation from "./display/DisplayEducation"
import DisplayDescription from "./display/DisplayDescription";

const CVDisplay = ({ personal, experience, education}) => {
  return (
    <div className="display">
      <Header personal={personal}/>
      <Sidebar personal={personal}/>
      <div className="displayContent">
        <DisplayDescription personal={personal}/>
        <DisplayExperience experience={experience}/>
        <DisplayEducation education={education}/>
      </div>
</div>
  )
}

export default CVDisplay;