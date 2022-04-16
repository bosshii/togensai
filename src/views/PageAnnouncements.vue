<template>
  <div class="announcements">
    <v-container class="my-5">
      <div class="text-h3">お知らせ・お願い</div>
      <br><br>
      みなさんに向けたお知らせ・お願いです。
      <br><br>
      <div class="text-h4">おねがい</div>
      <p>落し物や迷子を発見した場合、実行委員パーカーを着た生徒に伝えるか、本部（物理教室）に届け出るようご協力をお願いします。</p>
      <div class="text-h4">生徒の皆さんへ</div>
      <p>情報機器は節度をもって利用しましょう。歩きスマホは危険です。<router-link :to=" { name: 'ict' } ">情報委員会からのお知らせ</router-link>もご確認ください。</p>
      <div class="text-h5">求人募集</div>
      <p>メンバーと一緒に活動してみませんか？局員としての経験は確実に今後の役に立ちます！</p>
      <v-expansion-panels>
        <v-expansion-panel v-for="work in listedWorks" :key="work.title">
          <v-expansion-panel-header>{{ work.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div>{{ work.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      works: [
        {
          title: "局1",
          display: "1",
          content: "内容1",
        },
        {
          title: "局2",
          display: "1",
          content: "内容2",
        },
        {
          title: "局3",
          display: "1",
          content: "内容3",
        },
        {
          title: "局4",
          display: "1",
          content: "内容4",
        },
      ],
    };
  },
  computed: {
    listedWorks() {
      return this.works.filter((work) => work.display === "1");
    },
  },
};
</script>

<style></style>
