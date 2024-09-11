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

  // 其他HTTP方法（put, patch, delete）...
}

export const apiClient = new ApiClient("http://localhost:8089");
