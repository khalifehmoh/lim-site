console.log(process.env.NODE_ENV);
let BASE_URL = "https://staging.lookinmena.com";
// Set the base url
if (process.env && process.env.NODE_ENV) {
  if (process.env.NODE_ENV === "production") {
    BASE_URL = "https://lookinmena.com";
  } else if (process.env.NODE_ENV === "staging") {
    BASE_URL = "https://staging.lookinmena.com";
  } else if (process.env.NODE_ENV === "development") {
    BASE_URL = "https://dev.lookinmena.com";
  }
}

const settings = {
  name: "lim-site",
  state: {
    frontity: {
      url: BASE_URL,
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
          url: BASE_URL,
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

export default settings;
