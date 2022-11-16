import React from "react";

const emptyCV = {
  personal: {
  firstName: '',
  lastName: '',
  personalTitle: '',
  address: '',
  phoneNumber: '',
  email: '',
  statement: '',
  },
  experience: {
  expPosition: '',
  expCompany: '',
  expCity: '',
  expStartDate: '',
  expEndDate: '',
  },
  education: {
  edInstitution: '',
  edCity: '',
  edQualification: '',
  edTitle: '',
  edStartDate: '',
  edEndDate: '',
  }
};

const exampleCV = {
  personal: {
  firstName: 'John',
  lastName: 'Doe',
  personalTitle: 'Mr',
  address: 'Example address, town, postcode',
  phoneNumber: '01000000000',
  email: 'something@somethingelse.com',
  statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  experience: {
  expPosition: 'Job Position 1',
  expCompany: 'Job Company 1',
  expCity: 'Job City 1',
  expStartDate: '01/01/20',
  expEndDate: '01/01/21',
  },
  education: {
  edInstitution: 'University',
  edCity: 'Education City',
  edQualification: 'Qualification',
  edTitle: 'Degree',
  edStartDate: '01/01/12',
  edEndDate: '01/01/15',
  }
}

export { emptyCV, exampleCV } ;