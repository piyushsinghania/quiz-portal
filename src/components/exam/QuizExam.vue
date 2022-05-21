<template>
  <nav class="navbar navbar-expand-lg navbar-light portal-navbar">
    <span class="navbar-brand">Quiz Platform</span>
  </nav>
  <div class="questions" v-if="!isLoading">
    <h4 class="my-3">{{ question.question_text }}</h4>
    <div class="form-check mt-3" v-for="option in question.question_options">
      <input class="form-check-input" type="checkbox" :value="option.option_text" :id="option.id">
      <label class="form-check-label" :for="option.id">
        {{ option.option_text }}
      </label>
    </div>
  </div>
  <Spinner v-else />
  <div v-if="!isLoading" class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button class="btn btn-outline-success" @click="handlePrev">Prev</button>
    <button class="btn btn-outline-primary" @click="handleNext">Next</button>
  </div>
  <p class="error">{{ error }}</p>
</template>

<script>
import Navbar from '../Navbar.vue'
import Spinner from '../Spinner.vue'
import { getSubjectQuestionDetail } from '../../api/index'

export default {
  components: {
    Navbar,
    Spinner
  },
  props: ['subjectId'],
  data() {
    return {
      order: 1,
      isLoading: false,
      error: '',
      question: {}
    }
  },
  methods: {
    handleNext() {
      this.order += 1;
      this.getQuestion();
    },
    handlePrev() {
      this.order -= 1;
      this.getQuestion();
    },
    async getQuestion() {
      try {
        this.isLoading = true;
        this.error = '';
        const res = await getSubjectQuestionDetail(this.subjectId, this.order);
        if(res.status === 200) {
          this.question = res.data.question;
          console.log(res);
        } else {
          throw new Error('Cannot load questions');
        }
      } catch(e) {
        this.error = e.message;
        console.log(e.message);
      } finally {
        this.isLoading = false;
      }
    }
  },
  mounted() {
    this.getQuestion();
  }
}
</script>

<style>
.questions {
  margin: 32px auto;
}
.pagination {
  display: flex;
  gap: 10px;
}
</style>