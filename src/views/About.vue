<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details">
        <h2 class="my-md-3">We are the leading quiz platform in India</h2>
        <p class="my-md-3">We offer all what you need</p>
      </div>
      <div class="hero-img">
        <img class="hero-img" src="../assets/idea.png" alt="">
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