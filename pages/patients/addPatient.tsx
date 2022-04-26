import React, { useState, useEffect } from "react";
import { Patient } from "../../types/patient";

function PatientRow(patient: Patient) {
  return (
    <div className="columns" key={patient.id}>
      <div className="column">{patient.id}</div>
      <div className="column">{patient.name}</div>
      <div className="column">{patient.phone}</div>
      <div className="column">{patient.email}</div>
      <div className="column">{patient.sex}</div>
      <div className="column">{patient.dob}</div>
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

const AddPatient = () => {
  const [allPatientsDataDB, setAllPatientsDataDB] = useState([]);

  const addPatientToDB = async (event: any) => {
    event.preventDefault();

    const patient_data = {
      name: event.target.name.value,
      date_of_birth: event.target.dob.value,
      phone: event.target.phone.value,
      sex: event.target.gender.value,
      email: event.target.email.value,
      height: event.target.height.value,
      weight: event.target.weight.value,
      address: event.target.address.value,
    }
    console.log(JSON.stringify(patient_data))

    const res = await fetch(
      'http://home.navboi.tech/api/v1/patient/',
      {
        body: JSON.stringify(patient_data),
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    event.target.reset();
    getPatientsFromDB();

    alert(res.statusText);
  }

  const getPatientsFromDB = async () => {
    try {
      const res = await fetch(
        'http://home.navboi.tech/api/v1/patient/all',
        {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
            'Content-Type': 'application/json'
          },
          method: 'GET'
        }
      )

      const data = await res.json();
      data.sort((a: any, b: any) => a.id - b.id);

      setAllPatientsDataDB(data);
    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    getPatientsFromDB();
  }, []);

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Add New Patient's Data</h1>
      <form onSubmit={addPatientToDB}>
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
            <label className="label">Contact</label>
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
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input id="email" name="email" className="input" type="email" placeholder="Email" required />
                <span className="icon is-small is-left">
                  <span className="material-icons">email</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Gender</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select id="gender" name="gender" required>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Non-binary">Non-binary</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field-label is-normal">
              <label className="label">Height</label>
            </div>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input id="height" name="height" className="input" type="number" placeholder="Your height" required />
                </p>
                <p className="control">
                  <a className="button is-static">
                    cm
                  </a>
                </p>
              </div>
            </div>
            <div className="field-label is-normal">
              <label className="label">Weight</label>
            </div>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input id="weight" name="weight" className="input" type="number" placeholder="Your weight" required />
                </p>
                <p className="control">
                  <a className="button is-static">
                    kg
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal ">
            <label className="label">Date of Birth</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control has-icons-left">
                <input id="dob" name="dob" type="date" className="dob-picker pl-6" required />
                <span className="icon is-small is-left">
                  <span className="material-icons">calendar_month</span>
                </span>
              </div>
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
                  Add Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 className="is-size-2 has-text-weight-bold is-grey-dark my-6 has-text-centered">All Patients</h1>
      <div className="box mt-4 is-flex-direction-row">
        {/* Table Head */}
        <div className="columns">
          <div className="column has-text-weight-bold is-size-5">Patient.Id</div>
          <div className="column has-text-weight-bold is-size-5">Patient Name</div>
          <div className="column has-text-weight-bold is-size-5">Personal Contact</div>
          <div className="column has-text-weight-bold is-size-5">Email</div>
          <div className="column has-text-weight-bold is-size-5">Gender</div>
          <div className="column has-text-weight-bold is-size-5">DOB</div>
        </div>
        {allPatientsDataDB.map((patient: any) => {
          return PatientRow(patient);
        })}
      </div>

      <style jsx>{`
        .container {
            background: #EDF1F5;
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

export default AddPatient;
