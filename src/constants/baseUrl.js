export const BASE_URL =
  window.location.hostname === "localhost"
    ? "https://develop.synapse.pro/api/"
    : `${window.location.protocol}//${window.location.host}/api/`;
