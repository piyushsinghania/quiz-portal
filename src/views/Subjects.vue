<template>
  <Navbar />
  <div class="container">
    <Subject v-for="subject in subjects" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Subject from '../components/Subject.vue'

export default {
  data() {
    return {
      url: 'localhost:8000/api/exams/subjects/'
    }
  },
  components: {
    Navbar,
    Subject
  },
  async mounted() {
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(data);
  }
}
</script>

<style>

</style>