import moment from "moment";
import React, { useState } from "react";
import { createAppointment } from "../../services/appointment/createAppointment";
import { getDoctorById } from "../../services/doctor/getDoctorById";
import { getPatientById } from "../../services/patient/getPatientById";

const CreateAppointment = () => {
  const [doctorName, setDoctorName] = useState("No Doctor Selected");
  const [isDoctorFound, setIsDoctorFound] = useState(false);
  const [patientName, setPatientName] = useState("No Patient Selected");
  const [isPatientFound, setIsPatientFound] = useState(false);
  const [notifications, setNotifications] = useState<String[]>([]);

  let doctorID = "";
  let patientID = "";
  let startTime = Date.now();
  // In Mins
  let duration = 0;

  async function findDoctor() {
    let doctor = await getDoctorById(Number(doctorID));
    if (doctor != undefined) {
      setDoctorName(doctor.name);
      setIsDoctorFound(true);
    } else {
      setDoctorName("Doctor Not Found");
      setIsDoctorFound(false);
    }
  }

  async function findPatient() {
    let patient = await getPatientById(Number(patientID));
    if (patient != undefined) {
      setPatientName(patient.name);
      setIsPatientFound(true);
    } else {
      setPatientName("Patient Not Found");
      setIsPatientFound(false);
    }
  }

  async function submitAppointment() {
    const durationInSec = String(duration * 60);
    const startTimeInUTC = moment(startTime).format();
    await createAppointment({
      start: startTimeInUTC,
      duration_s: durationInSec,
      doctor_id: Number(doctorID),
      patient_id: Number(patientID),
    });
    setNotifications([...notifications, moment(Date.now()).format("hh:MM:ss")]);
  }

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">
        Schedule New Appointment
      </h1>

      <div className="columns ml-6 mr-4">
        <div className="column is-half ">
          {/* Doctor Selection */}
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Doctor ID</label>
            </div>
            <div className="field-body">
              <div className="field has-addons">
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type={"text"}
                    placeholder="Doctor ID"
                    required
                    onChange={(field) => {
                      doctorID = field.target.value;
                    }}
                  ></input>
                  <span className="icon is-small is-right">
                    {isDoctorFound ? (
                      <span className="material-icons has-text-primary">
                        done
                      </span>
                    ) : (
                      <span className="material-icons has-text-danger">
                        close
                      </span>
                    )}
                  </span>
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => findDoctor()}
                  >
                    Find
                  </button>
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
                <div className="control has-icons-right">
                  <input
                    className="input"
                    type={"text"}
                    placeholder="Patient ID"
                    required
                    onChange={(field) => {
                      patientID = field.target.value;
                    }}
                  ></input>
                  <span className="icon is-small is-right">
                    {isPatientFound ? (
                      <span className="material-icons has-text-primary">
                        done
                      </span>
                    ) : (
                      <span className="material-icons has-text-danger">
                        close
                      </span>
                    )}
                  </span>
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => findPatient()}
                  >
                    Find
                  </button>
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
        </div>
        <div className="column notif-column">
          {notifications.map((notif) => {
            let isActive = true;
            setTimeout(() => {
              // Remove Latest notif after set time
              setNotifications([...notifications].slice(0, -1));
            }, 3000);
            return (
              <div
                className={`notification is-warning is-light notif-transition ${
                  isActive ? "active" : ""
                }`}
              >
                <div className="heading">{notif}</div>
                Created a New Appointment scheduled on{" "}
                <strong>
                  {moment(startTime).format("dddd MM YY hh:MM a")}
                </strong>
              </div>
            );
          })}
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
