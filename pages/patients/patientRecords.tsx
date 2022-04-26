import React, { useState } from "react";

const PatientRecords = () => {
  const [foundPatientsDataDB, setFoundPatientsDataDB] = useState();
  const [patientName, setPatientName] = useState("");
  const [patientID, setPatientID] = useState();
  const [isPatientFound, setIsPatientFound] = useState(false);
  const [isAppointmentFound, setIsAppointmentFound] = useState(false);
  const [foundAppointmentsDataDB, setFoundAppointmentsDataDB] = useState();
  const [filePath, setFilePath] = useState<File | null>(null);


  const uploadAppointmentImage = async (event: any, appid: any, pid: any) => {
    event.preventDefault();

    var formData = new FormData();
    formData.append("photo", filePath)
    formData.append("id", appid)

    const res = await fetch(
      'http://home.navboi.tech/api/v1/appointment/prescription',
      {
        body: formData,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
        },
        method: 'POST'
      }
    )

    event.target.reset();
    
    getAllAppointmentsByPatientID(pid);

    alert(res.statusText);
  }



  const getAllAppointmentsByPatientID = async (pid: any) => {
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
    if (data.length != 0) {
      var apts = data.filter((apt: any) => {
        return apt.patient.id == pid;
      });

      if (apts.length != 0) {
        setIsAppointmentFound(true);
        setFoundAppointmentsDataDB(apts);
      } else {
        setIsAppointmentFound(false);
      }
    } else {
      setIsAppointmentFound(false);
    }

  }

  const searchPatientByName = async (event: any) => {
    event.preventDefault();

    const patient_data = {
      name: event.target.pname.value
    }

    const res = await fetch(
      'http://home.navboi.tech/api/v1/patient/search',
      {
        body: JSON.stringify(patient_data),
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const data = await res.json();
    if (data.length != 0) {
      const patientID = data[0].id;
      const res2 = await fetch(
        'http://home.navboi.tech/api/v1/patient/' + patientID,
        {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZl9pZCI6MSwiaWF0IjoxNjUwNzA3MzI0LCJleHAiOjE2NTMyOTkzMjR9.HhpZL5Jp7Qi0JNQHXTPanOMA92gVc4HFSMoB8tTo7y4',
            'Content-Type': 'application/json'
          },
          method: 'GET'
        }
      )

      const patient = await res2.json();
      setIsPatientFound(true);
      setFoundPatientsDataDB(patient);
      getAllAppointmentsByPatientID(patient.id);
    } else {
      setIsPatientFound(false);
    }
  }

 

  return (
    <div className="container box">
      <h1 className="is-size-2 has-text-weight-bold is-grey-dark mb-6 has-text-centered">View Patient Records</h1>
      <form onSubmit={searchPatientByName}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Patient Name</label>
          </div>
          <div className="field-body">
            <div className="field has-addons">
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="text"
                  name="pname"
                  placeholder="Search patient by Name"
                  required
                  onChange={(field) => {
                    setPatientName(field.target.value)
                  }}
                ></input>
                <span className="icon is-small is-right">
                  {isPatientFound ? (
                    <span className="material-icons has-text-primary">
                      done
                    </span>
                  ) : (
                    <span className="material-icons has-text-danger">
                      close
                    </span>
                  )}
                </span>
              </div>
              <div className="control">
                <button className="button is-info" type="submit">Find</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      {isPatientFound ? (
        <div>
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {foundPatientsDataDB.name}
              </p>
              <button className="card-header-icon" aria-label="more options">
                <span className="icon">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content">
                <b>Patient ID</b>: {foundPatientsDataDB.id}
                <br />
                <b>Gender</b>: {foundPatientsDataDB.sex}
                <br />
                <b>Date of birth</b>: {foundPatientsDataDB.dob}
                <br />
                <b>Weight</b>: {foundPatientsDataDB.weight} kg
                <br />
                <b>Height</b>: {foundPatientsDataDB.height} cm
                <br />
                <b>Address</b>: {foundPatientsDataDB.address}
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">+91 {foundPatientsDataDB.phone}</p>
              <p className="card-footer-item">{foundPatientsDataDB.email}</p>
            </footer>
          </div>
          <br />
          <h1 className="is-size-4">{foundPatientsDataDB.name}'s Appointments</h1>
          <br />
          {isAppointmentFound ? (
            <div className="columns is-flex is-flex-wrap-wrap">
              {foundAppointmentsDataDB.map((appointment: any) => {
                return (
                  <div className="card is-3 column mx-6 mb-6" key={appointment.id}>
                    <div className="card-image">
                      <figure className="image">
                        {appointment.prescription_images.length !=0 && <img
                          src={"http://home.navboi.tech/api/v1/appointment/image/" + appointment.prescription_images[0]}
                          alt="Picture of the perscription"
                          style={{}}
                        />}
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{appointment.doctor.name}</p>
                          <p className="subtitle is-6">Doctor ID: {appointment.doctor.id}</p>
                        </div>
                      </div>

                      <div className="content">
                        <b>Appointment ID</b>: {appointment.id}
                        <br />
                        <b>Date and Time</b>: {appointment.startTime}
                        <br />
                        <b>Duration</b>: {appointment.duration} minutes
                        <br />
                        <br />
                        <form onSubmit={(event) => uploadAppointmentImage(event, appointment.id, appointment.patient.id)}>
                          <div className="field is-horizontal">
                            <div className="field-body">
                              <div className="field has-addons">
                                <div className="control has-icons-right">
                                  <input
                                    className="input"
                                    type="file"
                                    name="pfile"
                                    required
                                    onChange={(field) => {
                                      setFilePath(field.target.files[0])
                                    }}
                                  ></input>
                                </div>
                                <div className="control">
                                  <button className="button is-warning" type="submit">Upload</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <hr />
          )}

        </div>
      ) : (
        <br />
      )}
      
      <style jsx>{`
        .container {
            background: #EDF1F5;
            padding: 2rem;
            border-radius: 1rem;
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

export default PatientRecords;
