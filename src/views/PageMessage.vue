<template>
  <div class="message">
    <v-container class="my-5">
      <div class="text-h3">校長挨拶</div>
      <br><br>
      本校校長・井上真理からのご挨拶です。
      <br>
      <v-row class="d-flex column" align="center">
        <v-col class="d-flex justify-center" cols="5" align-self="start">
          <v-avatar :size="$vuetify.breakpoint.xs ? 100 : 200"><img src="/images/message_inoue.jpg" alt="校長・井上真理"></v-avatar>
        </v-col>
        <v-col class="d-flex justify-center">
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
      <!--v-row class="d-flex column" align="center">
        <v-col class="d-flex justify-center" cols="7">
          <v-card elevation="2" outlined shaped>
            <v-card-title>実行委員長挨拶</v-card-title>
            <v-card-text><div class="text-body-1" style="color:black">
              あああ
            </div></v-card-text>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center" align-self="start">
          <v-avatar :size="$vuetify.breakpoint.xs ? 100 : 200"><img src="/images/leader.png" alt="実行委員長"></v-avatar>
        </v-col>
      </v-row-->
    </v-container>
  </div>
</template>
<script></script>
<style>
p{
  text-indent: 1em;
}
</style>
