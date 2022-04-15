<template>
  <div class="access">
    <v-container class="my-5">
      <div class="text-h3">生徒向けページ</div>
      <br><br>
      生徒のみなさんに向けたお知らせです。
      <div class="text-h4">求人募集</div>
      <p>メンバーと一緒に活動してみませんか？局員としての経験は確実に今後の役に立ちます！</p>
      <v-expansion-panels>
        <v-expansion-panel v-for="work in listedWorks" :key="work.title">
          <v-expansion-panel-header>{{
            work.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div>{{ work.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <br>
      <div class="text-h4">おしらせ</div>
      <p>おしらせ</p>
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
