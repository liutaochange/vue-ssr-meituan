<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{text}}
    </p>
    <button @click="reserve">reserve</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState('text', ['text'])
  },
  methods: {
    ...mapActions('text', ['reserve'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
