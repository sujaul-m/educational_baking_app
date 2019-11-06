<template lang="html">
  <header>
    <div class="wrapper">

      <router-link :to="{ name: 'home'}"><v-img class="logo" src="@/assets/elements/logo.png"></v-img><h1 class="header">Bake It!</h1></router-link>
      <div class="mini-menu">
        <router-link class="menu" :to="{ name: 'projects', params: {filter: 'favourite' } }"><v-icon large color="#EA7E51">mdi-heart</v-icon>Favourites</router-link>
        <router-link class="menu" :to="{ name: 'projects', params: {filter: 'oven'}  }"><v-icon large color="#FF8073">mdi-pot-mix</v-icon>In the Oven</router-link>
      </div>
    </div>
  </header>


</template>

<script>
export default {
  name: 'web-header'
}
</script>

<style lang="css" scoped>
.wrapper{
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
}
header{
  background-color: #7DCEA0;
  padding: 10px 5px;
  color: white;
  width: 100%;
}

h1{
  float: left;
  font-family: arial, sans-serif;
}
.logo{
  float: left;
  width: 15%;
  height: auto;
  align: center;
}
.header{
  font-size: 66px;
}
.menu{
  padding-left: 15px;
  float: right;
  align: right;
}
a {
  text-decoration: none;
  color: white;
  font-size: 26px;
  font-family: arial, sans-serif;
  font-weight: 400;
}
.mini-menu {
  vertical-align: center;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}
</style>
