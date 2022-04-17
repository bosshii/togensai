<template>
  <v-app>
    <NavBar />
    <v-main class="mx-4 mb-4 grey lighten-5">
      <router-view />
    </v-main>
    <FesFooter />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import("./components/FesNavbar.vue"),
    FesFooter: () => import("./components/FesFooter.vue"),
  },
  data() {
    return {};
  },
};
</script>

<style>
.text-h3 {
  border-bottom: solid 3px #E91E63;
}
.text-h4 {
  padding: 0rem 2rem;
  border-left: 4px solid #EC407A;
}
</style>