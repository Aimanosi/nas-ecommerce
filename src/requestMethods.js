import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmJkNTU0YTMyZGUzN2E5MGQ2ZThkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzY0MzI3MiwiZXhwIjoxNjgzOTAyNDcyfQ.fycNhHuuWhMDf5vll0ZmlNom0czhuSzvslbWJntX76E";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
