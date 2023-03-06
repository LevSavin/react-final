import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import axiosInstance from "axios";

export const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_BASE_API_URL
});