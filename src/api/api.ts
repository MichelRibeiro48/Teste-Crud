import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3031',
    headers: {
      'Content-Type': 'application/json',
    },
  });