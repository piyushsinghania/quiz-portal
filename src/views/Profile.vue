<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details">
        <h2 class="my-md-3">Profile</h2>
        <Button @click="handleLogout" class="btn btn-primary my-lg-3">
          Logout
        </Button>
      </div>
      <div class="hero-img">
        <img class="hero-img" src="../assets/profile.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('accessToken');
      this.$router.push("/");
    }
  }
}
</script>