<template>
 <div class="Home">
  <template>
   <section class="home-c mx-n4">
    <v-container fluid fill-height padless class="home-content">
     <v-row>
      <v-col class="home-content-text">
          <div class="text-h1">兎原祭</div>
      </v-col>
     </v-row>
    </v-container>
   </section>
  </template>
  <template>
    <v-container fluid style="min-height: 434px">
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
          <v-carousel cycle hide-delimiter-background show-arrows-on-hover height="auto" style="max-width:500px">
            <v-carousel-item><router-link :to=" { name: 'k1' } "><v-img src="/hometop_k-1.png"></v-img></router-link></v-carousel-item>
            <v-carousel-item><router-link :to=" { name: 'home' } "><v-img src="/hometop_bekuss.jpg"></v-img></router-link></v-carousel-item>
            <v-carousel-item><router-link :to=" { name: 'home' } "><v-img src="/hometop_boad.jpg"></v-img></router-link></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
          <v-card elevation="2" color="pink lighten-4" loading tile>
            <v-card-text><div class="text-body-1" style="color:black">
              今年の兎原祭では、新型コロナウィルス感染拡大防止のため、入場を<b>完全予約制</b>といたします。<router-link class="text-decoration-none" :to=" { name: 'reservation' } ">入場予約について詳しく見る➪</router-link>
            </div></v-card-text>
          </v-card>
          <v-card rounded="xl" class="rounded-tl-0 my-2"><v-card-title class="text-h6"><v-icon color="primary">mdi-lightbulb-on</v-icon>&nbsp;&nbsp;
            <router-link class="text-decoration-none" :to=" { name: 'about' } ">兎原祭とは？</router-link>&nbsp;/&nbsp;<router-link class="text-decoration-none" :to=" { name: 'programs' } ">企画一覧</router-link>
          </v-card-title></v-card>
          <v-card rounded="xl" class="rounded-tl-0"><v-card-title class="text-h6"><v-icon color="primary">mdi-information-outline</v-icon>&nbsp;&nbsp;お知らせ</v-card-title>
            <v-card-text style="color:black">
              あああ
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/pickup_1.jpg" class="white--text" height="auto"></v-img>
            <v-card-actions>
              <div style="color:black">ピックアップリンク</div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/pickup_2.jpg" class="white--text" height="auto"></v-img>
            <v-card-actions>
              <div style="color:black">ピックアップリンク</div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card href="https://www.instagram.com/ku_secondary_kouhou/">
            <v-img src="/pickup_instagram.png" class="white--text" height="auto"></v-img>
            <v-card-actions>
              <div style="color:black">公式インスタ</div>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/pickup_survey.png" class="white--text" height="auto"></v-img>
            <v-card-actions>
              <div style="color:black">入場者アンケートにご協力を</div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
   </v-container>
  </template>
 </div>
</template>

<script></script>
<style lang="scss" scoped>
/*
.home-c {
  padding-bottom: 50px;
}
*/
.home-content {
  background: url("/public/home.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
 
  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
