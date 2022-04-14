import React from "react";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function Month() {
  return <h5 className="monthTitle">{month[new Date().getMonth()]}</h5>;
}

export default Month;
