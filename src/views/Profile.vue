<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details" v-if="!loading && !error">
        <h2 class="my-md-3">Profile</h2>
        <h6 class="my-md-3">Display Name : {{ profile.full_name }}</h6>
        <h6 class="my-md-3">Email : {{ profile.email }}</h6>
        <Button @click="handleLogout" class="btn btn-primary my-lg-3">
          Logout
        </Button>
      </div>
      <div class="hero-details" v-else-if="error">
        <p>{{ error }}</p>
      </div>
      <Spinner v-else />
      <div class="hero-img">
        <img class="hero-img" src="../assets/profile.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Spinner from '../components/Spinner.vue'
import { getProfileDetails } from '../api/index'

export default {
  components: {
    Navbar,
    Spinner
  },
  data() {
    return {
      profile: {},
      loading: false,
      error: ''
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('studentName');
      this.$router.push("/");
    }
  },
  async mounted() {
    try {
      this.loading = true;
      this.error = '';
      const res = await getProfileDetails();
      if(res.status === 200) {
        this.profile = res.data;
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