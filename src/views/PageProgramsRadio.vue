<template>
  <div class="radio">
    <v-container class="my-5">
      <div class="text-h3">とげラジ</div>
      <br><br>
      これまで音楽を流すだけであった兎原祭の放送でトークを繰り広げるラジオ企画・その名も とげラジ が帰ってきました！MCがゲストの方と、それぞれ決められたテーマに沿ってトークを繰り広げます。ぜひ、休憩時間や待ち時間にお聞きください！
      <v-card elevation="2">
        <v-card-title><v-icon>mdi-note-text</v-icon> 企画説明</v-card-title>
        <v-card-text><div class="text--primary">
          ・放送期間：5月n日 nn:nn~nn:nn（予定）<br>
          ・放送内容：<br>
          ※企画内容、ゲストは多少変更する可能性があります。
        </div></v-card-text>
      </v-card>
      <br>
      <div class="text-h4">タイムテーブル</div>
      <v-tabs color="pink accent-2">
        <v-tabs-slider color="pink lighten-4" />
        <v-tab>1日目</v-tab>
        <v-tab>2日目</v-tab>
        <v-tab-item>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="radio in radioDay1" :key="radio.title">
              <v-expansion-panel-header>{{ radio.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
              <v-expansion-panel-content class="px-4 grey--text"><div style="color:black">{{ radio.program }}</div></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
        <v-tab-item>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="radio in radioDay2" :key="radio.title">
              <v-expansion-panel-header>{{ radio.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
              <v-expansion-panel-content class="px-4 grey--text"><div style="color:black">{{ radio.program }}</div></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs>
      <br>
      <div class="text-h4">お便り＆投票企画</div>
      番組へのお便りや投票を随時受け付ける予定です！お楽しみに！
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      programs: [
        {
          title: "nn:nn~　ただいま",
          day: "1",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　絶賛",
          day: "1",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　番組",
          day: "1",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　内容",
          day: "1",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　編成中！",
          day: "1",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　ただいま",
          day: "2",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　絶賛",
          day: "2",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　番組",
          day: "2",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　内容",
          day: "2",
          program: "番組の内容",
        },
        {
          title: "nn:nn~　編成中！",
          day: "2",
          program: "番組の内容",
        },
      ],
    };
  },
  computed: {
    radioDay1() {
      return this.programs.filter((radio) => radio.day === "1");
    },
    radioDay2() {
      return this.programs.filter((radio) => radio.day === "2");
    },
  },
};
</script>
<style></style>


