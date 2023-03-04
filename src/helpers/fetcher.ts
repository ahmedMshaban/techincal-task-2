import axios, { AxiosResponse } from "axios";
import { ErrnoException } from "../types/index";

export const fetcher = async (url: string): Promise<AxiosResponse["data"]> => {
  return axios(url, {
    auth: {
      username: process.env.REACT_APP_USER_NAME || "",
      password: process.env.REACT_APP_USER_PASSWORD || "",
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        const error: ErrnoException = new Error(
          "An error occurred while fetching the data."
        );
        error.status = res.status;
        // Attach extra info to the error object.
        throw error;
      }
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
