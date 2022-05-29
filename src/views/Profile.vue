<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details">
        <h2 class="my-md-3">Profile</h2>
        <Button @click="$router.push('/report')" class="btn btn-success my-lg-3">
          Report
        </Button>
        <Button @click="handleLogout" class="btn btn-primary my-lg-3 mx-2">
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
import { getProfileDetails } from '../api/index'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      profile: {}
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('accessToken');
      this.$router.push("/");
    }
  },
  async mounted() {
    // this.profile = await getProfileDetails();
    // console.log(this.profile)
  }
}
</script>