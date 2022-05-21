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
          <RouterLink to="/profile" class="nav-link">Hey Piyush</RouterLink>
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
    }
  },
  mounted() {
    if(localStorage.getItem('accessToken')) {
      this.isAuthenticated = true;
    };
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