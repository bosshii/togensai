<template>
  <v-app>
    <NavBar />
    <v-main class="mx-4 mb-4 grey lighten-5">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar: () => import("./components/MyNavBar.vue"),
  },
  data() {
    return {};
  },
};
</script>
