<template>
  <div class="container" v-if="!isLoading && question.question_text">
    <h4 class="my-3">
      <span class="q-number"> Q. {{ question.order }}&#41; </span>
      {{ question.question_text }}
    </h4>
    <div class="options">
      <div class="form-check mt-3" v-for="option in question.question_options">
        <input
          class="form-check-input"
          type="radio"
          :name="question.order"
          :value="option.option_text"
          :id="option.id"
          :checked="existingResponse ? existingResponse.id === option.id : false"
          @change="handleResponse(option)"
        />
        <label class="form-check-label" :for="option.id">
          {{ option.option_text }}
        </label>
      </div>
    </div>
  </div>
  <Spinner v-if="isLoading" />
  <div v-if="!isLoading && question.question_text" class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button
      class="btn btn-outline-success"
      @click="handlePrev"
      :class="order === 1 ? 'disabled' : ''"
    >
      Prev
    </button>
    <button
      class="btn btn-outline-primary"
      @click="handleNext"
      v-if="questionList.length !== order"
    >
      Next
    </button>
    <button
      class="btn btn-primary"
      @click="handleSubmit"
      v-if="questionList.length === order"
    >
      Submit
    </button>
  </div>
  <p class="error my-3">{{ error }}</p>
</template>

<script>
import Navbar from '../Navbar.vue';
import Spinner from '../Spinner.vue';
import { getSubjectQuestionDetail, postResponse } from '../../api/index';

export default {
  components: {
    Navbar,
    Spinner,
  },
  props: ['subjectId', 'order', 'questionList'],
  data() {
    return {
      isLoading: false,
      error: '',
      question: {},
      existingResponse: {},
    };
  },
  emits: ['updateOrder'],
  watch: {
    order: {
      immediate: true,
      handler(val, oldVal) {
        this.getQuestion(val);
      },
    },
  },
  methods: {
    handleNext() {
      this.$emit('updateOrder', this.order + 1);
    },
    handlePrev() {
      this.$emit('updateOrder', this.order - 1);
    },
    handleSubmit() {
      this.$router.push(`/report/${this.subjectId}`)
    },
    async getQuestion(order) {
      try {
        this.isLoading = true;
        this.error = '';
        const res = await getSubjectQuestionDetail(this.subjectId, order);
        if (res.status === 200) {
          this.question = res.data.question;
          this.existingResponse = res.data.existing_response_option;
        } else {
          throw new Error('Cannot load questions');
        }
      } catch (e) {
        this.error = e.message;
        console.log(e.message);
      } finally {
        this.isLoading = false;
      }
    },
    handleResponse(option) {
      postResponse(this.question.id, option.id);
    }
  },
};
</script>

<style>
.questions {
  margin: 32px auto;
}
.pagination {
  display: flex;
  gap: 10px;
}
.q-number {
  color: #758283;
  margin-right: 10px;
}
.options {
  padding-left: 50px;
}
</style>