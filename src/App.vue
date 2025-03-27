<script>
import Header from "@/components/Header.vue";
import Home from "@/pages/Home.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
import apiClient from './api.js';


export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div id="app" class="d-flex flex-column ">
    <Header />
    <RouterView />
    <!-- <Home /> -->
    <Footer />
  </div>
</template>

<style>
#app {
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

</style>
