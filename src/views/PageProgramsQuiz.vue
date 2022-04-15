<template>
  <div class="programs">
    <v-container class="my-5">
      <div class="text-h3">クイズ企画</div>
      <br><br>
      第十回兎原祭もクイズ大会を実施します！今年は去年よりパワーアップ！兎原祭一日目はみんはやで予選、予選上位者は二日目に屋外ステージにて対面で対決します！
      <v-card elevation="2">
        <v-card-title><v-icon>mdi-note-text</v-icon> 企画説明</v-card-title>
        <v-card-text><div class="text--primary">
          ・決勝戦日時：5/21（土）14:20-15:00（予定）<br>
          ・決勝戦場所：屋外ステージ（雨天時はグラウンド側校舎二階4年1組教室で実施します）<br>
          ・予選に参加可能なのは本校生徒のみです。一般の方は決勝戦で予選進出者と一緒にクイズに答えてお楽しみください！！
        </div></v-card-text>
      </v-card>
      <br>
      <div class="text-h4">サンプル問題</div>
      腕試しにクイズを解いてみよう！何問分かるかな？
      <v-expansion-panels>
        <v-expansion-panel v-for="quiz in listedQuiz" :key="quiz.title">
          <v-expansion-panel-header>{{
            quiz.title
          }}</v-expansion-panel-header>
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
    };
  },
  computed: {
    listedQuiz() {
      return this.questions.filter((quiz) => quiz.display === "1");
    },
  },
};
</script>

<style></style>
