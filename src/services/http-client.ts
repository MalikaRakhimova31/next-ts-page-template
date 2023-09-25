import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    accept: "application/json",
    "X-CSRFToken":
      "l5sC5bqH8ua8EMV3DcQ9LUMmdx7pmh0wdQM9jW3BcoO58Uu68RyR76SvdYpw3wku",
  },
});
