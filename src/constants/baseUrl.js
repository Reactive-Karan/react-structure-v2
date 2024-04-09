export const BASE_URL =
  window.location.hostname === "localhost"
    ? "https://staging.alyanaapp.com/api/"
    : `${window.location.protocol}//${window.location.host}/api/`;
