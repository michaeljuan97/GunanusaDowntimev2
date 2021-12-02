<template>
  <div id="app" class="container is-max-desktop">
    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "App",
};
</script>
 
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
#app {
margin-top: 20px;
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e51; */
  
}

</style>