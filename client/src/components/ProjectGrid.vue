<template lang="html">

 <div class="display">
   <div class="title-container" align="center">

     <div class="title" v-if="$route.params.filter === 'bread'">
       <h1>Bread</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'cookie'">
       <h1>Cookie</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'brownie'">
       <h1>Brownie</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'cake'">
       <h1>Cake</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'show-all'">
       <h1>All Projects</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'favourite'">
       <h1>Favourites</h1>
     </div>

     <div class="title" v-if="$route.params.filter === 'oven'">
       <h1>In The Oven</h1>
     </div>

   </div>

  <div class="grid">

    <project-card v-for="(project, index) in projects" :key="index" :project="project" />

  </div>
</div>
</template>

<script>
import { eventBus } from '../main.js'
import ProjectService from '../services/ProjectService.js'
import ProjectCard from './ProjectCard.vue'
export default {
  data(){
    return{
      projects: [],
      projectSelected: null,
      oven: []
    };
  },
  components: {
    'project-card': ProjectCard
  },
  mounted() {
    this.fetchData();
},
  methods: {
    fetchData(){
      ProjectService.getProject()
      .then(projects => this.projects = projects);
    }
  }
}
</script>

<style lang="css" scoped>
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0% 0;
  flex-grow: 1;
  flex-wrap: wrap;
}
h1 {
  font-family: arial, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 50px;
  color: black;
  padding: 25px;
}
</style>
