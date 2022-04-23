import axios from "axios";
import { Patient } from "../../types/patient";

export async function getPatientById(id: number): Promise<Patient | any> {
  try {
    let patient: Patient;

    const response = await axios.get(
      `http://home.navboi.tech/api/v1/patient/${id}`,
      {
        headers: {},
      }
    );
    patient = response.data;
    return patient;
  } catch (error) {}
}
