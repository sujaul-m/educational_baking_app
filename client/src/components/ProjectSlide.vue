<template lang="html">
  <v-card v-if="project" flat>
    <div align="center">
      <h1 class="project-header">How to make {{ project.name }}!</h1>
  </div>
    <v-tabs class="tabs" v-model="tabs" background-color="transparent" color="#EA7E51" centered fixed-tabs>
      <v-tab v-for="header in headers" :key="header">
        {{ header }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">

      <v-tab-item v-if="project !== null">
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork1.png"></v-img>
          <v-card-text>
            <h2 class="tools">You Will Need The Following:</h2>
            <ul>
              <li v-if="project.steps[0][0]">{{ project.steps[0][0] }}</li>
              <li v-if="project.steps[0][1]">{{ project.steps[0][1] }}</li>
              <li v-if="project.steps[0][2]">{{ project.steps[0][2] }}</li>
              <li v-if="project.steps[0][3]">{{ project.steps[0][3] }}</li>
              <li v-if="project.steps[0][4]">{{ project.steps[0][4] }}</li>
              <li v-if="project.steps[0][5]">{{ project.steps[0][5] }}</li>
              <li v-if="project.steps[0][6]">{{ project.steps[0][6] }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork2.png"></v-img>
          <v-card-text>
            {{ project.steps[1] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork3.png"></v-img>
          <v-card-text>
            {{ project.steps[2] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork4.png"></v-img>
          <v-card-text>
            {{ project.steps[3] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork5.png"></v-img>
          <v-card-text>
            {{ project.steps[4] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork6.png"></v-img>
          <v-card-text>
            {{ project.steps[5] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card align="center" flat>
          <v-img class="slide-image" src="@/assets/Illustrations/Artwork6.png"></v-img>
          <v-card-text>
            {{ project.steps[6] }}
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>


        <v-card max-width="80%" class="mx-auto justify-center" flat>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="list-item-header">Congratulations !</v-list-item-title>
              <v-list-item-subtitle class="instructions">Would you like to:</v-list-item-subtitle>
              <v-list-item-subtitle class="instructions"><router-link class="instruction-header" :to="{ name: 'home'}">Go back to the homepage</router-link></v-list-item-subtitle>
              <v-list-item-subtitle class="instructions"><router-link class="instruction-header" :to="{ name: 'projects', params: { filter: 'show-all'}}">Start a new project</router-link></v-list-item-subtitle>
            </v-list-item-content>
            <v-img
            height="600"
            width="426"
            src="@/assets/elements/congrats.png"
            ></v-img>
          </v-list-item>
          <v-img class="last-slide-image" ></v-img>
        </v-card>
      </v-tab-item>


    </v-tabs-items>
  </v-card>

</template>


<script>
import { eventBus } from '../main.js'
import ProjectGrid from './ProjectGrid.vue'
import ProjectService from '../services/ProjectService.js'
export default {
  name: 'instructions',
  data () {
    return {
      project: null,
      headers: ['Before You Start', 'Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Complete' ],
      tabs: null
    }
  },
  props: ['projectSelected'],
  components: {
    'project-grid': ProjectGrid
  },
  mounted (){
    eventBus.$on('project-selected', (project) => {this.project = project})
  }
}
</script>

<style lang="css" scoped>
.tools{
  font-size: 30px;
  padding-bottom: 15px;
}
.tabs{
  font-family: arial, sans-serif;
  font-size: 50px;
}
.instructions{
  font-family: arial, sans-serif;
  font-size: 25px;
}
.instruction-header{
  color: inherit;
  text-decoration: underline #E8B662;
}
.list-item-header{
  font-size: 48px;
  font-family: arial, sans-serif;
  padding-bottom: 15px;
}
.v-tab{
  font-size: 16px;
}
.v-card__text{
  font-family: arial, sans-serif;
  font-size: 25px;
  width: 60%;
}
.v-card__title{
  align-content: center;
}
.slide-image {
  height: 25%;
  width: 25%;
}
.last-slide-image {
  height: auto;
}
.project-header{
  font-family: arial, sans-serif;
  padding: 5px 0px;
  font-size: 48px;
}
.v-card-text{
  font-family: arial, sans-serif;
}
ul li{
  display: inline;
  padding-right: 25px;
}
li {
  font-family: arial, sans-serif;
  font-size: 22px;
  text-decoration: underline #E8B662;
}
.final{
  width: 50%;
}
.a{
  text-decoration: underline;
}
</style>
