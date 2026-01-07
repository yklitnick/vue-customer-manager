<template>
    <div class="add container">
        <AlertObject v-if="alert" v-bind:message="alert" />
        <h1 class="h1 mb-4">Add Customer</h1>
        <form v-on:submit="addCustomer">
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <h4>Customer Info</h4>
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" v-model="customer.last_name">
                    </div>
                </div>
            </div>
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <h4>Customer Contact</h4>
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
                    </div>
                </div>
            </div>
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <h4>Customer Location</h4>
                    <div class="mb-3">
                        <label class="form-label">Address</label>
                        <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">City</label>
                        <input type="text" class="form-control" placeholder="City" v-model="customer.city">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">State</label>
                        <input type="text" class="form-control" placeholder="State" v-model="customer.state">
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import AlertObject from './AlertObject.vue';
export default {
    name: 'AddCustomer',
    data() {
        return {
            customer: {},
            alert: ''
        };
    },
    methods: {
        addCustomer(e) {
            e.preventDefault();
            if (!this.customer.first_name ||
                !this.customer.last_name ||
                !this.customer.email) {
                this.alert = 'please fill out all required fields';
            } else {
                let newCustomer = {
                    first_name: this.customer.first_name,
                    last_name: this.customer.last_name,
                    email: this.customer.email,
                    phone: this.customer.phone,
                    address: this.customer.address,
                    city: this.customer.city,
                    state: this.customer.state
                }
                this.$http.post('http://slimapp/api/customers/add', newCustomer)
                    .then((response) => {
                        this.$router.push({ path: '/', query: { alert: 'Customer Added' } });
                    })
            }
        }
    },
    components: {
        AlertObject
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
