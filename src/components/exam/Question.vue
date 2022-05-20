<template>
  <h4 class="my-3">{{ question.question }}</h4>
  <div class="form-check mt-3" v-for="option in question.options">
    <input class="form-check-input" type="checkbox" value="" :id="option">
    <label class="form-check-label" :for="option">
      {{ option }}
    </label>
  </div>
</template>

<script>
export default {
  props: ['question']
}
</script>

<style>

</style>