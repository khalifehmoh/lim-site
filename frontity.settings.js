const getBaseUrl = () => {
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

const settings = {
  name: "lim-site",
  state: {
    frontity: {
      url: getBaseUrl(),
      title: "LIM 2022",
      description: "LIM React",
    },
  },
  packages: [
    {
      name: "lim-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: getBaseUrl(),
          params: {
            per_page: 20,
            type: ["post", "page", "category"],
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

console.log(settings.state.frontity.url);

export default settings;
