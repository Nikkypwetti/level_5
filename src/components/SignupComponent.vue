<template>
    <div class="bg-dark">
        <h1 class="text-center text-light">Form Validator</h1>
        <hr>
        <form  class="card mx-auto px-2 py-1 mt-3" @submit.prevent="handleSubmit">
            <div form-group> 
                <label>Name</label>
                <input type="text" class="form-control" v-model="v$.form.name.$model" />
            </div>
            <div v-for="(error,index) in v$.form.name.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            <div form-group> 
                <label>E-mail</label>
                <input type="text" class="form-control" v-model="v$.form.email.$model" />
            </div>
            <div v-for="(error,index) in v$.form.email.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            
            <label>Job Description</label>
            <select v-model="job">
                <option value="Developer">Developer</option>
                <option value="Teacher">Teacher</option>
                <option value="Instructor">Instructor</option>
                <option value="Doctor">Doctor</option> 
            </select>
            <!-- {{ job }} -->
            <div form-group> 
                <label>Age</label>
                <input type="text" class="form-control" v-model="v$.form.age.$model" />
            </div>
            <div v-for="(error,index) in v$.form.age.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            <div form-group> 
                <label>Address</label>
                <input type="text" class="form-control" v-model="v$.form.address.$model" />
            </div>
            <div v-for="(error,index) in v$.form.address.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            <div  class="form-group mt-2">
                <label>Skills</label>
                <small><i>(Please press enter or comma after typing each skills)</i></small>
                <input type="text" class="form-control" v-model="tempSkill" @keyup="addSkill" />
            </div>
            <div v-for="(skill, index) in skills" :key="index">
                <span  @click="deleteSkill(index)" class="skill btn btn-md bg-info text-light"><p>{{ skill }}</p></span>
            </div>
            <div form-group> 
                <label>Password</label>
                <input type="text" class="form-control" v-model="v$.form.password.$model" />
            </div>
            <div v-for="(error,index) in v$.form.password.$errors" :key="index">
                <span class="text-danger text-sm">{{  error.$message }}</span>
            </div>
            
            <div class="form-group mt-2">
            <input type="checkbox" v-model="check" />
            <label>Accept Terms and Conditions</label>
            {{ check }}
            </div>

            <div class="form-group mt-2">
                <button
                    type="submit"
                    :disabled="(v$.form.$invalid) || (!check)"
                    class="btn btn-md bg-info text-light text-center px-2"
                >Create an account</button>
            </div>
            
        </form>
    </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import axios from 'axios';
import { required, minLength, maxLength, email } from '@vuelidate/validators';
export default{
    mounted(){
        console.log("Signup has been mounted");
    },
    setup() {
        return {v$: useValidate()}


    },
    data()  {
        return {
            form: {
                name: '',
                email: '',
                age: '',
                address: '',
                password: '',
            },
            job: '',
            check:false,
            skills: [],
            tempSkill: '',
            message: '',
            errors: [],
        };
    },
    validations () {
        return {
            form: {
                name: { required, max: maxLength(10), min: minLength(5) },
                email: { required, email },
                age: { required },
                address: { required },
                password: { required, min: minLength(6),max: maxLength(8) },
            }
        }
    },
    methods: {
        handleSubmit() {
            // console.log(this.form);
            console.log(this.check);
            if(this.v$.form.$invalid) {
                console.log('form is invalid');
            }else {
                axios.post("http://localhost:8000/api/register", this.form).then((res) => {
                    // console.log(res);
                    if(res.data.status) {
                        this.message = res.data.message
                        // console.log(this.message);
                        this.$router.push('/login')
                    }else {
                        this.errors = res.data.errors
                        console.log(this.errors);
                    }
                })
            }
        },
        addSkill(e) {
        //    console.log(e);
            if(e.key === 'Enter' && this.tempSkill) {
                this.skills.push(this.tempSkill);
                this.tempSkill = ''
            }
            if(e.key === ',' && this.tempSkill) {
                this.tempSkill = this.tempSkill.slice(0,-1);
                this.skills.push(this.tempSkill);
                this.tempSkill = ''
            }
        },
        deleteSkill(index) {
            this.skills.splice(index,1);
        }
    }

}
</script>
 
<style>

</style>