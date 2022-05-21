<template>
  <div class="question-cloud">
    <div
      class="question-number"
      v-for="question in questions"
      :key="question.id"
      @click="$emit('changeQuestion', question.order)"
    >
      {{ question.order }}
    </div>
  </div>
</template>

<script>
import { getSubjectQuestions } from '../../api/index'

export default {
  props: ['subjectId'],
  data() {
    return {
      questions: []
    }
  },
  async mounted() {
     const res = await getSubjectQuestions(this.subjectId);
     this.questions = res.data;
  }
}
</script>

<style>
.question-cloud {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 50px auto;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.question-number {
  text-decoration: none;
  color: #212121;
  padding: 10px 20px;
  background: #CAD5E2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.question-number:hover {
  background: #35BDD0;
  color: white;
}
</style>