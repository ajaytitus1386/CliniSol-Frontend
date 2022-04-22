import React from "react";

const Patient = () => {
  const userName = "User";
  const notifications = "No New Notifications";

  return (
    <div className="container">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark">
        Welcome, {userName}
      </h1>
      <h2 className="is-size-6 is-grey-light">{notifications}</h2>
      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child">
              {/* Appointment Table */}
              <div className="card">
                <div className="card-content">
                  <h3 className="is-size-4 is-grey-dark has-text-weight-bold">
                    Appointments
                  </h3>
                  <div className="columns">
                    <div className="column">Patient Name</div>
                    <div className="column">Patient ID</div>
                    <div className="column">Date</div>
                    <div className="column">Reason</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-child">
              {/* Appointment Card */}
              <h3 className="is-size-6 is-grey-dark has-text-weight-bold">
                Current Appointments
              </h3>
              <div className="card is-4">
                <div className="card-content">
                  <div className="content">Acebutol 400mg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
