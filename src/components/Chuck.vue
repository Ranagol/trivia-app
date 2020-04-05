<template>
  <div>
    <p>Chuck</p>
    <p>For the chuck jokes, we use the api on this link: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></p>
    <div v-if="randomJoke" class="alert alert-success" role="alert">
      {{randomJoke.value}}
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Chuck',
  computed: {
    ...mapGetters(['randomJoke']),
  },
  methods: {
    ...mapActions(['getRandomJoke']),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) =>{
      vm.getRandomJoke();
      console.log('beforeRouteEnter activated');
      //vm.getJokeCategories();
    });
  }


  
}
</script>