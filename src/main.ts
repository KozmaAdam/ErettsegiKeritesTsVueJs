import Vue from "vue";
import BootstrapVue, { FormRadioPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudUploadAlt, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(faCloudUploadAlt, faCloud);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  data: { color: "#673AB7" },
  render: h => h(App)
}).$mount("#app");
