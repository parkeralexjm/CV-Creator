import React, { Component } from "react";

const Personal = ({personal, handlePersonal}) => {  
  return (
    <div className="personal">
      <div className="sectionTitle">
        Personal Information
      </div>
      <input
      name="firstName"
      placeholder="First name"
      value={personal.firstName}
      onChange={handlePersonal}
      />
      <input
      name="lastName"
      placeholder="Last name"
      value={personal.lastName}
      onChange={handlePersonal}
      />
      <input
      name="personalTitle"
      placeholder="Title"
      value={personal.personalTitle}
      onChange={handlePersonal}
      />
      <input
      name="address"
      placeholder="Address"
      value={personal.address}
      onChange={handlePersonal}
      />
      <input
      name="phoneNumber"
      placeholder="Phone number"
      value={personal.phoneNumber}
      onChange={handlePersonal}
      />
      <input
      name="email"
      placeholder="Email"
      value={personal.email}
      onChange={handlePersonal}
      />
      <textarea
      name="statement"
      placeholder="Personal Statement"
      value={personal.statement}
      onChange={handlePersonal}
      />
    </div>
    )
  }

export default Personal;