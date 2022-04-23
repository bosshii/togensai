<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="pink lighten-1 text-center"
    >
      <v-btn href="https://www.edu.kobe-u.ac.jp/kuss-top/" class="mx-4" dark icon depressed>
        <v-icon size="24px">mdi-town-hall</v-icon>
      </v-btn>
      <v-btn href="https://twitter.com/ku_secondary" class="mx-4" dark icon depressed>
        <v-icon size="24px">mdi-twitter</v-icon>
      </v-btn>
      <v-btn href="https://www.instagram.com/ku_secondary_kouhou/" class="mx-4" dark icon depressed>
        <v-icon size="24px">mdi-instagram</v-icon>
      </v-btn>
      <v-btn href="https://www.facebook.com/KU.Secondary.School" class="mx-4" dark icon depressed>
        <v-icon size="24px">mdi-facebook</v-icon>
      </v-btn>
      <v-btn href="https://www.youtube.com/channel/UCf4FrMA0Cu8kQCtPsNMzHjw" class="mx-4" dark icon depressed>
        <v-icon size="24px">mdi-youtube</v-icon>
      </v-btn>
    </v-card>
    <v-divider></v-divider>
    <v-card
      flat
      tile
      width="100%"
      class="pink lighten-1 text-center"
    >
      <v-card-text class="white--text">{{ new Date().getFullYear() }} — <strong>第10回兎原祭実行委員会</strong></v-card-text>
    </v-card>
  </v-footer>
</template>