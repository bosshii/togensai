<template>
  <nav @click="drawer = false">
    <v-app-bar flat class="grey lighten-5" app>
      <v-app-bar-nav-icon
        class="grey lighten-4"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>{{ process.env.VUE_APP_FESNAME }}ホームページ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>メニュー</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>
              <div>
                <v-icon left>{{ link.icon }}</v-icon>
                <span>{{ link.text }}</span>
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn depressed color="blue lighten-1">
        <span>入場予約</span>
        <v-icon right>mdi-account-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app color="#9652ff" v-model="drawer">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
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
      drawer: true,
      links: [
        { icon: "mdi-widgets", text: "ホーム", route: "/" },
        { icon: "mdi-folder", text: "企画一覧・マップ", route: "/programs" },
        { icon: "mdi-account-plus", text: "入場予約についてス", route: "/reservation" },
        { icon: "mdi-map", text: "本校へのアクセス", route: "/access" },
        { icon: "mdi-information", text: "文化祭について", route: "/about" },
        { icon: "mdi-cellphone-link", text: "ICT関連", route: "/ict" },
        { icon: "mdi-account-tie-voice", text: "校長メッセージ", route: "/message" },
        { icon: "mdi-school", text: "生徒向け", route: "/forstudents" },
        { icon: "mdi-lock", text: "プライバシーポリシー", route: "/privacy" },
      ],
    };
  },
};
</script>

<style></style>
