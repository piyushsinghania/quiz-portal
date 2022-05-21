<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light portal-navbar">
      <span class="navbar-brand">Quiz Platform</span>
    </nav>
    <div class="row">
      <div class="col-sm-12 col-lg-9">
        <QuizExam :subjectId="subjectId" />
      </div>
      <div class="col-sm-12 col-lg-3">
        <Questioncloud :subjectId="subjectId" />
      </div>
    </div>
  </div>
</template>

<script>
import QuizExam from '../components/exam/QuizExam.vue'
import Questioncloud from '../components/exam/Questioncloud.vue'

export default {
  components: {
    QuizExam,
    Questioncloud
  },
  data() {
    return {
      questions: [],
    }
  },
  props: ['subjectId'],
}
</script>

<style>
.questions-bar {

}
</style>