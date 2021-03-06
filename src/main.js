import Vue from "vue";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // Buefy,
  render: h => h(App)
}).$mount("#app");
