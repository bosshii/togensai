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
      ご予約の際には、<router-link :to=" { name: 'privacy' } ">プライバシーポリシー</router-link>もご確認ください。<br>入場予約フォームは現在準備中です。4月25日に受付開始します。しばらくお待ちください。
      <br><br>
      <div class="text-h4">在校生保護者(2日目)・小学生とその保護者</div>
      本校への入学を検討されている小学生とその保護者様には入場予約システムとしてmiraicompassを使用いたします。
      <div class="text-center">
        <v-btn href="https://mirai-compass.net/usr/kobeussj/event/evtIndex.jsf" target="_blank" color="success" large>
          今すぐ予約<v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <v-stepper vertical flat>
        <v-stepper-step step="1" complete-icon="mdi-numeric-1" complete>miraicompassに登録</v-stepper-step>
        <v-stepper-content step="1">
          ボタンからmiraicompassに移動し、「ログインして申し込む（はじめての方もこちらから）」からログインまたはID（メールアドレス）を登録してください。      
        </v-stepper-content>
        <v-stepper-step step="2" complete-icon="mdi-numeric-2" complete>予約</v-stepper-step>
        <v-stepper-content step="1">
          情報を入力し、申し込みを完了させます。<br>申込時に配信される「申込完了メール」もご確認ください。
        </v-stepper-content>
        <v-stepper-step step="3" complete-icon="mdi-numeric-3" complete>申込者多数の場合:抽選</v-stepper-step>
        <v-stepper-content step="1">
          定員を上回るご応募をいただいた場合、勝手ながら抽選とさせていただきます。<br>最終的に入場が確定した方には、改めてメールを送信いたします。
        </v-stepper-content>
        <v-stepper-step step="4" complete-icon="mdi-numeric-4" complete>入場</v-stepper-step>
        <v-stepper-content step="1">
          入場の際には、予約票を提示していただきます。受付係員が確認いたします。<br>また、ご入場の際には検温・消毒を実施させていただきます。
        </v-stepper-content>
      </v-stepper>
      <br><br>
      <div class="text-h4">一般の方</div>
      一般の方はGoogleフォームから予約していただきます。
      <div class="text-center">
        <v-btn href="#" color="success" large disabled>
          今すぐ予約<v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <br><br>
      <div class="text-h4">在校生保護者(1日目)</div>
      別途配布する紙を当日お持ちいただき、受け付けで係員にご提示ください。
    </v-container>
  </div>
</template>
<script></script>
<style></style>
