import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import App from "./App.vue";
import CustomersPage from "./components/CustomersPage.vue";
import AboutPage from "./components/AboutPage.vue";
import AddCustomer from "./components/AddCustomer.vue";
import CustomerDetails from "./components/CustomerDetails.vue";
import EditCustomer from "./components/EditCustomer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: CustomersPage },
    { path: "/about", component: AboutPage },
    { path: "/add", component: AddCustomer },
    { path: "/customer/:id", component: CustomerDetails },
    { path: "/edit/:id", component: EditCustomer },
  ],
});

const app = createApp(App);

// Configure Axios as global $http
app.config.globalProperties.$http = axios;

app.use(router);
app.mount("#app");
