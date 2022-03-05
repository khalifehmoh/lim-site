const settings = {
  "name": "lim-site",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
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
          "url": "https://lookinmena.com",
          "params": {
            "per_page": 20,
            "type": ["post", "page", "category"],
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
