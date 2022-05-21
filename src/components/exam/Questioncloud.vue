<template>
  <div class="question-cloud">
    <router-link class="question-number" class-active="active" to="#" exact>1</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>2</router-link>
  </div>
</template>

<script>
import { getSubjectQuestions } from '../../api/index'

export default {
  props: ['subjectId'],
  async mounted() {
     const res = await getSubjectQuestions()
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