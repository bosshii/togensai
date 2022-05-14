<template>
  <div class="radio">
    <v-container class="my-5">
      <div class="text-h3">とげラジ</div>
      <br><br>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5"><a href="https://docs.google.com/forms/d/e/1FAIpQLSelqLP0tI7Bhdk7h2qc9j4GTwqE1lH4338nNIDU35I2VbuYcw/viewform?usp=sf_link"><v-img src="/images/hometop_radio-emergency.png" class="align-end" height="auto"></v-img><b>兎原祭カウントダウンに誰かへの応援メッセージ募集します！！「こんなん頑張るぞ〜！」という意気込みや、「Xさん〇〇頑張ってください！」などのメッセージを募集します。簡単なものでいいので、どしどしお寄せください！皆さんのご協力がないと兎原祭が始められません！！ホントに、、ホントに、、お願いします...！！</b></a></v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
          これまで音楽を流すだけであった兎原祭の放送でトークを繰り広げるラジオ企画・その名も とげラジ が帰ってきました！MCがゲストの方と、それぞれ決められたテーマに沿ってトークを繰り広げます。ぜひ、休憩時間や待ち時間にお聞きください！
          <br>
          <div class="text-h6 text-decoration-underline">お便り受け付けます！</div>番組のうち<v-btn :ripple="false" color="#ff0707" depressed rounded small class="white--text">お便り</v-btn>のあるものはお便りや投票を受け付けます！気軽に書いてみましょう！
        </v-col>
      </v-row>
      <br>
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
          program: "完全アドリブの痛快爆笑番組！皆さんに素敵な音楽と爆笑ラジオをお届けします!!",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSf-Ejsn6s54KEAxy3AhJSxqG-IBPmGjJmpd9rcBdKalkYdMSA/viewform?embedded=true",
        },
        {
          title: "10:40~11:40　十大陸漫遊記",
          day: "1",
          program: "第10回兎原祭に10回生がお送りする十大陸漫遊記。リクエストされた曲をどんどん流していきます。基本的に何でも流します！ぜひメッセージとともに曲のリクエストをお送りください！ゲスト・プレゼント企画があるかも...？",
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
          program: "ESS部所属のチハヤ、ノブト、タイラ、トムがお送りするゆるくてディープなラジオ、のんびりトークしながら皆さんの質問にお答えします。",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSdFSxLtLSi2mQK8pzMjdJnH_cPAlAukMEFGcqsXW4kTasu3qg/viewform?embedded=true",
        },
        {
          title: "14:00~15:00　ちょっとお時間よろしいですか？in兎原祭",
          day: "1",
          program: "14:00からベテランラジオMC：CHIKAが生放送でお届け☆企画の感想や面白かったことなど、どしどし送ってください！",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLScgbWNgiUiYVAV6wiCwEU12_uoAvl6CN0pg4T8GWtevgorMJA/viewform?embedded=true",
        },
        {
          title: "09:00~09:40　It's ASTime",
          day: "2",
          program: "完全アドリブの痛快爆笑番組！皆さんに素敵な音楽と爆笑ラジオをお届けします!!",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSf-Ejsn6s54KEAxy3AhJSxqG-IBPmGjJmpd9rcBdKalkYdMSA/viewform?embedded=true",
        },
        {
          title: "09:50~10:30　入って初耳掲示板",
          day: "2",
          program: "W企画!!1つ目は、1年生が入学して初めて知ったことを紹介します。その間に、みなさんから募集した曲を挟みます。2つ目は、【先着10名様に各企画の紹介時間を1分プレゼント】します！",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSedwCbHj3CstCo3BZ5ZalQ9Et2_ZqmGgrMZBfDktAgPb0MP_g/viewform?embedded=true",
        },
        {
          title: "10:40~11:40　十大陸漫遊記",
          day: "2",
          program: "第10回兎原祭に10回生がお送りする十大陸漫遊記。リクエストされた曲をどんどん流していきます。基本的に何でも流します！ぜひメッセージとともに曲のリクエストをお送りください！ゲスト・プレゼント企画があるかも...？",
          form :"on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSddY3pxPFO_0QDGzu-ZGFDhLiS7l3aFc9uFEgbm-MNP22ynmg/viewform?embedded=true"
        },
        {
          title: "12:20~13:00　？？？",
          day: "2",
          program: "？？？",
          form: "off",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSd8vqK5eX5o6Pbgj6u8pVoU50dorjaXCHtp89yjgdvwPjUr6A/viewform?embedded=true",
        },
        {
          title: "13:10~13:50　恋するみんなの応援隊",
          day: "2",
          program: "恋に詳しい私たちが（ごめんなさい...あんまり詳しくないかもです）がみなさんの恋を応援します!!届いたお便りに対して、たくさんのアドバイスをしていきます。期待に応えられるよう精一杯頑張ります!!",
          form: "on",
          formlink: "https://docs.google.com/forms/d/e/1FAIpQLSeOxjejfXSHtKhgFqYMl7HbcQHJQ5QYkMAwestwqpQK3ifVWQ/viewform?embedded=true",
        },
        {
          title: "14:00~15:00　ちょっとお時間よろしいですか？in兎原祭",
          day: "2",
          program: "14:00からベテランラジオMC：CHIKAが生放送でお届け☆企画の感想や面白かったことなど、どしどし送ってください！",
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


