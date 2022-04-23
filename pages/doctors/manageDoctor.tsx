import React, { useState } from "react";
import { Doctor } from "../../types/doctor";

function DoctorRow(doctor: Doctor) {
  return (
    <div className="columns" key={doctor.id}>
      <div className="column">{doctor.id}</div>
      <div className="column">{doctor.name}</div>
      <div className="column">{doctor.phone}</div>
      <div className="column">{doctor.altphone}</div>
      <div className="column">{doctor.address}</div>
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

const ManageDoctor = () => {
  const [doctorsDataDB, setDoctorsDataDB] = useState([]);

  const addDoctorToDB = async (event: any) => {
    event.preventDefault();

    const doctor_data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      altphone: event.target.emergency_phone.value,
      address: event.target.address.value,
    }
    console.log(JSON.stringify(doctor_data))

    const res = await fetch(
      'http://home.navboi.tech/api/v1/doctor/',
      {
        body: JSON.stringify(doctor_data),
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    event.target.reset();

    alert(res.statusText);
  }

  const getDoctorsFromDB = async () => {
    const res = await fetch(
      'http://home.navboi.tech/api/v1/doctor/all',
      {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
          'Content-Type': 'application/json'
        },
        method: 'GET'
      }
    )

    const data = await res.json();
    data.sort((a: any,b: any) => a.id - b.id);

    setDoctorsDataDB(data);
  }

  getDoctorsFromDB();

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Add New Doctor</h1>
      <form onSubmit={addDoctorToDB}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input id="name" name="name" className="input" type="text" placeholder="Name" required />
                <span className="icon is-small is-left">
                  <span className="material-icons">person</span>
                </span>
              </p>
            </div>

          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Personal Contact</label>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    +91
                  </a>
                </p>
                <p className="control is-expanded">
                  <input id="phone" name="phone" className="input" type="tel" placeholder="Your phone number" required />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Emergency Contact</label>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    +91
                  </a>
                </p>
                <p className="control is-expanded">
                  <input id="emergency_phone" name="emergency_phone" className="input" type="tel" placeholder="Your emergency phone number" required />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal ">
            <label className="label">Address</label>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="control has-icons-left">
                <textarea id="address" name="address" className="textarea" required />
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Add Doctor
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 className="is-size-2 has-text-weight-bold is-grey-dark my-6 has-text-centered">Working Doctors</h1>
      <div className="box mt-4 is-flex-direction-row">
        {/* Table Head */}
        <div className="columns">
          <div className="column has-text-weight-bold is-size-5">Doc.Id</div>
          <div className="column has-text-weight-bold is-size-5">Doctor Name</div>
          <div className="column has-text-weight-bold is-size-5">Personal Contact</div>
          <div className="column has-text-weight-bold is-size-5">Emergency Contact</div>
          <div className="column has-text-weight-bold is-size-5">Address</div>
        </div>

        <div className="divider"></div>

        {doctorsDataDB.map((doctor: any) => {
          return DoctorRow(doctor);
        })}
      </div>

      <style jsx>{`
        .container {
            background: #EDF1F5;
            padding: 2rem;
            border-radius: 1rem;
        }

        .navbar-start .navbar-item p{
          width: 640px;
        }

        .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
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
        `}</style>
    </div>
  );
};

export default ManageDoctor;
