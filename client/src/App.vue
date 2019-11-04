<template lang="html">
  <div>
    <web-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import ProjectService from './services/ProjectService.js';
import Header from './components/Header.vue';
import { eventBus } from './main.js';
import ProjectCard from './components/ProjectCard.vue';
export default {
  name: 'app',
  components: {
    'web-header': Header,
    'project-card': ProjectCard,
  }
}
</script>

<style lang="css">
</style>
