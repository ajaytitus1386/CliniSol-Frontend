import React, { useState } from "react";
import { Staff } from "../../types/staff";

function StaffRow(staff: Staff) {
  return (
    <div className="columns" key={staff.id}>
      <div className="column">{staff.id}</div>
      <div className="column">{staff.name}</div>
      <div className="column">{staff.phone}</div>
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

const ManageStaff = () => {
  const [staffsDataDB, setStaffsDataDB] = useState([]);

  const addStaffToDB = async (event: any) => {
    event.preventDefault();

    const staff_data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      password: event.target.password.value,
    }
    console.log(JSON.stringify(staff_data))

    const res = await fetch(
      'http://home.navboi.tech/api/v1/staff/',
      {
        body: JSON.stringify(staff_data),
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

  const getStaffsFromDB = async () => {
    try {
      const res = await fetch(
        'http://home.navboi.tech/api/v1/staff/all',
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

      setStaffsDataDB(data);
    } catch (e) {
      console.log(e)
    }
  }

  getStaffsFromDB();

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Add New Staff</h1>
      <form onSubmit={addStaffToDB}>
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
            <label className="label">Password</label>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">

                <p className="control is-expanded">
                  <input id="password" name="password" className="input" type="password" placeholder="Enter password" required />
                </p>
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
                  Add Staff
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 className="is-size-2 has-text-weight-bold is-grey-dark my-6 has-text-centered">Current Staff</h1>
      <div className="box mt-4 is-flex-direction-row">
        {/* Table Head */}
        <div className="columns">
          <div className="column has-text-weight-bold is-size-5">Staff.Id</div>
          <div className="column has-text-weight-bold is-size-5">Staff Name</div>
          <div className="column has-text-weight-bold is-size-5">Staff Contact</div>
        </div>

        <div className="divider"></div>

        {staffsDataDB.map((staff: any) => {
          return StaffRow(staff);
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

export default ManageStaff;
