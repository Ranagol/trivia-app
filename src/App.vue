<template>
  <div id="app" class="container">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    'app-navbar': Navbar,
  }
}
</script>

<style>

</style>
