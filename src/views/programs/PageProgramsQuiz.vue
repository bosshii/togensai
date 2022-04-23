<template>
  <div class="quiz">
    <v-container class="my-5">
      <div class="text-h3">クイズ企画</div>
      <br><br>
      第十回兎原祭もクイズ大会を実施します！今年は去年よりパワーアップ！一日目はアプリ「みんなで早押しクイズ」で予選を実施、予選上位者は二日目に屋外ステージにて対面で対決します！
      <v-card elevation="2">
        <v-card-title><v-icon>mdi-note-text</v-icon> 企画説明</v-card-title>
<<<<<<< HEAD
        <v-card-text><div class="text--primary"><ul>
          <li>決勝戦日時：5/21（土）14:20-15:00</li>
          <li>決勝戦場所：屋外ステージ<ul><li>雨天時はグラウンド側校舎2階施設整備の部屋で実施</li></ul></li>
          <li>予選に参加可能なのは本校生徒のみです。一般の方は決勝戦で予選進出者と一緒にクイズに答えてお楽しみください！！</li>
        </ul></div></v-card-text>
=======
        <v-card-text><div class="text--primary">
          ・決勝戦日時：5/21（土）14:20-15:00（予定）<br>
          ・決勝戦場所：屋外ステージ（雨天時はグラウンド側校舎二階施設整備の部屋で実施します）<br>
          ・予選に参加可能なのは本校生徒のみです。一般の方は決勝戦で予選進出者と一緒にクイズに答えてお楽しみください！！
        </div></v-card-text>
>>>>>>> refs/remotes/origin/master
      </v-card>
      <br>
      <div class="text-h4">参加方法</div>
      本校生徒なら誰でも参加できます！予選にはクイズアプリ「みんなで早押しクイズ(みんはや)」を使います。
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>参加方法を見る</v-expansion-panel-header>
<<<<<<< HEAD
          <v-expansion-panel-content class="grey--text">
=======
          <v-expansion-panel-content class="px-4 grey--text">
>>>>>>> refs/remotes/origin/master
            <v-stepper v-model="e6" vertical flat>
              <v-stepper-step :complete="e6 > 1" step="1">アプリをインストール</v-stepper-step>
              <v-stepper-content step="1">
                みんはやアプリをダウンロードします。
<<<<<<< HEAD
                <v-row><v-col cols="5" xs="12" sm="12" md="6" lg="4" xl="4"><a href='https://play.google.com/store/apps/details?id=com.tactosh.quiz'><v-img src="/images/app_android.png" min-width="150px" max-width="300px"></v-img></a></v-col></v-row>
                <v-row><v-col cols="5" xs="12" sm="12" md="6" lg="4" xl="4"><a href='https://apps.apple.com/jp/app/id1044039663'><v-img src="/images/app_ios.png" min-width="150px" max-width="300px"></v-img></a></v-col></v-row><br>
=======
                <v-row><v-col cols="5" xs="12" sm="12" md="6" lg="4" xl="4"><a href='https://play.google.com/store/apps/details?id=com.tactosh.quiz'><v-img src="/app_android.png" min-width="150px" max-width="300px"></v-img></a></v-col></v-row>
                <v-row><v-col cols="5" xs="12" sm="12" md="6" lg="4" xl="4"><a href='https://apps.apple.com/jp/app/id1044039663'><v-img src="/app_ios.png" min-width="150px" max-width="300px"></v-img></a></v-col></v-row><br>
>>>>>>> refs/remotes/origin/master
                <v-btn color="primary" @click="e6 = 2">次へ</v-btn>        
              </v-stepper-content>
              <v-stepper-step :complete="e6 > 2" step="2">初期設定をする</v-stepper-step>
              <v-stepper-content step="2">
                名前やアイコンを設定しましょう。未設定のままでも可能ですが、分かりやすくする為にも設定することをおすすめします。<br>
                <v-btn color="primary" @click="e6 = 3">次へ</v-btn>
              </v-stepper-content>
              <v-stepper-step step="3">フリーマッチに入室</v-stepper-step>
              <v-stepper-content step="3">
                まずアプリのホーム画面下部にある「フリーマッチ」ボタンをタップ。<br>次に、右下「ルームID入力」を押し、IDを入力して、虫眼鏡アイコンをタップすると予選会場に入れます！<br>※ルームIDは開催前に校内に掲示します。<br>
                <v-row>
<<<<<<< HEAD
                  <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4"><v-img src="/images/minhaya1.png" min-width="150px" max-width="300px"></v-img></v-col>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4"><v-img src="/images/minhaya2.png" min-width="150px" max-width="300px"></v-img></v-col>
=======
                  <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4"><v-img src="/minhaya1.png" min-width="150px" max-width="300px"></v-img></v-col>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="4" xl="4"><v-img src="/minhaya2.png" min-width="150px" max-width="300px"></v-img></v-col>
>>>>>>> refs/remotes/origin/master
                </v-row>
                <v-btn color="primary" @click="e6 = 1">最初から見る</v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
      <div class="text-h4">サンプル問題</div>
      腕試しにクイズを解いてみよう！何問分かるかな？
      <v-expansion-panels>
        <v-expansion-panel v-for="quiz in listedQuiz" :key="quiz.title">
<<<<<<< HEAD
          <v-expansion-panel-header>{{ quiz.title }}</v-expansion-panel-header>
=======
          <v-expansion-panel-header>{{
            quiz.title
          }}</v-expansion-panel-header>
>>>>>>> refs/remotes/origin/master
          <v-expansion-panel-content class="px-4 grey--text">
            <div style="color:green">{{ quiz.ans }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      questions: [
        {
          title: "たばこの煙に含まれる物質のうち、依存性があり、毛細血管を収縮させ、高血圧や動脈硬化の原因とされるものは何でしょう？",
          display: "1",
          ans: "ニコチン",
        },
        {
          title: "元々は四季の事物や年中行事をまとめた書物を指した漢字三文字の言葉で、現在は俳句における季語を集めて分類した手引書のことを指すのは何でしょう？",
          display: "1",
          ans: "歳時記",
        },
        {
          title: "アルファベット2文字で、鬼滅の刃人生ゲームのポイントの単位、ゴルフ業界でのニアピンの通称、2019年のギャル流行語大賞1位、北朝鮮の国名コード、神戸ポートインテリジェンスプロジェクトの略称と言えば、何でしょう？",
          display: "1",
          ans: "KP",
        },
        {
          title: "「凹凸」は「おうとつ」、凸凹は「でこぼこ」と読む。〇か✕か。",
          display: "1",
          ans: "〇",
        },
        {
          title: "この歌い出しで始まる曲は何でしょう？「心臓からあふれ出した声で歌うメロディ」",
          display: "1",
          ans: "宿命（Official髭男dism）",
        },
      ],
      e6: 1,
    };
  },
  computed: {
    listedQuiz() {
      return this.questions.filter((quiz) => quiz.display === "1");
    },
  },
};
</script>
<<<<<<< HEAD
<style>
.v-expansion-panel-content__wrap {
  padding: 0px 4px 16px!important;
}</style>
=======

<style></style>
>>>>>>> refs/remotes/origin/master
