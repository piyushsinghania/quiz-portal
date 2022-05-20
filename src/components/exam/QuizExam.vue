<template>
  <nav class="navbar navbar-expand-lg navbar-light portal-navbar">
    <span class="navbar-brand">Quiz Platform</span>
  </nav>
  <div class="questions" v-for="question in questions">
    <Question :question="question" />
  </div>
</template>

<script>
import Navbar from '../Navbar.vue'
import Question from './Question.vue'

export default {
  components: {
    Question,
    Navbar
  },
  data() {
    return {
      questions: [
        {
          question: "Why we have to wake up at 8?",
          options: [
            "We should not wake up",
            "We have lab classes"
          ]
        },
        {
          question: "Why do we need to go to college?",
          options: [
            "Because college will give degree"
          ]
        }
      ]
    }
  },
}
</script>

<style>
.questions {
  margin: 32px auto;
}
</style>