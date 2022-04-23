import { Doctor } from "./doctor";
import { Patient } from "./patient";

export interface Appointment {
  id: number;
  startTime: number;
  duration: number;
  prescription_images: String[];
  doctor: Doctor;
  patient: Patient;
}
