import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Birthday = () => {
  const [day, setDay] = useState("");

  const [month, setMonth] = useState("");

  const [year, setYear] = useState("");

  const months = [
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
    "December",
  ];

   const allDays = () => {
    const options = [];
    for (let i = 1; i <= 31; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const allYears = () => {
    const options = [];
    for (let i = 1995; i <= 2005; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const handleSubmit = () => {
    try {
      console.log(day, "day ==>");
      console.log(month, "month ==>");
      console.log(year, "year ==>");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="justify-content-center align-items-center">
      <div
        className="container  card p-4 shadow mt-5"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h4 className="text-center mb-4">Add Your Birthday</h4>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Day</label>
            <select className="form-select" value={day}
              onChange={(e) => setDay(e.target.value)}>
                <option value="">Select Day</option>
                {allDays()}
            </select>
          </div>

          <div className="col-md-4  mb-3">
            <label className="form-label">Month</label>
            <select
              className="form-select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}>
              <option value="">Select Month</option>
              {months.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>

          </div>

          <div className="col-md-4  mb-4">
            <label className="form-label">Year</label>
             <select className="form-select" value={year}
              onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                {allYears()}
            </select>
          </div>
        </div>
        <Link to="/home"><button className="btn btn-primary submitbtn" onClick={handleSubmit}>
          Submit
        </button></Link>
      </div>
    </div>
  );
};

export default Birthday;