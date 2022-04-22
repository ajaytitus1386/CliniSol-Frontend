import React from "react";
import Link from 'next/link';

const Dashboard = () => {
  const userName = "Nishal";
  const notifications = "No New Notifications";

  return (
    <div className="container">
      <div className="dashboard-overview">

        <h1 className="is-size-2 has-text-weight-bold is-grey-dark">
          Dashboard for {userName}
          <h2 className="is-size-6 is-grey-light">A quick overview of your healthcare system</h2>
          <h2 className="notif-text is-size-6 is-grey-light">{notifications}</h2>
        </h1>

        <div className="overview-cards">
          <div className="card">
            <div className="card-content">
              <p className="title">
                <h1 className="overview-card-icon">
                  <span className="icon is-right" style={{ color: '#01A768' }}>
                    <span className="material-icons">calendar_month</span>
                  </span>
                </h1>
                Appointments
              </p>
              <p className="subtitle">
                Total Active: 123
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <Link href="/appointments/manageAppointment">
                  <span>
                    Manage <a href="#">Appointments</a>
                  </span>
                </Link>
              </p>
            </footer>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="title">
                <h1 className="overview-card-icon">
                  <span className="icon is-right" style={{ color: '#FED600' }}>
                    <span className="material-icons">personal_injury</span>
                  </span>
                </h1>
                Patients
              </p>
              <p className="subtitle">
                Total: 463
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <Link href="/patients/patientRecords">
                  <span>
                    View <a href="#">Patient Records</a>
                  </span>
                </Link>
              </p>
              <p className="card-footer-item">
                <Link href="/patients/addPatient">
                  <span>
                    Create <a href="#">New Patient</a>
                  </span>
                </Link>
              </p>
            </footer>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="title">
                <h1 className="overview-card-icon">
                  <span className="icon is-right" style={{ color: '#03A9F5' }}>
                    <span className="material-icons">person_add</span>
                  </span>
                </h1>
                Doctors
              </p>
              <p className="subtitle">
                Total Doctors: 31
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <Link href="/doctors/manageDoctor">
                  <span>
                    Manage<a href="#"> Doctors</a>
                  </span>
                </Link>
              </p>
            </footer>
          </div>

          <div className="card">
            <div className="card-content">
              <p className="title">
                <h1 className="overview-card-icon">
                  <span className="icon is-right" style={{ color: '#F0483E' }}>
                    <span className="material-icons">backup</span>
                  </span>
                </h1>
                Backup
              </p>
              <p className="subtitle">
                Last Backup: 21-03-2022
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <Link href="/backup/generateBackup">
                  <span>
                    Generate <a href="#">Backup</a>
                  </span>
                </Link>
              </p>
              <p className="card-footer-item">
                <Link href="/staff/manageStaff">
                  <span>
                    Manage <a href="#">Staff</a>
                  </span>
                </Link>
              </p>
            </footer>
          </div>

        </div>
      </div>

      <div className="dashboard-stats">
        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                {/* Appointment Table */}
                <div className="card">
                  <div className="card-content">
                    <h3 className="is-size-4 is-grey-dark has-text-weight-bold">
                      Upcoming Appointment
                    </h3>
                    <br />
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
                <h3 className="is-size-4 is-grey-dark has-text-weight-bold">
                  Ongoing Patient Appointments
                </h3>
                <div className="card is-4">
                  <div className="card-content">
                    <div className="columns">
                      <div className="column">Patient Name</div>
                      <div className="column">Patient ID</div>
                      <div className="column">Date</div>
                      <div className="column">Reason</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-overview {
          background: #EDF1F5;
          padding: 4rem;
          margin: -2rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .notif-text {
          font-weight: 600;
        }

        .card {
          flex-grow: 1;
          flex-basis: 0;
          display: flex;
          flex-direction: column;
        }

        footer {
          margin-top: auto;
        }

        .card-content { 
          padding-top: 3rem;
          flex-grow: 1;
          text-align: center;
        }

        .subtitle {
          margin-top: 20rem 0;
        }

        .overview-cards {
          margin-top: 1.5rem;
          display: flex;
          gap: 2rem;
        }

        .overview-card-icon {
          text-align: center;
          margin-bottom: 1rem;
        }
        .overview-card-icon span {
          font-size: 4rem;
          
        }
      `}</style>


    </div>
  );
};

export default Dashboard;
