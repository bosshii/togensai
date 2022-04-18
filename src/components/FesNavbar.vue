<template>
  <nav @click="drawer = false">
    <v-app-bar class="grey lighten-5" app elevate-on-scroll>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase black--text">
        <span>第10回兎原祭</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed color="pink accent-2" :to="{name: 'reservation'}">
        <span style="color:white">入場予約<v-icon right>mdi-account-plus</v-icon></span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app color="pink accent-2" v-model="drawer">
      <v-row class="d-flex flex-column" align="center">
        <v-col class="mt-5 d-flex flex-column" align="center">
          <router-link :to="{name: 'home'}"><v-img max-width="150" src="@/assets/feslogo.png" class="ma-3 align-self-center" size="100"></v-img></router-link>
        </v-col>
      </v-row>
      <v-list rounded>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item :to="{name: 'privacy'}">
          <v-list-item-action>
            <v-icon class="white--text">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">プライバシー</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-rabbit", text: "ホーム", route: "/" },
        { icon: "mdi-widgets", text: "企画一覧", route: "/programs" },
        { icon: "mdi-account-plus", text: "入場の流れ", route: "/reservation" },
        { icon: "mdi-map", text: "本校へのアクセス", route: "/access" },
        { icon: "mdi-information", text: "兎原祭について", route: "/about" },
        { icon: "mdi-account-tie-voice", text: "校長・委員長挨拶", route: "/message" },
        { icon: "mdi-cellphone-link", text: "ICT関連", route: "/ict" },
        { icon: "mdi-bullhorn", text: "お知らせ・お願い", route: "/announcements" },
      ],
    };
  },
};
</script>

<style></style>
