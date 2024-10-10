import axios, { AxiosInstance } from "axios";

class ApiClient {
  apiClient: AxiosInstance;
  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL: baseURL,
    });
  }

  get(endpoint: string) {
    return this.apiClient.get(endpoint);
  }

  post(endpoint: string, data: {}) {
    return this.apiClient.post(endpoint, data);
  }

  postForm(endpoint: string, data: FormData) {
    return this.apiClient.post(endpoint, data);
  }
}

export const apiClient = new ApiClient("http://localhost:8089");
