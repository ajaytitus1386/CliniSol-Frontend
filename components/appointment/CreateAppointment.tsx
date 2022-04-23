import React, { useState } from "react";

const CreateAppointment = () => {
  const [doctorName, setDoctorName] = useState("No Doctor Selected");
  const [patientName, setPatientName] = useState("No Patient Selected");

  let doctorID = "";
  let patientID = "";
  let startTime = Date.now();
  // In Mins
  let duration = 0;

  //TODO: Functions
  function findDoctor(doctorID: String) {}

  function findPatient(patientID: String) {}

  function submitAppointment() {}

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">
        Schedule New Appointment
      </h1>
      {/* Doctor Selection */}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Doctor ID</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type={"text"}
                placeholder="Doctor ID"
                required
                onChange={(field) => {
                  doctorID = field.target.value;
                }}
              ></input>
            </div>
            <div className="control">
              <button className="button is-info">Find</button>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Doctor Name</label>
        </div>
        <div className="field-body">
          <div className="field ">
            <div className="control">
              <button className="button is-static">{doctorName}</button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Doctor Selection  */}

      {/* Patient Selection */}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Patient ID</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type={"text"}
                placeholder="Patient ID"
                required
                onChange={(field) => {
                  patientID = field.target.value;
                }}
              ></input>
            </div>
            <div className="control">
              <button className="button is-info">Find</button>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Patient Name</label>
        </div>
        <div className="field-body">
          <div className="field ">
            <div className="control">
              <button className="button is-static">{patientName}</button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Patient Selection */}

      {/* Start Time Picker */}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Start Time</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <input
                type={"datetime-local"}
                className="dob-picker"
                onChange={(field) => {
                  startTime = field.target.valueAsNumber;
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/* Duration */}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Duration</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow has-addons">
            <div className="control">
              <input
                type={"number"}
                className="dob-picker"
                onChange={(field) => {
                  duration = field.target.valueAsNumber;
                }}
              ></input>
            </div>
            <div className="control">
              <button className="button is-static">In Minutes</button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                className="button is-primary has-text-weight-bold"
                onClick={() => submitAppointment()}
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          background: #edf1f5;
          padding: 2rem;
          border-radius: 1rem;
        }

        .dob-picker {
          height: 2.5rem;
          box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
          max-width: 100%;
          width: 100%;
          background-color: white;
          border-color: #dbdbdb;
          border-radius: 4px;
          color: #363636;
          border: 1px solid transparent;
        }

        .navbar-start .navbar-item p {
          width: 640px;
        }
      `}</style>
    </div>
  );
};

export default CreateAppointment;
