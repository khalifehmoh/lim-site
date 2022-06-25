export const getBaseUrl = () => {
  let BASE_URL = "https://staging.lookinmena.com";
  // Set the base url
  // @todo: update the links once the site is ready
  if (process.env && process.env.NODE_ENV) {
    if (process.env.NODE_ENV === "production") {
      BASE_URL = "https://staging.lookinmena.com";
    } else if (process.env.NODE_ENV === "staging") {
      BASE_URL = "https://staging.lookinmena.com";
    } else if (process.env.NODE_ENV === "development") {
      BASE_URL = "https://staging.lookinmena.com";
    }
  }

  return BASE_URL;
};
