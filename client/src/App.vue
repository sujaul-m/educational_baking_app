<template lang="html">
  <div>
    <web-header/>
    <router-view></router-view>
    <recipe-form/>
  </div>
</template>

<script>
import ProjectService from './services/ProjectService.js';
import Header from './components/Header.vue';
import { eventBus } from './main.js';
import ProjectCard from './components/ProjectCard.vue';
import RecipeForm from './components/RecipeForm.vue';
export default {
  name: 'app',
  components: {
    'web-header': Header,
    'project-card': ProjectCard,
    'recipe-form': RecipeForm
  },
  mounted(){
    eventBus.$on('submit-recipe', (recipe) => {
      ProjectService.addProject(recipe)
        .then(recipeWithId => this.recipes.push(recipeWithId))
    });
  }
}
</script>

<style lang="css">
</style>
