<template>
    <div>
        <h1 class="text-center">Login</h1>
        <form class="card mx-auto px-2 py-2 mt-2" @submit.prevent="handleLogin">
            <div form-group> 
                <label>E-mail</label>
                <input type="text" class="form-control" v-model="v$.login.email.$model" />
            </div>
            <div v-for="(error,index) in v$.login.email.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            <div form-group> 
                <label>Password</label>
                <input type="text" class="form-control" v-model="v$.login.password.$model" />
            </div>
            <div v-for="(error,index) in v$.login.password.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            <div class="form-group mt-2">
                <button type="submit" class="btn btn-md bg-info text-center">Login</button>
            </div>
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core';
import { required, minLength, maxLength, email} from '@vuelidate/validators';
    export default{
        setup() {
            return {v$: useValidate()}

        },
        data() {
            return {
                login: {
                    email: '',
                    password: '',
                },
            }
        },
        validations() {
            return {
                login: {
                email: { required, email },
                password: { required, min: minLength(6),max: maxLength(8) },
                }
            }
        },
        methods: {
            handleLogin() {
                if(this.v$.login.$invalid) {
                    console.log('form is invalid')
                } else {
                    axios.post("http://localhost:8000/api/login", this.login ).then((res) =>{
                        // console.log(res)
                        if(res.data.status) {
                            this.message = res.data.message
                            localStorage.setItem('userId', res.data.userId)
                            console.log(res.data);
                        this.$router.push('/dashboard')
                        }else {
                            this.errors = res.data.message
                            console.log(this.errors)
                        }
                    })
                }
            }

        }
    }

    
</script>

<style>

</style>