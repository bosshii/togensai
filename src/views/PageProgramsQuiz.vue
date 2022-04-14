<template>
  <div class="quiz">
    <h1 class="subtitle-1 grey--text">クイズ企画</h1>
    <v-container class="my-5">
      <u>求人募集</u>
      <v-expansion-panels>
        <v-expansion-panel v-for="quiz in listedQuiz" :key="quiz.title">
          <v-expansion-panel-header>{{
            quiz.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div>{{ quiz.ans }}</div>
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
          title: "問題1:たばこの煙に含まれる物質のうち、依存性があり、毛細血管を収縮させ、高血圧や動脈硬化の原因とされるものは何でしょう？",
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
          ans: "〇",
        },
        {
          title: "「凹凸」は「おうとつ」、凸凹は「でこぼこ」と読む。〇か✕か。",
          display: "1",
          ans: "4b",
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
