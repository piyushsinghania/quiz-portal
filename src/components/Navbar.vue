<template>
  <nav class="navbar navbar-expand-lg navbar-light portal-navbar mb-3">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Quiz Platform</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </div>
        <div v-if="!isAuthenticated" class="navbar-actions">
          <RouterLink to="/auth/login" class="btn btn-outline-primary">Login</RouterLink>
          <RouterLink to="/auth/signup" class="btn btn-outline-success">Signup</RouterLink>
        </div>
        <div v-else class="navbar-nav navbar-actions profile">
          <img class="avatar" src="../assets/Avatar.png" alt="avatar">
          <RouterLink v-if="name" to="/profile" class="nav-link">Hey {{ name }} </RouterLink>
          <RouterLink v-else to="/profile" class="nav-link">Hey User </RouterLink>
          <svg @click="handleLogout" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      isAuthenticated: false,
      name: ''
    }
  },
  mounted() {
    if(localStorage.getItem('accessToken')) {
      this.isAuthenticated = true;
      this.name = JSON.parse(localStorage.getItem('studentName'));
    };
  },
  methods: {
    handleLogout() {
      this.isAuthenticated = false;
      this.name = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('studentName');
      if(this.$route.fullPath === '/') {
        window.location.reload();
      } else {
        this.$router.push("/")
      }
    }
  }
}
</script>

<style>
.navbar-actions {
  margin-left: auto;
  display: flex;
  gap: 10px;
}
.portal-navbar {
  padding: 12px 0px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
}
.navbar-brand {
  font-size: 24px;
  margin-right: 50px;
}
.profile {
  cursor: pointer;
  flex-direction: row;
  align-items: center;
}
.avatar {
  height: 35px;
  width: 35px;
}
@media only screen and (max-width: 992px) {
  .profile {
    flex-direction: row;
  }
}
</style>