<template>
  <Navbar />
  <div id="app"> 
    <router-view/>
  </div>
</template>

<script>
// Importing Navbar component
import Navbar from './components/Navbar.vue';

export default {
  // Registering Navbar component
  components: {
    Navbar,
  },
  // Name of the root component
  name: 'App',
}
</script>


<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
