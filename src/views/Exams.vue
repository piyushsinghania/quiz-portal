<template>
  <div class="container">
    <QuizExam />
    <Questioncloud class="questions-bar" />
  </div>
</template>

<script>
import QuizExam from '../components/exam/QuizExam.vue'
import Questioncloud from '../components/exam/Questioncloud.vue'

export default {
  components: {
    QuizExam,
    Questioncloud
  }
}
</script>

<style>
.questions-bar {
  position: fixed;
  /* border: 2px solid red; */
  top: 150px;
  right: 50px;
  max-width: 300px;
}
</style>