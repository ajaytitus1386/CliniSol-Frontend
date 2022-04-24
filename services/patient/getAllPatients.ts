import axios, { AxiosRequestConfig } from "axios";
import { Patient } from "../../types/patient";

export async function getAllPatients(): Promise<Patient[]> {
  try {
    let patients: Patient[] = [];
    var config: AxiosRequestConfig = {
      method: "get",
      url: "http://home.navboi.tech/api/v1/patient/all",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
          
        response.data.map((patient: Patient) => {
          patients.push(patient);
        });
        return patients;
      })
      .catch(function (error) {
        console.log(error);
      });
    return patients;
  } catch (error) {
    throw error;
  }
}
