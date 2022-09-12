import axios from "axios"

const httpClient = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000
});

export default function useHttpClient(props) {
  return httpClient
}