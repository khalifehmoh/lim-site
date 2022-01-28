import Root from "./components";

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
      }
    }
  }
};
