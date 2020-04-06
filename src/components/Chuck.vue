<template>
  <div>
    <h3>Chuck Norris jokes</h3>
    <p>For the chuck jokes, we use the api on this link: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></p>

    <!--randomJoke. This part is fairly simple. The axios action is in the servece, it will be used in the actions, and it will be activated from this component with the beforeRouteEnter. With a getter we receive here the joke. That is it. -->
    <div v-if="randomJoke" class="alert alert-success" role="alert">
      {{randomJoke.value}}
    </div>

    <!--button + category. First, we need to get all categories, and that is triggered with the beforeRouteEnter. These categories are turned into a dropdown menu (a tags with v-for). We can select here a category from this dropdown with @click="setCategory(category)".
    My usual Vue/select tricks won't work, because (for now) it is impossible to combine v-model and a getter. The dropdown menu will not work without the 3 Bootstrap additional js link, that goes in the bottom of the page, in index.html. The dropdown menu is usually a button + <a></a> tag.
    The chosenCategory was set up by us to have a default value (dev) in the central store, and this can be changed with the categories.
     -->

    <div class="btn-group">
      <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{chosenCategory}}</button><!--This is the button part of the dropdown menu.  -->
      <div class="dropdown-menu"><!--Below we have the a tag part of the dropdown menu. -->
        <a  
          v-for="category in categories" 
          :key="category" 
          class="dropdown-item"
          @click="setCategory(category)"
        >{{category}}</a>
      </div>
    </div>
    
    <button type="button" class="btn btn-success" @click="getRandomJoke(chosenCategory)">New Joke</button>
    <!--The chosenCategory argument is coming from mapGetters, and it was set up by the  @click="setCategory(category)", which activated a mapActions function. -->
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

