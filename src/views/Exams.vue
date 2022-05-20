<template>
  <div class="container">
    <QuizExam :questions="questions" />
    <Questioncloud class="questions-bar" />
  </div>
</template>

<script>
import QuizExam from '../components/exam/QuizExam.vue'
import Questioncloud from '../components/exam/Questioncloud.vue'
import { getSubjectQuestions } from '../api/index'

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
  async mounted() {
    try {
      const res = await getSubjectQuestions(this.subjectId);
      this.questions = res.data;
    } catch(e) {
      console.log(e.message);
    }
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