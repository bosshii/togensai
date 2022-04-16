<template>
  <div class="access">
    <v-container class="my-5">
      <div class="text-h3">入場の流れ</div>
      <br><br>
      <v-card elevation="2" color="pink lighten-4" loading tile>
        <v-card-title class="text-h5">重要</v-card-title>
        <v-card-text><div class="text-body-1" style="color:black">
          今年の兎原祭では、新型コロナウィルス感染拡大防止の観点から入場人数の制限、クラスター発生時の連絡経路確保など、さまざまな対策を確実に実施する必要上、入場を<b>完全予約制</b>といたします。当日入場はできませんので、ご了承ください。
        </div></v-card-text>
      </v-card>
      今年の兎原祭は入場予約システムとしてmiraicompassを使用いたします。なお、miraicompassの使い方など、miraicompassにかかわるご質問は実行委員会ではお受けしておりません。あらかじめご了承ください。<br>ご予約の際には、<router-link :to=" { name: 'privacy' } ">プライバシーポリシー</router-link>もご確認ください。入場予約フォームは現在準備中です。何月何日に受付開始予定です。
      <br><br>
      <div class="text-center">
        <v-btn href="#" color="success" large disabled>
          今すぐ予約<v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<script></script>
<style></style>
