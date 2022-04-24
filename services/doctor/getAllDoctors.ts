import axios, { AxiosRequestConfig } from "axios";
import { Doctor } from "../../types/doctor";

export async function getAllDoctors(): Promise<Doctor[]> {
  try {
    let doctors: Doctor[] = [];
    var config: AxiosRequestConfig = {
      method: "get",
      url: "http://home.navboi.tech/api/v1/doctor/all",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
          
        response.data.map((doctor: Doctor) => {
          doctors.push(doctor);
        });
        return doctors;
      })
      .catch(function (error) {
        console.log(error);
      });
    return doctors;
  } catch (error) {
    throw error;
  }
}
