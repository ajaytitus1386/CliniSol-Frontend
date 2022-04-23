import moment from "moment";
import { Appointment } from "../../types/appointment";
import React from "react";

function AppointmentRow({ appointment }: { appointment: Appointment }) {
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

export default AppointmentRow;
