<template>
  <Navbar />
  <div class="container">
    <div class="hero">
      <div class="hero-details">
        <h2 class="my-md-3">Take the first step to know your depth!</h2>
        <p class="my-md-3">India's #1 free online quiz platform</p>
        <RouterLink to="/auth/login" class="btn btn-primary my-lg-3">Take Exam</RouterLink>
      </div>
      <div class="hero-img">
        <img class="hero-img" src="../assets/study-for-exam.png" alt="">
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

<style>
.hero {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to right,#1f2e67 0,#3a4d95 100%);
  color: white;
  padding: 60px 0px;
  margin: 20px auto;
}
.hero-img {
  width: 340px;
}
.hero-img > img {
  max-width: 100%;
  height: auto;
}
@media only screen and (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
  .hero-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    margin-bottom: 64px;
    text-align: center;
    margin: 16px 24px;
  }
  .hero-details > h2 {
    font-size: 24px;
  }
}
@media only screen and (max-width: 576px) {
  .hero-details > h2 {
    font-size: 20px;
  }
  .hero-img {
    width: 280px;
  }
}
</style>