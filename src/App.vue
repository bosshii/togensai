<template>
  <v-app>
    <v-app-bar class="grey lighten-5" app dense elevate-on-scroll>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase black--text mt-1">
        <span><router-link :to=" { name: 'home' } "><img src="/wordmark.svg" alt="第10回兎原祭" width="80%"></router-link></span>
      </v-toolbar-title>
      <template v-slot:extension>
      <div class="topbtn">
      <v-btn depressed outlined color="red accent-2" style="padding: 0px 4px; border-width: 3px;" :to="{name: 'radio'}">
        <span>お便り緊急募集!<v-icon>mdi-email-outline</v-icon></span>
      </v-btn>
      &nbsp;
      <v-btn depressed color="pink accent-2" :to="{name: 'reservation'}">
        <span style="color:white">入場予約<v-icon>mdi-account-plus</v-icon></span>
      </v-btn></div>
      </template>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="pink accent-2" >
      <v-row class="d-flex flex-column" align="center">
        <v-col class="mt-5 d-flex flex-column" align="center">
          <router-link :to="{name: 'home'}"><v-img max-width="150" src="@/assets/feslogo.png" class="ma-3 align-self-center" size="100"></v-img></router-link>
        </v-col>
      </v-row>
      <v-list nav rounded>
        <template v-for="nav_list in nav_lists">
          <v-list-item style="color:white" v-if="!nav_list.lists"  :to="nav_list.link" :key="nav_list.name" @click="menu_close">
            <v-list-item-icon>
              <v-icon class="white--text">{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else no-action color="white" :key="nav_list.name" v-model="nav_list.active">
            <v-icon slot="prependIcon" color="white">{{ nav_list.icon }}</v-icon>
            <v-icon slot="appendIcon" color="white">$expand</v-icon>
            <template v-slot:activator>
              <v-list-item-content class="white--text">
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
              <v-list-item-title class="white--text">{{ list.name }}</v-list-item-title>
              <v-list-item-icon><v-icon v-text="list.icon" color="white"></v-icon></v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </template>
        <v-divider></v-divider>
        <v-list-item style="color:white" :to="{name: 'privacy'}" @click="menu_close">
          <v-list-item-icon><v-icon class="white--text">mdi-lock</v-icon></v-list-item-icon>
          <v-list-item-content><v-list-item-title>プライバシー</v-list-item-title></v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="mx-4 mb-4 grey lighten-5">
      <router-view />
    </v-main>
    <FesFooter />
  </v-app>
</template>
<script>
export default {
  name: "10thTogensai",
  components: {
    FesFooter: () => import("./components/FesFooter.vue"),
  },
  methods:{
          menu_close(){
            this.nav_lists.forEach( nav_list => nav_list.active = false)
          }
        },
  data(){
    return{
          drawer: false,
          nav_lists:[
            {
              name: 'ホーム',
              icon: 'mdi-rabbit',
              link: '/'
            },
            {
              name: '企画',
              icon: 'mdi-widgets',
              active: false,
              link: '/programs',
              lists:[
                {
                  name:'企画一覧',link:'/programs/list',icon:'mdi-magnify'
                },
                {
                  name:'タイムテーブル',link:'/programs/timetable',icon:'mdi-clock'
                },
                {
                  name:'とげラジ',link:'/programs/radio',icon:'mdi-radio'
                },
                {
                  name:'K-1グランプリ',link:'/programs/k-1',icon:'mdi-crown'
                }
                
              ]
            },
            {
              name: '兎原祭について',
              icon: 'mdi-information',
              link: '/about'
            },
            {
              name: '入場の流れ',
              icon: 'mdi-account-plus',
              link: '/reservation'
            },
            {
              name: '本校へのアクセス',
              icon: 'mdi-map',
              link: '/access'
            },
            {
              name: '校長・委員長挨拶',
              icon: 'mdi-account-tie-voice',
              link: '/message'
            },
            {
              name: 'お知らせ・お願い',
              icon: 'mdi-bullhorn',
              link: '/announcements'
            },
            {
              name: '来場者アンケート',
              icon: 'mdi-message-text',
              link: '/survey'
            },
            {
              name: 'このサイトについて',
              icon: 'mdi-cellphone-link',
              link: '/ict'
            },
          ]
    }
  }
}
</script>
<style>
a {
  text-decoration:none;
}
.text-h3 {
  border-bottom: solid 3px #E91E63;
}
.text-h4 {
  padding: 0rem 0rem 0rem 2rem;
  border-left: 4px solid #EC407A;
}
.v-toolbar__extension {
  display: grid;
  justify-content: right;
  padding: 0px 16px 0px 50px!important;
}
</style>
