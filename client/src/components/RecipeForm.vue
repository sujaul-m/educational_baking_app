<template lang="html">
  <div class="main-block">
  <form v-on:submit.prevent="handleSubmit">
    <h1>Add a Recipe</h1>
    <label for="name">Recipe Name:</label>
    <input type="text" id="name" name="name" v-model="name" required/>
    <br>
    <br>
    <label for="bakeType">Bake Type:</label>
    <input type="text" id="bakeType" name="bakeType" v-model="bakeType" required/>
    <br>
    <br>
    <label for="bread">Bread:</label>
    <input type="checkbox" id="bread" name="bread" v-model="bread">
    <br>
    <label for="cookie">Cookie:</label>
    <input type="checkbox" id="cookie" name="cookie" v-model="cookie">
    <br>
    <label for="brownie">Brownie:</label>
    <input type="checkbox" id="brownie" name="brownie" v-model="brownie">
    <br>
    <label for="cake">Cake:</label>
    <input type="checkbox" id="cake" name="cake" v-model="cake">
    <br>
    <br>
    <label for="cookingTime">Cooking Time:</label>
    <input type="text" id="cookingTime" name="cookingTime" v-model="cookingTime" required/>
    <br>
    <br>
    <label for="favourite">Add to Favourites:</label>
    <input type="checkbox" id="favourite" name="favourite" v-model="favourite">
    <br>
    <label for="inOven">Add to the Oven:</label>
    <input type="checkbox" id="inOven" name="inOven" v-model="inOven">
    <br>
    <br>
    <label for="description">Description:</label>
    <input type="text" id="description" name="description" v-model="description" required/>
    <br>
    <br>
    <br>
    <br>
    <label for="steps">Ingredients:</label>
    <input type="text" id="steps" name="steps[]" v-model="steps" required/>
    <br>
    <br>
    <input type="submit" name="submit" value="Save" />
  </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  name: "recipe-form",
  data() {
    return {
      name: "",
      bakeType: "",
      bread: false,
      cookie: false,
      brownie: false,
      cake: false,
      cookingTime: "",
      favourite: false,
      inOven: false,
      description: "",
      steps: ""
    };
  },
  methods: {
    handleSubmit() {
      eventBus.$emit("submit-recipe", this.$data);
      this.name = "";
      this.bakeType = "";
      this.bread = false,
      this.cookie = false,
      this.brownie = false,
      this.cake = false,
      this.favourite = false,
      this.inOven = false,
      this.cookingTime = "";
      this.description = "";
      this.steps = "";
    }
  }
};
</script>

<style lang="css" scoped>
form {
     padding: 25px;
     margin: 25px;
     box-shadow: 0 2px 5px #f5f5f5;
     background: #f5f5f5;
}

.main-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #1c87c9;
}

input {
  padding: 7px;
  margin: 0 10px;
  background: white;
}

input[type="submit"] {
  background: lightblue;
  border-radius: 0;
  border: none;
  font-size: 16px;
  color: #333;
  padding: 5px 10px;
  display: block;
  margin-top: 20px;
  cursor: pointer;
}
</style>
