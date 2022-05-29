<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details">
        <h2 class="my-md-3">Report</h2>
        <p class="my-md-3">You haven't appeared any exams yet</p>
      </div>
      <div class="hero-img">
        <img class="hero-img" src="../assets/report.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>