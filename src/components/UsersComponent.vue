<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <router-link :to="/users/ +user.id">
            <div class="card px-1 py-1 my-2 col-3">{{ user.name }}</div>
            </router-link> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {id:1, name: "Ola", username: "nikky"},
                {id:2, name: "Olanike", username: "nikkykay"},
                {id:3, name: "Basirat", username: "bash"},
                {id:4, name: "Horlar", username: "nikkyp"},
                {id:5, name: "Doe", username: "nikki"},
            ]
        }
    }

}
</script>

<style scoped>

</style>