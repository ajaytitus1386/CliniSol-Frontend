import React, { useEffect } from "react";

const AddPatient = () => {
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

    alert(res.statusText);
  }

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Add New Patient Data</h1>
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

      <style jsx>{`
        .container {
            background: #EDF1F5;
            padding: 2rem;
            border-radius: 1rem;
        }

        .navbar-start .navbar-item p{
          width: 640px;
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
        `}</style>
    </div>
  );
};

export default AddPatient;
