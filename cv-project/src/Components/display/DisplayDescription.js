import React from "react"

const DisplayDescription = ({personal}) => {
  return (
    <div className="displayDescription">
      <div className="displayDescriptionHeader">Description</div>
      <div className="displayDescriptionDetail">{personal.statement}</div>
    </div>
  )
}

export default DisplayDescription