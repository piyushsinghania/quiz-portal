<template>
  <div id="quizsection" ref="quizsection">
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
            :questionList="questionList"
            @updateOrder="handleChange"
          />
        </div>
        <div class="col-sm-12 col-lg-3">
          <Questioncloud
            :order="order"
            :questionList="questionList"
            @updateOrder="handleChange"
          />
        </div>
      </div>
    </div>
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
      questionList: [],
      order: 1,
    }
  },
  methods: {
    handleChange(order) {
      this.order = order
    }
  },
  props: ['subjectId'],
  async mounted() {
    try {
      const res = await getSubjectQuestions(this.subjectId);
      if(res.status === 200) {
        this.questionList = res.data;
      } else {
        throw new Error("Failed to load questions");
      }
    } catch(e) {
      console.log(e.message);
    }

    const elem = this.$refs.quizsection;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
}
</script>

<style>
#quizsection:fullscreen {
  background-color: white;
}
#quizsection:-webkit-full-screen {
  background: white;
}
#quizsection:-moz-full-screen {
  background: white;
}
</style>