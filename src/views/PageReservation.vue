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
      今年の兎原祭は入場予約システムとしてmiraicompassを使用いたします。<br>ご予約の際には、<router-link :to=" { name: 'privacy' } ">プライバシーポリシー</router-link>もご確認ください。<br>入場予約フォームは現在準備中です。4月25日に受付開始します。しばらくお待ちください。
      <div class="text-center">
        <v-btn href="#" color="success" large disabled>
          今すぐ予約<v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <div class="text-h4">予約～入場の流れ</div>
      説明は順次充実化します。
      <v-stepper vertical flat>
        <v-stepper-step step="1" complete-icon="mdi-numeric-1" complete>miraicompassに登録</v-stepper-step>
        <v-stepper-content step="1">
          ボタンからmiraicompassに移動し、ID（メールアドレス）の登録を行ってください。      
        </v-stepper-content>
        <v-stepper-step step="2" complete-icon="mdi-numeric-2" complete>予約</v-stepper-step>
        <v-stepper-content step="1">
          イベント一覧から兎原祭を選択し、情報を入力します。<br>申込時に配信される「申込完了メール」もご確認ください。
        </v-stepper-content>
        <v-stepper-step step="3" complete-icon="mdi-numeric-3" complete>申込者多数の場合:抽選</v-stepper-step>
        <v-stepper-content step="1">
          定員を上回るご応募をいただいた場合、勝手ながら抽選とさせていただきます。<br>最終的に入場が確定した方には、改めてメールを送信いたします。
        </v-stepper-content>
        <v-stepper-step step="4" complete-icon="mdi-numeric-4" complete>入場</v-stepper-step>
        <v-stepper-content step="1">
          入場の際には、予め送付するQRコードを提示していただきます。QRコードは受付係員がスキャンします。<br>また、ご入場の際には検温・消毒を実施させていただきます。
        </v-stepper-content>
      </v-stepper>
      <br><br>
      <div class="text-center">
        <v-btn href="#" color="success" large disabled>
          今すぐ予約<v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      e6: 1,
    };
  },
};
</script>
<style></style>
