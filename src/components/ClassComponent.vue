<template>
    <div class="p-5 my-3">
      <h2>Welcome to Vue, {{ name }}</h2>
      <p>Age - {{ age }}</p>
      <button v-on:click="increaseAge">Increase</button>

      <div class="shadow-lg rounded py-5 mx-auto px-2">
        <h3> Conditional statements - v-if, v-else, v-else-if</h3>
        <div v-if="name == 'Hor'">Display Me</div>
        <div v-else-if="name == 'Horlar'">I am Horlar</div>
        <div v-else>I am displaying</div>
  
        <!-- v-show -->
        <div v-show="name == Horlar">I am V-show</div>
      </div>
      <div class="shadow-lg rounded py-3 px-2 mx-auto">
        <h2 class="text-center">Binding - v-bind or :, v-model</h2>
        <input type="text" v-model="userInput">
        <button @click="display">Display</button>
        <p :class="name">I am class</p>
      </div>
  
      <!-- Dynamics  Attributes binding -->
      <!-- <a v-bind: href="url"></a> or -->
      <a :href="url"></a>
      
      <div class="shadow-lg rounded py-3 px-2 mx-auto">
        <h2 class="text-center">Event Handling</h2>
        <div class="p-5 text-center mx-auto bg-secondary my-2" @mouseenter="handleEvent">mouseenter</div>
        <div class="p-5 text-center mx-auto bg-secondary my-2" @mouseleave="handleEvent">mouseleave</div>
        <div class="p-5 text-center mx-auto bg-secondary my-2" @dblclick="handleEvent">double click</div>
        <div class="p-5 text-center mx-auto bg-secondary my-2" @mousemove="handleMouseMove">{{ x }}, {{ y }}</div>
      </div>
  
      <!-- v-for -->
      <div v-for="good in goods" :key="good.id" :class="{availableItems : good.available}" @click="changeColor(good.id)" >
        <h3>{{ good.name }}</h3>
        <p>{{ good.price }}</p>
      </div>
  
        <!-- Available Items -->
      <div v-for="good in availableGoods" :key="good.id">
        <h3>{{ good.name }}</h3>
        <p>{{ good.price }}</p>
      </div>
  
      <!-- Signup components --> 
      <button @click="mount = !mount">Mount</button>
      <!-- <SignupComponent v-if="mount"/> -->
      <!-- <ReactionTimer/> -->

      {{ userStore.count }}
      {{ userStore.multiplyCount }}
      <button @click="userStore.count++">Count</button>
  
      <router-view/>
    </div>
  </template>
  
  <script>
    import {useUserStore} from '../stores/UserStore';
  export default {
    name: 'App',
    components: {

      // HelloWorld
    },

    setup() {
      const userStore = useUserStore();
      return { userStore }
    },

    data() {
      return {
        name: "Horlar",
        age: 10,
        userInput: "",
        x: 0,
        y: 0,
        goods: [
          {id: 1, name: "t-shirts", price: 3000 ,available: true},
          {id: 2, name: "Gala", price:300, available: false},
          {id: 3, name: "Bottle Water", price:100, available: true},
          {id: 4, name: "Airpods", price:27000, available: false},
  
        ],
        url: "http://edu.sgi.ng",
        mount: false 
      };
    },
    methods: {
      increaseAge() {
        this.age = this.age + 1;
      },
      display() {
        console.log(this.userInput);
      },
      
      handleEvent(e){
        console.log(e);
      },
      handleMouseMove(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
      },
      changeColor(id) {
        let item = this.goods.find((good) => good.id == id);
        item.available = !item.available;
      
      },
    }, 
    computed: {
      availableGoods() {
        return this.goods.filter((good) => good.available)
      }
    }, 
    mounted() {
      console.log("components mounted");
    }
  }
  </script>
  
  <style>
  <!-- #app { 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } -->
  .availableItems {
    background-color: blue;
    padding: 8px 10px;
    text-align: center;
  }; 
  
  
  </style>
  