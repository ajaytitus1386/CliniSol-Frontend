import React, { useState } from "react";
import { Doctor } from "../../types/doctor";

const GenBackup = () => {
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
    data.sort((a: any, b: any) => a.id - b.id);

    return data;
  }

  const getStaffFromDB = async () => {
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

    return data;
  }

  const getPatientFromDB = async () => {
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

    return data;
  }

  const getAppointmentFromDB = async () => {
    const res = await fetch(
      'http://home.navboi.tech/api/v1/appointment/all',
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

    return data;
  }


  const getBackupFromDB = async (event: any) => {
    event.preventDefault();

    var save_data = [];
    var filename = event.target.filename.value + ".json";
    var download_data = await Promise.all([getPatientFromDB(), getDoctorsFromDB(), getAppointmentFromDB(), getStaffFromDB()]);

    if(event.target.patients.checked) {
      save_data.push(download_data[0]);
    }

    if(event.target.doctors.checked) {
      save_data.push(download_data[1]);
    }

    if(event.target.appointments.checked) {
      save_data.push(download_data[2]);
    }
    
    if(event.target.staff.checked){
      save_data.push(download_data[3]);
    }

    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(save_data)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    // event.target.reset();    
  }

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">Select data to download</h1>
      <form onSubmit={getBackupFromDB}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <p className="control is-expanded has-icons-left">
                <label className="label">Patients</label>
                <input id="patients" name="patients" className="checkbox" type="checkbox" />
              </p>
            </div>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <p className="control is-expanded has-icons-left">
                <label className="label">Doctors</label>
                <input id="doctors" name="doctors" className="checkbox" type="checkbox" />
              </p>
            </div>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <p className="control is-expanded has-icons-left">
                <label className="label">Appointments</label>
                <input id="appointments" name="appointments" className="checkbox" type="checkbox" />
              </p>
            </div>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <p className="control is-expanded has-icons-left">
                <label className="label">Staff</label>
                <input id="staff" name="staff" className="checkbox" type="checkbox" />
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal mt-6">
          <div className="field-label is-normal">
            <label className="label">File Name</label>
          </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">

                <p className="control is-expanded">
                  <input id="filename" name="filename" className="input" type="text" placeholder="Enter file name" required />
                </p>
                <p className="control">
                  <a className="button is-static">
                    .JSON
                  </a>
                </p>
              </div>
              <p className="help">Do not enter the file extension</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal mt-6">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Generate Backup
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

        .checkbox {
          width: 1.6rem;
          height: 1.6rem;
          margin-bottom: 0;

        }

        .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
          }
        
          .control {
            text-align: center; 
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

export default GenBackup;
