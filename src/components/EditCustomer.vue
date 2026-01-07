<template>
    <div class="edit container">
        <AlertObject v-if="alert" v-bind:message="alert" />
        <h1 class="page-header">Edit Customer</h1>
        <form v-on:submit="updateCustomer">
            <div class="well">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
                </div>
            </div>
            <div class="well">
                <h4>Customer Location</h4>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="customer.city">
                </div>
                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" placeholder="State" v-model="customer.state">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import AlertObject from './AlertObject.vue';
export default {
    name: 'EditCustomer',
    data() {
        return {
            customer: {},
            alert: ''
        };
    },
    methods: {
        fetchCustomer(id) {
            this.$http.get('http://slimapp/api/customers/' + id)
                .then(response => {
                    this.customer = response.body;
                });
        },
        updateCustomer(e) {
            e.preventDefault();
            if (!this.customer.first_name ||
                !this.customer.last_name ||
                !this.customer.email) {
                this.alert = 'please fill out all required fields';
            } else {
                let updatedCustomer = {
                    first_name: this.customer.first_name,
                    last_name: this.customer.last_name,
                    email: this.customer.email,
                    phone: this.customer.phone,
                    address: this.customer.address,
                    city: this.customer.city,
                    state: this.customer.state
                }
                this.$http.put('http://slimapp/api/customers/update/' + this.$route.params.id, updatedCustomer)
                    .then(function (response) {
                        this.$router.push({ path: '/', query: { alert: 'Customer Updated' } });
                    })
            }
        }
    },
    created: function () {
        this.fetchCustomer(this.$route.params.id);
    },
    components: {
        AlertObject
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
