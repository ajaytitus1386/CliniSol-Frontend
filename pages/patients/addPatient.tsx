import React, { useEffect } from "react";
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

const AddPatient = () => {


  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Add New Patient Data</h1>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Name</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input className="input" type="text" placeholder="Name" />
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
                <input className="input" type="tel" placeholder="Your phone number" />
              </p>
            </div>
            <p className="help">Do not enter the first zero</p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input className="input" type="email" placeholder="Email" />
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
                <select>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                </select>
              </div>
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
              <input id="dob" type="date" className="dob-picker pl-6" />
              <span className="icon is-small is-left">
                <span className="material-icons">calendar_month</span>
              </span>
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
              <button className="button is-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
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
