<template>
  <div class="auth">
    <div class="form-container">
      <div v-if="isLogin">
        <h2 class="my-3 text-center">Login</h2>
        <Login @login="" />
        <p>
          No accounts yet?
          <span @click="isLogin = false">Signup</span> instead
        </p>
      </div>
      <div v-else>
        <h2 class="my-3 text-center">Sign up</h2>
        <Signup @signup="" />
        <p>
          Already registered?
          <span @click="isLogin = true">Login</span> instead
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/auth/login.vue'
import Signup from '../components/auth/signup.vue'

export default {
  data() {
    return {
      isLogin: false
    }
  },
  components: {
    Login,
    Signup
  },
  mounted() {
    this.isLogin = this.$route.params.id === 'login'
  }
}
</script>

<style>
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg,#f58740,#f06352);
  height: 100vh;
}
.form-container {
  background: white;
  z-index: 2;
  height: 520px;
  width: 60%;
  min-width: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.form-container > form {
  width: 400px;
  margin: 20px auto;
}
@media only screen and (max-width: 576px) {
  .form-container form {
    width: 280px;
  }
}
.form-container span {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  color: #f58740;
}
.error {
  color: #ff3f80;
  font-size: 14px;
}
</style>