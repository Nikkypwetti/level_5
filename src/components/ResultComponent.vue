<template>
  <div>
    <!-- <h3>I am Result Components</h3>   -->
    <p>{{ result }}</p>
    <div class="mx-auto shadow py-3 col-4" v-if="result">
            <div class="text-secondary text-center badge" v-if="result > 1000 && result<1200" ><p>You are <b>Very fast</b>, you've done well and your score is {{ (result/1000) }} seconds</p>p</div> 
            <div  v-else-if="result>1200 && result<2000"><p>You are <b>fast</b>and your score is {{ (result/1000) }}seconds</p></div>
            <div class="text-warning" v-else-if="result>2000 && result<3000"><p>You are <b>Slow</b>, you can always do better and your score is {{ (result/1000) }} seconds</p></div>
            <div class="text-success" v-else-if="result>500 && result<1000"><p>You are very very <b>Fast</b>, Kudos to you. Your score is {{ (result/1000) }} seconds</p></div>
            <div class="text-danger" v-else-if="result>3000"><p>You are <b>Very Slow</b>, you can do better next time. Your score is {{ (result/1000) }} seconds</p></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["result"]
};
</script>