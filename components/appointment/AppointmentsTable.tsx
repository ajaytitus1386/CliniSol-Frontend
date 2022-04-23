import moment from "moment";
import React, { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/appointment/getAllApointments";
import { getAppointmentsByDate } from "../../services/appointment/getAppointmentsByDate";
import { Appointment } from "../../types/appointment";
import AppointmentRow from "./AppointmentRow";

function AppointmentsTable() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
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

  async function fetchAppointmentsToday() {
    try {
      const response = await getAppointmentsByDate({
        date: moment(Date.now()).format(),
      });

      setAppointments(response);
    } catch (error) {}
  }

  async function fetchAllAppointments() {
    try {
      const response = await getAllAppointments();

      setAppointments(response);
    } catch (error) {}
  }

  useEffect(() => {
    fetchAllAppointments();
  }, []);

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
          return (
            <AppointmentRow key={appointment.id} appointment={appointment} />
          );
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

export default AppointmentsTable;
