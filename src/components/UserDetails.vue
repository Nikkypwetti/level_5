<template>
    <div>
        <div>
            <h1>I am User Details Page</h1>
            {{ this.$route.params.id }}
            <button class="btn btn-md bg-dark text-light px-2" @click="goToHome()"> GO To Home</button>   
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style>

</style>