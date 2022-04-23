import axios, { AxiosRequestConfig } from "axios";
import { Appointment } from "../../types/appointment";

export async function getAppointmentsByDate({
  date,
}: {
  date: String;
}): Promise<Appointment[]> {
  let appointments: Appointment[] = [];
  try {
    var data = JSON.stringify({
      date: "2022-11-18 00:00:00+00",
    });

    var config: AxiosRequestConfig = {
      method: "post",
      url: "http://home.navboi.tech/api/v1/appointment/bydate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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
