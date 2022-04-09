const settings = {
  "name": "lim-site",
  "state": {
    "frontity": {
      "url": "https://staging.lookinmena.com",
      "title": "LIM 2022",
      "description": "LIM React"
    }
  },
  "packages": [
    {
      "name": "lim-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://staging.lookinmena.com",
          "params": {
            "per_page": 20,
            "type": ["post", "page", "category"]
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
