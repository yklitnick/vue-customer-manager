import Vue from 'vue';
// import App from './App.vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
import CustomersPage from './components/CustomersPage.vue';
import AboutPage from './components/AboutPage.vue';
import AddCustomer from './components/AddCustomer.vue';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: CustomersPage },
        { path: '/about', component: AboutPage },
        { path: '/add', component: AddCustomer },
    ],
});

Vue.config.productionTip = false;

new Vue({
    router,
    template: `
        <div id="app">
            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Vue.js Customers</a>
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/about">About</router-link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><router-link to="add">Add Customer</router-link></li>
                        </ul>
                    </div><!--/.nav-collapse -->
                </div>
            </nav>
            <router-view></router-view>
        </div>
    `,
    // render: (h) => h(App),
}).$mount('#app');
