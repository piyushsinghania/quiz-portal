<template>
  <div class="col-sm-6 mt-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ subject.title }}</h5>
        <p class="card-text">{{ subject.description }}</p>
        <a href="#" class="btn btn-outline-primary">Appear</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['subject']
}
</script>

<style>

</style>