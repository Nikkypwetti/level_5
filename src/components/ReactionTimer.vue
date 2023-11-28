<template>
    <div>
        <h3>Reaction Timer Game</h3>
        <button class="btn btn-md bg-success text-light px-1" @click="startGame">Play</button>
        <BlockComponent v-if="isPlaying" :divDelay="delay" @result="gameResult"/>
        <ResultComponent :result="result"/>
    </div>
</template>

<script>
    import BlockComponent from './BlockComponent.vue'
    import ResultComponent from './ResultComponent.vue'

export default {
    name:'ReactionTimer',
    components: {
        BlockComponent,
        ResultComponent,

    },
    data() {
        return {
            delay: null,
            isPlaying: false,
            result: null,
        }
    },
    methods: {
        startGame() {
            this.isPlaying = true;
            this.delay = Math.random() * 5000;        
        },
        gameResult(res) {
            // console.log(res);
            this.result = res

        },
    }
}
</script>