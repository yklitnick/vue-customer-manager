<template>
    <div class="details container">
        <router-link to="/">Back</router-link>
        <h1 class="h1 mb-4">{{ customer.first_name }} {{ customer.last_name }}
            <span class="float-end">
                <router-link class="btn btn-primary" v-bind:to="'/edit/' + customer.id">Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="fw-bold">Phone: </span> {{ customer.phone }}
            </li>
            <li class="list-group-item">
                <span class="fw-bold">Email: </span> {{ customer.email }}
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">{{ customer.address }}</li>
            <li class="list-group-item">{{ customer.city }}</li>
            <li class="list-group-item">{{ customer.state }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CustomerDetails',
    data() {
        return {
            customer: ''
        };
    },
    methods: {
        fetchCustomer(id) {
            this.$http.get('http://slimapp/api/customers/' + id)
                .then(response => {
                    this.customer = response.data;
                });
        },
        deleteCustomer(id) {
            this.$http.delete('http://slimapp/api/customers/delete/' + id)
                .then(response => {
                    this.$router.push({ path: '/', query: { alert: 'Customer Deleted' } });
                });
        }
    },
    created: function () {
        this.fetchCustomer(this.$route.params.id);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin-left: 5px;
}
</style>
