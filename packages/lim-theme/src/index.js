import Root from "./components";
import handlers from "./handlers"

export default {
  name: "lim-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: false
    }
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
      init: ({ libraries }) => {
          Object.values(handlers).forEach(handler => libraries.source.handlers.push(handler))
      },
    },
  }
};
