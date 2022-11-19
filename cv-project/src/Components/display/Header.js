import React from "react";

const Header = ({personal}) => {
  return (
    <div className="personalHeader">
      <div className="displayName">{personal.firstName} {personal.lastName}</div>
    </div>
  )
}

export default Header