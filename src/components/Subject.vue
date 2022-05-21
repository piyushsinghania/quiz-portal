<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ subject.title }}</h5>
        <p class="card-text">{{ subject.description }}</p>
        <RouterLink
          :to="`/subjects/${subject.id}/questions`"
          class="btn btn-primary"
        >
          Appear
        </RouterLink>
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
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(to right,#1f2e67 0,#3a4d95 100%);
  color: white;
  padding: 20px;
  margin-top: 20px;
}
</style>