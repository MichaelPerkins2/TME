<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      name: "John Doe",
      status: "active",
    };
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
    <h1>Vue Jobs</h1>
    <p>{{ name }}</p>
    <p v-if="status">User is active</p>
    <p v-else>User is inactive</p>
    <Footer />
  </div>
</template>

<style scoped></style>
