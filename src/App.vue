<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="/">Vue.js Customers</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
                    </ul>
                    <ul class="nav navbar-nav ms-auto">
                        <li class="nav-item"><router-link class="nav-link" to="/add">Add Customer</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
/* Global styles can be imported here or from a CSS file */
</style>
