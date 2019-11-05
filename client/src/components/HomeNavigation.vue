<template lang="html">
  <div align="center">
    <p align="center">Which baking project you would like to do?</p>


    <div class="menu">
      <div class="bread">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'bread' } }"> <v-img class="img" src="@/assets/icons/bread.png"></v-img>Bread</router-link>
      </div>
      <div class="cookie">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'cookie' } }"><v-img class="img" src="@/assets/icons/cookie.png"></v-img>Cookie</router-link>
      </div>
      <div class="brownie">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'brownie' } }"><v-img class="img" src="@/assets/icons/brownie.png"></v-img>Brownie</router-link>
      </div>
      <div class="cake">
        <router-link class="link-text" :to="{ name: 'projects', params: { filter: 'cake' } }"><v-img class="img" src="@/assets/icons/cake.png"></v-img>Cake</router-link>
      </div>
    </div>

    <router-link class="link-all" :to="{ name: 'projects', params: { filter: 'show-all'}}">

      <div  class="show-all">
        <h4>Show All</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home-nav'
}
</script>

</script>

<style lang="css" scoped>
h1 {
  font-family: arial, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 50px;
  color: #000000;
}
p {
  padding-top: 15px;
  font-family: arial, sans-serif;
  font-weight: 400;
  color: #757575;
  font-size: 40px;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
}
.menu > div {
  width: 20%;
  text-align: center;
  border: 5px solid #7FCBB0;
  border-radius: 25px;
  display: block;
  margin-bottom: 25px;
  margin-top: 25px;
  font-size: 36px;
  cursor: pointer;
  text-align: center;
  color: #7FCBB0;
  font-family: arial, sans-serif;
  opacity: 1.0;
}
.menu > div:hover {
  opacity: 0.7;
  filter: alpha(opacity=100);
}
a {
  text-decoration: none;
}
.link-text {
  color: #7DCEA0;
}
.show-all {
  width: 93%;
  background-color: #7DCEA0;
  padding: 14px 28px;
  font-size: 36px;
  cursor: pointer;
  text-align: center;
  font-family: arial, sans-serif;
  border-radius: 25px;
  color: white;
  opacity: 1.0;
}
.show-all:hover {
  opacity: 0.7;
  filter: alpha(opacity=100);
}
.link-all {
  color: white;
}
</style>
