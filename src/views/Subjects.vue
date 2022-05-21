<template>
  <Navbar />
  <div class="container">
    <div class="row" v-if="subjects.length">
      <Subject
        v-for="subject in subjects"
        :subject="subject"
        :key="subject.id"
      />
    </div>
    <Spinner v-else />
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Subject from '../components/Subject.vue'
import Spinner from '../components/Spinner.vue'
import { getSubjects } from '../api/index'

export default {
  data() {
    return {
      url: 'localhost:8000/api/exams/subjects/',
      subjects : [],
      error: '',
      isLoading: false
    }
  },
  components: {
    Navbar,
    Subject,
    Spinner
  },
  async mounted() {
    try {
      this.error = '';
      this.isLoading = true;
      const res = await getSubjects()
      if (res.status === 200) {
        this.subjects = res.data;
      } else {
        throw new Error("No subjects found");
      }
    } catch (e) {
      this.error = e.message;
      console.log(e.message);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style>
</style>