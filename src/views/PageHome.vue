<template>
 <div class="Home">
  <template>
   <section class="home-c">
    <v-container fluid fill-height class="home-content">
     <v-row>
      <v-col class="home-content-text">
          <p>{{ process.env.VUE_APP_FESNAME }}</p>
      </v-col>
     </v-row>
    </v-container>
   </section>
  </template>
  <template>
   <v-container class="fill-height" fluid style="min-height: 434px">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="http://placehold.jp/350x165.png"
              height="300"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              あああ
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="http://placehold.jp/350x165.png"
              height="300"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              あああ
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="http://placehold.jp/350x165.png"
              max-height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              あああ
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="http://placehold.jp/350x165.png"
              max-height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="text-h6">
              max-height with contain
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
   </v-container>
  </template>
 </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
.home-content {
  background: url("/images/home.png");
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
