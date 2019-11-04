<template lang="html">
  <div >
    <home-nav />
  </div>
</template>

<script>
import HomeNavigation from '../components/HomeNavigation.vue';
export default {
  name: 'home',
  components: {
    'home-nav': HomeNavigation
  }
}
</script>

<style>
</style>
