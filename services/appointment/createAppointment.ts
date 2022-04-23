import axios, { AxiosRequestConfig } from "axios";

export async function createAppointment({
  start,
  duration_s,
  doctor_id,
  patient_id,
}: {
  start: string;
  duration_s: string;
  doctor_id: number;
  patient_id: number;
}) {
  try {
    var data = JSON.stringify({
      start: start,
      duration_s: duration_s,
      doctor_id: doctor_id,
      patient_id: patient_id,
    });

    var config: AxiosRequestConfig = {
      method: "post",
      url: "http://home.navboi.tech/api/v1/appointment/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {}
}
