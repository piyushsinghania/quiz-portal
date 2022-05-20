<template>
  <RouterView />
</template>


<script>
import { RouterView } from 'vue-router'
import { http } from './api/index'

export default {
  created() {
    const accessTokenString = localStorage.getItem('accessToken');
    if(accessTokenString) {
      const accessToken = JSON.parse(accessTokenString);
      http.defaults.headers.common['Authorization'] =
        `Bearer ${accessToken}`
    }
  }
}

</script>

<style>
</style>
