<template>
  <div>
    <h3>Chuck Norris jokes</h3>
    <p>For the chuck jokes, we use the api on this link: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></p>

    <!--randomJoke. This part is fairly simple. The axios action is in the servece, it will be used in the actions, and it will be activated from this component with the beforeRouteEnter. With a getter we receive here the joke. That is it. -->
    <div v-if="randomJoke" class="alert alert-success" role="alert">
      {{randomJoke.value}}
    </div>

    <!--button + category. First, we need to get all categories, and that is triggered with the beforeRouteEnter. These categories are turned into a dropdown menu. We can select here a category from this dropdown, and we can request a new joke, with that category. My usual Vue/select tricks won't work, because (for now) it is impossible to combine v-model and a getter.-->

    <div class="btn-group">
      <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{chosenCategory}}</button>
      <div class="dropdown-menu">
        <a  
          v-for="category in categories" 
          :key="category" 
          class="dropdown-item"
          @click="setCategory(category)"
        >{{category}}</a>
      </div>
    </div>
    
    <button type="button" class="btn btn-success" @click="getRandomJoke(chosenCategory)">New Joke</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Chuck', 
  computed: {
    ...mapGetters(['randomJoke', 'categories', 'chosenCategory']),
  },
  methods: {
    ...mapActions(['getRandomJoke', 'getJokeCategories', 'setCategory', ]),
  },
  beforeRouteEnter(to, from, next) {
    next((vm) =>{
      vm.getRandomJoke();
      vm.getJokeCategories();
    });
  }
}
</script>

<style scoped>
/*
.inline {
  display: inline;
}
*/
</style>