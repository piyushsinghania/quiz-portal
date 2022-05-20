<template>
  <h4 class="my-3">{{ question.question_text }}</h4>
  <div class="form-check mt-3" v-for="option in question.question_options">
    <input class="form-check-input" type="checkbox" :value="option.option_text" :id="option.id">
    <label class="form-check-label" :for="option.id">
      {{ option.option_text }}
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