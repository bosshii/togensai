<template>
  <div class="work">
    <h1 class="subtitle-1 grey--text">生徒向けページ</h1>
    <v-container class="my-5">
      <u>求人募集</u>
      <v-expansion-panels>
        <v-expansion-panel v-for="work in listedWorks" :key="work.title">
          <v-expansion-panel-header>{{
            work.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">{{ work.due }}</div>
            <div>{{ work.content }}</div>
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
      works: [
        {
          title: "局1",
          display: "1",
          due: "内容1a",
          content2: "内容1b",
        },
        {
          title: "局2",
          display: "1",
          due: "内容2a",
          content2: "内容2b",
        },
        {
          title: "局3",
          display: "1",
          due: "内容3a",
          content2: "内容3b",
        },
        {
          title: "局4",
          display: "1",
          due: "内容4a",
          content2: "4b",
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
