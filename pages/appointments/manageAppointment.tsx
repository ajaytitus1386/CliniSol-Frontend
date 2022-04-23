import React from "react";
import AppointmentsTable from "../../components/appointment/AppointmentsTable";
import CreateAppointment from "../../components/appointment/CreateAppointment";

const Appointment = () => {
  return (
    <div className="container">
      <CreateAppointment />

      <AppointmentsTable />
    </div>
  );
};

export default Appointment;
