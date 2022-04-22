import moment from "moment";
import React, { useState } from "react";
import { Appointment } from "../../types/appointment";

function AppointmentsTable() {
  const [appointmentStartNum, setAppointmentStartNum] = useState(1);
  const appointmentsPerPageCount = 8;
  let appointmentsEndNum = appointmentStartNum + appointmentsPerPageCount - 1;
  let pageNum = Math.ceil(appointmentStartNum / appointmentsPerPageCount);
  // To go up or down pages, alter appointmentStartNum by the PerPageCount respectively
  function pageUp() {
    let newStartNum = appointmentStartNum + appointmentsPerPageCount;
    if (newStartNum < appointments.length) setAppointmentStartNum(newStartNum);
  }

  function pageDown() {
    let newStartNum = appointmentStartNum - appointmentsPerPageCount;
    if (newStartNum > 0) setAppointmentStartNum(newStartNum);
  }

  const appointments: Appointment[] = [
    {
      id: 1,
      startTime: Date.now(),
      doctor: {
        id: 1,
        address: "Rich Road",
        altPhone: "0123456789",
        name: "Smith John",
        phone: "1234567890",
      },
      patient: {
        id: 2,
        name: "Mike Hunt",
        dob: Date.parse("01-01-1995"),
        sex: "Female",
        phone: "0123456789",
        altPhone: "1234567890",
        height: 140,
        weight: 77,
        bp: "113/80 mm Hg",
        address: "Tough Town",
      },
      duration: 1,
    },
    {
      id: 2,
      startTime: Date.now(),
      doctor: {
        id: 1,
        address: "Rich Road",
        altPhone: "0123456789",
        name: "Smith John",
        phone: "1234567890",
      },
      patient: {
        id: 3,
        name: "Candice D",
        dob: Date.parse("01-01-1995"),
        sex: "Female",
        phone: "0123456789",
        altPhone: "1234567890",
        height: 140,
        weight: 77,
        bp: "113/80 mm Hg",
        address: "Tough Town",
      },
      duration: 1,
    },
  ];
  return (
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column">
          <h1 className="title is-3">
            Current Appointments ({appointments.length})
          </h1>
          <div className="control has-icons-right">
            <input
              className="input is-primary"
              type={"text"}
              placeholder={"Search Appointments"}
            />
            <span className="icon is-right">
              <span className="material-icons">search</span>
            </span>
          </div>
        </div>
        <div className="column">
          <div className="is-pulled-right">
            <button className="button is-danger has-icons-left">
              <span className="icon is-right">
                <span className="material-icons">add</span>
              </span>
              <p>Add New Appointment</p>
            </button>
          </div>
        </div>
      </div>
      <div className="box mt-4 is-flex-direction-row">
        {/* Table Head */}
        <div className="columns">
          <div className="column has-text-weight-bold is-size-5">S.No</div>
          <div className="column has-text-weight-bold is-size-5">
            Patient Name
          </div>
          <div className="column has-text-weight-bold is-size-5">
            Patient ID
          </div>
          <div className="column has-text-weight-bold is-size-5">Date</div>
          <div className="column has-text-weight-bold is-size-5">Time</div>
          <div className="column has-text-weight-bold is-size-5">Duration</div>
        </div>

        <div className="divider"></div>

        {appointments.map((appointment) => {
          return AppointmentRow(appointment);
        })}
      </div>
      <div className="columns">
        <div className="column is-four-fifths heading">
          Showing {appointmentStartNum} to{" "}
          {appointmentsPerPageCount < appointments.length
            ? appointmentsEndNum
            : appointments.length}{" "}
          results of {appointments.length}
        </div>
        <div className="column">
          <div className="row">
            <span className="material-icons">chevron_left</span>
            <p className="heading">Page {pageNum}</p>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
          }
          .control {
            width: 65%;
          }

          .input {
            background-color: rgba(40, 51, 60, 0.1);
          }

          .box {
            border: 1px solid rgba(0, 0, 0, 0.25);
          }

          .divider {
            width: 100%;
            margin-right: 1rem;
            margin-bottom: 1rem;
            height: 1px;
            background: rgba(0, 0, 0, 0.15);
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
}

function AppointmentRow(appointment: Appointment) {
  const formattedDate = moment(appointment.startTime).format("MMM Do YYYY");
  const formattedTime = moment(appointment.startTime).format("h:MM a");
  return (
    <div className="columns">
      <div className="column">{appointment.id}</div>
      <div className="column">{appointment.patient.name}</div>
      <div className="column">{appointment.patient.id}</div>
      <div className="column">{formattedDate}</div>
      <div className="column">{formattedTime}</div>
      <div className="column">{appointment.duration}</div>
      <style jsx>
        {`
          .columns {
            border-bottom: rgba(0, 0, 0, 0.15) solid 1px;
          }
          .columns:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          .columns:nth-last-child(1) {
            border-bottom: none;
          }
        `}
      </style>
    </div>
  );
}

export default AppointmentsTable;
