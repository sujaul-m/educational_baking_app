<template lang="html">
  <div >
    <project-grid />
    <router-view id="projects"></router-view>
  </div>
</template>

<script>
import ProjectGrid from '../components/ProjectGrid.vue';
export default {
  name: 'project',
  components: {
    'project-grid': ProjectGrid
  }
}
</script>

<style>
</style>
