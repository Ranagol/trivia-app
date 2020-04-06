<template>
  <div class="accordion" id="accordionExample">
    <div v-for="(question, index) in questions" :key="index" class="card">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <!-- below we are displaying the question-->
          <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">{{question.question}}</button><!--the index is created during the v-for -->
        </h2>
      </div>

      <div :id="`collapse${index}`" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <!-- here we are displaying the correct answer, it will show up on click-->
        <div class="card-body">
          {{question.correct_answer}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['questions']),//questions is an array, filled with question-objects
  },
}
</script>