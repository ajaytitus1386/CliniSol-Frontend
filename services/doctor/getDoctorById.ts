import axios from "axios";
import { Doctor } from "../../types/doctor";

export async function getDoctorById(id: number): Promise<Doctor | any> {
  try {
    let doctor: Doctor;

    const response = await axios.get(
      `http://home.navboi.tech/api/v1/doctor/${id}`,
      {
        headers: {},
      }
    );
    doctor = response.data;
    return doctor;
  } catch (error) {}
}
