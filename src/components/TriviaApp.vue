<template>
  <div>
    <h3>Trivia</h3>
    <p>We used this link to get the questions: <a href="https://opentdb.com/">https://opentdb.com/</a></p>
    <p>Here we can check how should our API url look: <a href="https://opentdb.com/api_config.php">https://opentdb.com/api_config.php</a></p>

    <!-- DROPDOWN + BUTTON -->
    <div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{chosenCategoryName}}
      </button>
      <div class="dropdown-menu">
        <a  
          v-for="category in triviaCategories" 
          :key="category.id" 
          class="dropdown-item"
          href="#"
          @click="chooseCategory(category)"
        >{{category.name}}</a>
      </div>
    </div>    

    <!--Questions.vue -->
    <app-questions></app-questions>



  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Questions from './Questions';
export default {
  name: 'TriviaApp',
  components: {
    'app-questions': Questions,
  },
  //the chuck project doesn't need an axios, because I think that is all incorporated into the chuck thingy somewhere. But, the trivia does need axios, so we have to install axios for the trivia!
  methods: {
    ...mapActions(['getTriviaCategories', 'setTriviaCategory', 'getQuestions']),
    
    chooseCategory(category){
        this.setTriviaCategory(category);
    }
  },
  computed: {
    ...mapGetters(['triviaCategories', 'chosenTriviaCategory', 'questions']),
    
    chosenCategoryName() {
    return this.chosenTriviaCategory ? this.chosenTriviaCategory.name : "Choose category";
    }
  },
  async created() {
    this.getTriviaCategories();
    await this.getQuestions();
    console.log(this.questions);
  }
}
</script>