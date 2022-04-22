<template>
  <v-app>
  <v-navigation-drawer app v-model="drawer" clipped >
    <v-container>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title grey--text text--darken-2">
            Navigation lists
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

<v-list nav dense>
    <template v-for="nav_list in nav_lists">
        <v-list-item
            v-if="!nav_list.lists" 
            :to="nav_list.link"
            :key="nav_list.name"
              @click="menu_close"
        >
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ nav_list.name }}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-group
            v-else
            no-action
            :prepend-icon="nav_list.icon"
            :key="nav_list.name"
            v-model="nav_list.active"
        >
            <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ nav_list.name }}
                  </v-list-item-title>
                </v-list-item-content>
            </template>
            <v-list-item
                v-for="list in nav_list.lists"
                :key="list.name"
                :to="list.link"
            >
            <v-list-item-title>
              {{ list.name }}
            </v-list-item-title>
            </v-list-item>
        </v-list-group>
    </template>
</v-list>

    </v-container>
  </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>

    </v-app-bar>

    <v-footer color="primary" dark app>
      Vuetify
    </v-footer>
  </v-app>
</template>


<script>
export default {
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
              name: '企画',
              icon: 'mdi-widgets',
              active: false,
              link: '',
              lists:[
                {
                  name:'企画一覧',link:'/programs'
                },
                {
                  name:'とげラジ',link:'/programs/radio'
                }
              ]
            },
            {
              name: 'お知らせ・お願い',
              icon: 'mdi-bullhorn',
              link: '/announcements'
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
<style></style>
