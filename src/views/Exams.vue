<template>
  <nav class="navbar navbar-expand-lg navbar-light portal-navbar mb-3">
    <div class="container">
      <span class="navbar-brand">Quiz Platform</span>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-9">
        <QuizExam
          :subjectId="subjectId"
          :order="order"
          @updateOrder="handleChange"
        />
      </div>
      <div class="col-sm-12 col-lg-3">
        <Questioncloud
          :subjectId="subjectId"
          :order="order"
          @updateOrder="handleChange"
        />
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
      order: 1,
    }
  },
  methods: {
    handleChange(order) {
      this.order = order
    }
  },
  props: ['subjectId'],
}
</script>

<style>
</style>