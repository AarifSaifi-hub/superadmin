import axios from "axios";

export default axios.create({
  baseURL: "https://dev.api.dolphinchat.ai",
  validateStatus: (status) => status < 500,
});
