<template>
  <form @submit.prevent="handleSubmit" autocomplete="off">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" class="form-control" required v-model="email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" required id="password" v-model="password" />
    </div>
    <div class="error">{{ error }}</div>
    <button class="btn form-btn w-100 mb-3" :class="isLoading ? 'disabled' : ''">Log in</button>
  </form>
</template>

<script>
import { login, http } from '../../api/index'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isLoading: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.isLoading = true;
        this.error = '';

        const credentials = {
          email: this.email,
          password: this.password
        }

        const { data } = await login(credentials)
        localStorage.setItem('accessToken', JSON.stringify(data.access_token))
        http.defaults.headers.common['Authorization'] =
          `Bearer ${data.access_token}`

        this.$router.push({ name: 'subjects' })
      } catch(e) {
        this.error = e.response.data.message
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>

<style>
.form-btn {
  background-image: linear-gradient(0deg,#f58740,#f06352);
  color: white;
}
</style>