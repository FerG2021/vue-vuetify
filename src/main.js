import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Import

import MenuIcon from "vue-material-design-icons/Menu.vue";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).component("menu-icon", MenuIcon).mount("#app");
