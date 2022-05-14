import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import "./main.css";
import "flowbite";
import * as VueAos from "vue-aos";

Vue.use(VueAos);
Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
