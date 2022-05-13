<template>
  <nav class="navbar navbar-expand-lg navbar-light portal-navbar">
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
        <div class="navbar-actions">
          <RouterLink to="/auth/login" class="btn btn-outline-primary">Login</RouterLink>
          <RouterLink to="/auth/signup" class="btn btn-outline-success">Signup</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {

}
</script>

<style>
.navbar-actions {
  margin-left: auto;
  display: flex;
  gap: 10px;
}
.portal-navbar {
  padding: 20px 0px;
  font-size: 18px;
}
.navbar-brand {
  font-size: 32px;
  margin-right: 50px;
}
</style>