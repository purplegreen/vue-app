import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getWalkpaths() {
    return apiClient.get("/walkpaths");
  },
  getWalkpath(id) {
    return apiClient.get("/walkpaths/" + id);
  },
  postWalkpath(walkpath) {
    return apiClient.post("/walkpaths", walkpath);
  }
};
