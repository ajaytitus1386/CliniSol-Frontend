import { Doctor } from "./doctor";
import { Patient } from "./patient";

export interface Appointment {
  id: number;
  startTime: number;
  duration: number;
  doctor: Doctor;
  patient: Patient;
}
