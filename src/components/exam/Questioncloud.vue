<template>
  <div class="question-cloud">
    <router-link class="question-number" class-active="active" to="#" exact>1</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>2</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>3</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>4</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>5</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>6</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>7</router-link>
    <router-link class="question-number" class-active="active" to="#" exact>8</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.question-cloud {
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}
.question-number {
  text-decoration: none;
  color: #212121;
  padding: 10px 20px;
  background: #CAD5E2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.question-number:hover {
  background: #35BDD0;
  color: white;
}
</style>