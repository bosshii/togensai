<template>
  <div class="message">
    <v-container class="my-5">
      <div class="text-h3">校長・委員長挨拶</div>
      本校校長・井上と第10回兎原祭実行委員長・平野からのご挨拶です。
      <div style="height:30px"></div>
      <v-row class="d-flex column" align="center">
        <v-col class="d-flex justify-left msgphoto" cols="12" xs="12" sm="12" md="3" lg="3" xl="3" align-self="start">
          <v-avatar :size="$vuetify.breakpoint.xs ? 100 : 200"><img src="/images/message_inoue.jpg" alt="校長・井上真理"></v-avatar>
        </v-col>
        <v-col class="d-flex justify-center msgbox">
          <v-card elevation="2" outlined shaped>
            <v-card-title>兎原祭メッセージ</v-card-title>
            <v-card-text><div class="text-body-1" style="color:black">
              <p>兎原祭(神戸大学附属中等教育学校の文化祭)に関心をお持ちいただき、誠にありがとうございます。</p>
              <p>一昨年は新型コロナウイルス感染症による臨時休業期間中のため開催できませんでした。昨年は在校生だけが参加する1日開催にこぎつけました。様々な行事が中止となり、当たり前と思っていたことが当たり前ではないことに気づくことの多い、この2年あまりです。今年、人数制限はございますが、保護者の皆様や、本校に関心をお持ちのみなさまにも、御参加いただくことができるよう準備を進めています。</p>
              <p>本校は「自治・協同・創造」を校訓とし、神戸大学の理念である「真摯･自由･協同」の精神に基づき、国際的視野を持ち未来を切り拓く、真理探究の精神に富んだグローバルキャリア人を育成することを目指しています。「知と人を創る異分野共創研究教育グローバル拠点」を目指す神戸大学と連携し、中等教育段階の6年一貫教育を進めています。</p>
              <p>創設以来、探究的な学びを「Kobeポート・インテリジェンス・プロジェクト（略称：Kobe プロジェクト、又は KP）」と命名し、6 年一貫教育の軸と位置づけ取り組んでいます。「見つける力」「調べる力」「まとめる力」「発表する力」の4つの力とそれらを総合する「考える力」を、教育活動全体を通じて育成しています。</p>
              <p>本校の教育活動を通じ、成長していく生徒たちが力をあわせて企画運営をしております兎原祭の魅力、多くのみなさまに御堪能いただきたく思います。</p>
            </div></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex column" align="center">
        <v-col class="d-flex justify-left msgphoto" cols="12" xs="12" sm="12" md="3" lg="3" xl="3" align-self="start">
          <v-avatar :size="$vuetify.breakpoint.xs ? 100 : 200"><img src="/images/message_hirano.jpg" alt="実行委員長"></v-avatar>
        </v-col>
        <v-col class="d-flex justify-center msgbox">
          <v-card elevation="2" outlined shaped>
            <v-card-title>実行委員長挨拶</v-card-title>
            <v-card-text><div class="text-body-1" style="color:black">
              <p>第10回兎原祭のHPをご覧いただき誠にありがとうございます。
              <p>今回の兎原祭は、本校に文化祭というものが誕生してから10回目という節目の年になります。開校から続く生徒主体の精神は脈々と受け継がれ、第10回兎原祭も全校生徒一丸となって準備を進めております。10年間を振り返り、これからに繋げていく第10回兎原祭はシンプル、それでいて挑戦的です。</p>
              <p>立ち返ってみると、文化祭とは生徒の活動を発展させ、それを披露し、鑑賞し合うイベントです。普段は同一空間上で行われないような取り組み・活動も、兎原祭では一緒くたになって行われます。それが兎原祭のおもしろさであり、それが我々生徒にとって成長の糧となることの所以であると思います。</p>
              <p>兎原祭最大の魅力は「自由」であること。兎原祭では、様々な興味関心を持つ生徒が、それぞれ個性豊かな企画を行います。その興味関心に制約はありません。<br>唯一、全ての企画に共通して言えることは、開催に向けて真摯に準備しているということでしょう。</p>
              <p>今年は実際に来て、見て、遊んで、そんな兎原祭をお楽しみください。</p>
            </div></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script></script>
<style>
.msgphoto {
  padding: 12px 12px 3px 12px!important;
}
.msgbox {
  padding: 2px 12px 12px 12px!important;
}
p{
  text-indent: 1em;
}
</style>
