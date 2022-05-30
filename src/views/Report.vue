<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details" v-if="!loading && !error">
        <h2 class="my-md-3">Report</h2>
        <h5 class="my-md-3">Subject : {{ subject.title }}</h5>
        <h5 class="my-md-3">Score : {{ score }}</h5>
      </div>
      <div class="hero-details" v-else-if="error">
        <p>{{ error }}</p>
      </div>
      <Spinner v-else />
      <div class="hero-img" v-if="!loading">
        <img class="hero-img" src="../assets/report.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Spinner from '../components/Spinner.vue'
import { getReport, getSubjectDetails } from '../api/index'

export default {
  components: {
    Navbar,
    Spinner
  },
  data() {
    return {
      score: 0,
      subject: {},
      error: '',
      loading: false,
    }
  },
  async mounted() {
    try {
      this.loading = true;
      this.error = '';
      const subjectRes = await getSubjectDetails(this.$route.params.id);
      const scoreRes = await getReport(this.$route.params.id);
      if(subjectRes.status === 200 && scoreRes.status === 200) {
        this.score = scoreRes.data.score || 0;
        this.subject = subjectRes.data;
      } else {
        throw new Error("Failed to fetch details")
      }
    }
    catch(e) {
      this.error = e.message;
    }
    finally {
      this.loading = false;
    }
  }
}
</script>