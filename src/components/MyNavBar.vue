<template>
  <nav @click="drawer = false">
    <v-app-bar flat class="grey lighten-5" app>
      <v-app-bar-nav-icon
        class="grey lighten-4"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">First</span>
        <span>ToolBar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>
              <div>
                <v-icon left>{{ link.icon }}</v-icon>
                <span>{{ link.text }}</span>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn depressed color="grey lighten-5">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app color="#9652ff" v-model="drawer">
      <v-row class="d-flex flex-column" align="center">
        <v-col class="mt-5 d-flex flex-column" align="center">
          <v-avatar color="blue" class="ma-3 align-self-center" size="100">
            <span>Mic</span>
          </v-avatar>
          <span>Michael Medina</span>
        </v-col>
        <v-col class="d-flex justify-center">
          <Popup />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-row>
          <v-col>
            <v-avatar color="blue" class="ma-3">
              <span>Mic</span>
            </v-avatar>
            <span class="white--text">Michael Medina</span>
          </v-col>
        </v-row>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {
    Popup: () => import("./NavPopup.vue"),
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-widgets", text: "DashBoard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style></style>
