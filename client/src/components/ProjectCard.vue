<template lang="html">
  <div align="center">

    <div v-if="$route.params.filter === 'bread'">
      <div v-if="this.project.bread === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <br>
          <h3>{{ project.name}}</h3>
          <br>
          <br>
          <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
          <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
          <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot</v-icon></button>
          <button v-if="project.inOven === true" type="button" name="oven"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'cookie'">
      <div v-if="this.project.cookie === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <br>
          <h3>{{ project.name}}</h3>
          <br>
          <br>
          <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
          <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
          <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
          <button v-if="project.inOven === true" type="button" name="oven"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'brownie'">
      <div v-if="this.project.brownie === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <br>
          <h3>{{ project.name}}</h3>
          <br>
          <br>
          <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
          <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
          <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
          <button v-if="project.inOven === true" type="button" name="oven"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'cake'">
      <div v-if="this.project.cake === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <br>
          <h3>{{ project.name}}</h3>
          <br>
          <br>
          <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
          <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
          <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
          <button v-if="project.inOven === true" type="button" name="oven"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'favourite'">
      <div v-if="this.project.favourite === true" class="project-card" @click="handleClick">
        <router-link :to="{ name: 'instructions'}">
          <br>
          <h3>{{ project.name}}</h3>
          <br>
          <br>
          <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
          <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
        </router-link>
        <div class="button-flex">
          <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
          <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
          <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
          <button v-if="project.inOven === true" type="button" name="oven"
          @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
        </div>
      </div>
    </div>

    <div v-if="$route.params.filter === 'oven'">
      <div v-if="this.project.inOven ===true" class= "project-card"
      @click="handleClick">
      <router-link :to="{ name: 'instructions' }">
        <br>
        <h3>{{ project.name}}</h3>
        <br>
        <br>
        <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
        <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
      </router-link>
      <div class="button-flex">
        <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
        <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
        <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
        <button v-if="project.inOven === true" type="button" name="oven"
        @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
      </div>
    </div>
  </div>

  <div v-if="$route.params.filter === 'show-all'">
    <div class= "project-card"
    @click="handleClick">
    <router-link :to="{ name: 'instructions' }">
      <br>
      <h3>{{ project.name}}</h3>
      <br>
      <br>
      <p><span style="font-weight:bold">Type:</span> {{ project.bakeType }}</p>
      <p><span style="font-weight:bold">Cooking Time:</span> {{ project.cookingTime }}</p>
    </router-link>
    <div class="button-flex">
      <button v-if="project.favourite === false" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart-outline</v-icon></button>
      <button v-if="project.favourite === true" type="button" name="favourite" @click="handleFavourite(project._id, project)"><v-icon large color="#EA7E51">mdi-heart</v-icon></button>
      <button v-if="project.inOven === false" type="button" name="oven" @click="handleProgress(project._id, project)" ><v-icon large color="#FF8073">mdi-pot</v-icon></button>
      <button v-if="project.inOven === true" type="button" name="oven"
      @click="handleProgress(project._id, project)"><v-icon large color="#FF8073">mdi-pot-mix</v-icon></button>
    </div>
  </div>
</div>

</div>

</template>

<script>
import { eventBus } from '../main.js'
import Router from 'vue-router';
import ProjectService from '../services/ProjectService.js'
export default {
  name: 'project-card',
  data () {
    return {
      info: []
    }
  },
  props: ['project'],
  components: {
    'router': Router,
  },
  methods: {
    handleClick() {
      eventBus.$emit('project-selected', this.project)
    },
    handleFavourite(id, project) {
      project.favourite = !project.favourite
      ProjectService.updateProject(id, project)
    },
    handleProgress(id, project) {
      project.inOven = !project.inOven
      ProjectService.updateProject(id, project)
    }
  }
}
</script>

<style lang="css" scoped>
  .project-card {
    background-color: #7DCEA0;
    display: table;
    border-radius: 25px;
    padding: 15px;
    margin: 10px;
    opacity: 1.0;
    display: flex;
    flex: 1 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    width: 350px;
  }
  h3 {
    color: white;
    font-family: arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 36px;
  }
  p {
    color: white;
    font-family: arial, sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 24px;
    text-align: center;
  }
  span {
    font-style: bold;
  }
  a {
    text-decoration: none;
  }
  .project-card:hover {
    opacity: 0.7;
    filter:alpha(opacity=100);
  }
  .button-flex button {
    display: table-cell;
    vertical-align: bottom;
    margin-bottom: 5px;
  }
</style>
