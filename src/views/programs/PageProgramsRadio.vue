<template>
  <div class="radio">
    <v-container class="my-5">
      <div class="text-h3">とげラジ</div>
      <br><br>
      これまで音楽を流すだけであった兎原祭の放送でトークを繰り広げるラジオ企画・その名も とげラジ が帰ってきました！MCがゲストの方と、それぞれ決められたテーマに沿ってトークを繰り広げます。ぜひ、休憩時間や待ち時間にお聞きください！
      <br>
      <div class="text-h6 text-decoration-underline">お便り受け付けます！</div>
      番組のうち<v-btn :ripple="false" color="#ff0707" depressed rounded small class="white--text">お便り</v-btn>のあるものはお便りや投票を受け付けます！気軽に書いてみましょう！<br>
      <div class="text-h4">タイムテーブル</div>
      <v-tabs color="pink accent-2">
        <v-tabs-slider color="pink" />
        <v-tab>Day 1</v-tab>
        <v-tab>Day 2</v-tab>
        <v-tab-item>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="radio in radioDay1" :key="radio.title">
              <v-expansion-panel-header style="padding:0px 5px;">{{ radio.title }}<template v-slot:actions><v-btn v-if="radio.form == 'on'" :ripple="false" color="#ff0707" depressed rounded small class="white--text">お便り</v-btn><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
              <v-expansion-panel-content class="black--text">
                <div class="mx-n3">
                  {{ radio.program }}
                  <v-row v-if="radio.form == 'on'">
                    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                      <iframe :src="radio.formlink" width="100%" height="200px" frameborder="0" marginheight="0" marginwidth="0" loading="lazy" class="elevation-3 rounded-lg">読み込んでいます…</iframe>
                    </v-col>
                  </v-row>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
        <v-tab-item>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="radio in radioDay2" :key="radio.title">
              <v-expansion-panel-header style="padding:0px 5px;">{{ radio.title }}<template v-slot:actions><v-btn v-if="radio.form == 'on'" :ripple="false" color="#ff0707" depressed rounded small class="white--text">お便り</v-btn><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
              <v-expansion-panel-content class="black--text">
                <div class="mx-n3">
                  {{ radio.program }}
                  <v-row v-if="radio.form == 'on'">
                    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                      <iframe :src="radio.formlink" width="100%" height="200px" frameborder="0" marginheight="0" marginwidth="0" loading="lazy" class="elevation-3 rounded-lg">読み込んでいます…</iframe>
                    </v-col>
                  </v-row>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      programs: [
        {
          title: "08:55~　カウントダウン",
          day: "1",
          program: "スタートまでカウントダウンします!",
        },
        {
          title: "09:00~09:40　三役のBlack Out",
          day: "1",
          program: "さぁ一斉に始まりました兎原祭、音楽と兎原祭に関する小話で好調なスタートを演出する三役によるラジオ。",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSdH-A_rEbCnF87mFG4ldc1vm7ITotCuAh3ane_hHfGZZpGH1Q/viewform?embedded=true",
        },
        {
          title: "09:50~10:30　It's ASTime",
          day: "1",
          program: "謎の科学集団ASTAがお送りするトーク番組。（ASTAの活動やサイエンスショーについて宣伝するかも。）",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSf-Ejsn6s54KEAxy3AhJSxqG-IBPmGjJmpd9rcBdKalkYdMSA/viewform?embedded=true",
        },
        {
          title: "10:40~11:40　十大陸漫遊記",
          day: "1",
          program: "Hiroの音楽ラジオ、トークも抜群！ゲストがいるかも...",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSddY3pxPFO_0QDGzu-ZGFDhLiS7l3aFc9uFEgbm-MNP22ynmg/viewform?embedded=true",
        },
        {
          title: "12:20~13:00　兎のダンス回",
          day: "1",
          program: "ゲストに野外ステージ有志ダンス出演者を招いたトークメインのコーナーです！",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLScykQ0pbp4SizvRC5eDBWMZNxkhhw_KujWz1XO5N7iYRxSoBQ/viewform?embedded=true",
        },
        {
          title: "13:10~13:50　ぼーちゃんラジオ",
          day: "1",
          program: "Hi, everyone. We are English Speaking Society club! We use only Japanese, so please listen to our radio!",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSdFSxLtLSi2mQK8pzMjdJnH_cPAlAukMEFGcqsXW4kTasu3qg/viewform?embedded=true",
        },
        {
          title: "14:00~15:00　ちょっとお時間よろしいですか？",
          day: "1",
          program: "ベテランラジオMC：CHIKAによるトークラジオのコーナーです。どうぞご期待〜",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLScgbWNgiUiYVAV6wiCwEU12_uoAvl6CN0pg4T8GWtevgorMJA/viewform?embedded=true",
        },
        {
          title: "09:00~09:40　？？？(14回生ラジオ）",
          day: "2",
          program: "14回生がラジオを行います。入学して間もないですが頑張ります。",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSeOxjejfXSHtKhgFqYMl7HbcQHJQ5QYkMAwestwqpQK3ifVWQ/viewform?embedded=true",
        },
        {
          title: "09:50~10:30　It's ASTime",
          day: "2",
          program: "謎の科学集団ASTAがお送りするトーク番組。（ASTAの活動やサイエンスショーについて宣伝するかも。）",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSf-Ejsn6s54KEAxy3AhJSxqG-IBPmGjJmpd9rcBdKalkYdMSA/viewform?embedded=true",
        },
        {
          title: "10:40~11:40　十大陸漫遊記",
          day: "2",
          program: "Hiroの音楽ラジオ、トークも抜群！ゲストがいるかも...",
          form :"on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSddY3pxPFO_0QDGzu-ZGFDhLiS7l3aFc9uFEgbm-MNP22ynmg/viewform?embedded=true"
        },
        {
          title: "12:20~13:00　部長補佐のCoffee Break",
          day: "2",
          program: "なんと、あの先生が中等に帰ってくる！兎原祭一日限りの大復活！！",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSd8vqK5eX5o6Pbgj6u8pVoU50dorjaXCHtp89yjgdvwPjUr6A/viewform?embedded=true",
        },
        {
          title: "13:10~13:50　ぼーちゃんラジオ",
          day: "2",
          program: "Hi, everyone. We are English Speaking Society club! We use only Japanese, so please listen to our radio!",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSdFSxLtLSi2mQK8pzMjdJnH_cPAlAukMEFGcqsXW4kTasu3qg/viewform?embedded=true",
        },
        {
          title: "14:00~15:00　ちょっとお時間よろしいですか？",
          day: "2",
          program: "ベテランラジオMC：CHIKAによるトークラジオのコーナーです。どうぞご期待〜",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLScgbWNgiUiYVAV6wiCwEU12_uoAvl6CN0pg4T8GWtevgorMJA/viewform?embedded=true",
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


