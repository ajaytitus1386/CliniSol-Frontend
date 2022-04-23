import axios, { AxiosRequestConfig } from "axios";
import { Appointment } from "../../types/appointment";

export async function getAllAppointments(): Promise<Appointment[]> {
  try {
    let appointments: Appointment[] = [];
    var config: AxiosRequestConfig = {
      method: "get",
      url: "http://home.navboi.tech/api/v1/appointment/all",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        response.data.map((appt: Appointment) => {
          appointments.push(appt);
        });
        return appointments;
      })
      .catch(function (error) {
        console.log(error);
      });
    return appointments;
  } catch (error) {
    throw error;
  }
}
