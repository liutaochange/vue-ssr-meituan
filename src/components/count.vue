<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['increment', 'decrement'])
    }
  }
</script>

<style scoped>

</style>