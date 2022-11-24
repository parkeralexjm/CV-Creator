import React from "react"

const Sidebar = ({personal}) => {
  return (
    <div className="personalSidebar">
      <div className="displayAddress">{
      personal.address.split(',').map(function (address, index) {
        return <p key={index}>{address}</p>
      })
      }</div>
      <div className="displayPhone">{personal.phoneNumber}</div>
      <div className="displayEmail">{personal.email}</div>
    </div>
  )
}

export default Sidebar;