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
    <button class="btn form-btn w-100 mb-3">Log in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.password)
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