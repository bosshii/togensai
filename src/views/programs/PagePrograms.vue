<template>
  <div class="programs">
    <v-container class="my-5">
      <div class="text-h3">企画・マップ</div>
      <br><br>
      今年も個性豊かな企画が沢山集まりました。皆さんのご来訪をお待ちしています！
      <div class="text-h4">本部企画</div>
      <v-row dense>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/minhaya.jpg" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>クイズ企画<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by TFPT @ みんはや＆対面<br>クイズ企画がパワーアップ！神大附属のクイズ王は誰だ！？<router-link :to=" { name: 'quiz' } ">詳細はこちら！</router-link></div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/unknown.png" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>とげラジ<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by TFPTと愉快なMCたち @ 放送<br>昨年好評だったラジオ企画を今年も放送！<router-link :to=" { name: 'radio' } ">詳細はこちら！</router-link></div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4">学年企画</div>
      <v-row dense>
        <v-col v-for="program in prgHomeroom" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>{{ program.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by {{ program.by }} @ {{ program.at }}<br>{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4">生徒会組織企画</div>
      <v-row dense>
        <v-col v-for="program in prgCouncil" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>{{ program.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by {{ program.by }} @ {{ program.at }}<br>{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4">有志企画</div>
      <v-row dense>
        <v-col v-for="program in prgTeam" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>{{ program.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by {{ program.by }} @ {{ program.at }}<br>{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4">教員主催企画</div>
      <v-row dense>
        <v-col v-for="program in prgTeacher" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header>{{ program.title }}<template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">by {{ program.by }} @ {{ program.at }}<br>{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      programs: [
        { show: false, cat:'homeroom', title: '校襲電話', at: 'X棟n階', by: '3年生', src: '/council.png', desc: '人間を恨んでいる人形、マリーさんと繋がった電話を切るために呪われた教室を通り、受話器を戻す、ミッション型のお化け屋敷です。　　　　　みなさん、こんにちは！突然ですがみなさんはお化けを信じていますか？信じてない人は一度、お化け屋敷「校襲電話」に来てみるといいでしょう。ただし、入って無事に帰って来れる補償はないです...あなたは託された任務を無事にクリアし、無事帰って来ることができるでしょうか。是非来てください‼️' },
        { show: false, cat:'homeroom', title: '迷Q', at: 'X棟n階', by: '2年生', src: '/council.png', desc: '世界に関するクイズを解きながら迷路を抜ける、迷路とクイズを融合した企画　　　　　あなたは薄暗い迷宮に迷い込んでしまった。あなたの目の前にあるのは世界に関する2択の問題たち。この問題は一定時間すると変わるらしい。あなたはクイズに正解し、この迷宮を抜け出せるだろうか。' },
        { show: false, cat:'homeroom', title: 'ワールドカーニバルゲーム', at: 'X棟n階', by: '2年生', src: '/council.png', desc: 'トマトをたらいの中に投げ込んだりトマト瓶を倒したりして得点を稼ぐゲーム。　　　　　この企画はスペインで催されるトマティーナという祭りを参考に起案されたものです。実際の祭りでトマトを投げ合う様にならって、トマトを投げて遊べるようになっています。企画を楽しんでいただけるように精力を尽くしますので、是非よろしくお願いします。' },
        { show: false, cat:'homeroom', title: 'サバゲー', at: 'X棟n階', by: '3年生', src: '/council.png', desc: 'ここはお菓子の星、アポロ。星には二つ国がある。その名も『タケノッコ王国』と『キノッコ王国』どちらの王子も同じ姫に恋をしてしまう。『勝てば姫をやる』という条件で戦うことに…。果たして姫はどちらの手に！？' },
        { show: false, cat:'homeroom', title: '演劇「不思議の国のアリス」', at: 'X棟n階', by: '6年生', src: '/council.png', desc: '6年演劇では「不思議の国のアリス」を上演します！中等生活最後の兎原祭、受験勉強もあり各々が時間の無い中力を合わせて仕上げました。言わずと知れた名作、不思議の国のアリスを楽器演奏も交えてぜひお楽しみください！' },
        { show: false, cat:'homeroom', title: 'MATSURI（縁日）', at: 'X棟n階', by: '4年生', src: '/council.png', desc: 'スーパーボールすくいや射的などの屋台を出します。縁日で遊びたい人いたら、いつでも中庭にお越しくだい！射的でもスーパーボールでも何でもありますよ景品も御座います！とにかく中庭にお越しください！' },
        { show: false, cat:'homeroom', title: '劇(オリジナル脚本)', at: 'X棟n階', by: '5年生', src: '/council.png', desc: 'ある大富豪一家で起こった不可解な殺人事件。完全オリジナルストーリーで構成する難解ミステリー！端から端まで伏線だらけのこの事件、結末を読まれない自信あり。この事件、あなたに解けますか？' },
        { show: false, cat:'homeroom', title: 'The Escape', at: 'X棟n階', by: '5年生', src: '/council.png', desc: 'お化け屋敷と謎解きゲームの融合。ようこそ滅亡した世界へ。あなたは自然を失ったこの地球に一人きり。彼女からのメッセージを頼りに様々な謎を解き、脱出用ロケットへたどり着け。想像を超える謎やからくりに挑め。愛を忘れるな。' },
        { show: false, cat:'homeroom', title: 'いすとりゲーム、カードゲーム、クイズ、ビンゴ', at: 'X棟n階', by: '4年生', src: '/council.png', desc: 'この企画では時間帯ごとにいろんな種類の(ミニゲーム、クイズ、ビンゴなど)大人数で行えるゲームを楽しめます！COVID-19対策を徹底して実施します。１人でも複数人でもかるーく遊びに来てください！' },
        { show: false, cat:'homeroom', title: '大型制作', at: 'X棟n階', by: '6年生', src: '/council.png', desc: '約50人で大規模製作に取り組みました！製作物は3つあり、チームラボ、つまようじアートに加え、9回生学年企画劇の舞台装置製作にも携わっています。個性豊かな製作物、ぜひ楽しんでください。' },
        { show: false, cat:'homeroom', title: '兎原寺の呪怨 ', at: 'X棟n階', by: '4年生', src: '/council.png', desc: '鐘の鳴り響く丑三つ時。この寺ではその昔、抉り出した少女の頭蓋骨を供える呪われた儀式が行われていた…関係者の不審死により儀式は取りやめになったが、今もその寺に近づくものには謎の失踪が起きるという…' },
        { show: false, cat:'homeroom', title: 'スポーツワールド‼︎', at: 'X棟n階', by: '2年生', src: '/council.png', desc: 'シャッフルボードテーブルとスポーツスタッキングを体験してもらいます！世界のスポーツの中で気軽に楽しめるもの２つを、コロナ禍の旅行へ行きにくい今だからこそ体験してもらいたいと思います。がんばったら景品もあるかも？ぜひ来てください！' },
        { show: false, cat:'homeroom', title: '縁日', at: 'X棟n階', by: '3年生', src: '/council.png', desc: 'この企画では、日本と外国の遊びを楽しむことが出来ますよくある遊びから、あまりない遊びまで！おもいっきり力を使ってストレス発散し、大量のお菓子をゲットして幸せを感じましょう!?ぜひ遊びに来てください!!' },
        { show: false, cat:'council', title: 'ミュージカル（シンデレラ~アマゾンプライム版~）', at: 'X棟n階', by: 'ESS部パフォーマンスセクション', src: '/council.png', desc: '皆さんは観たくなる魔法にかかりましたか？誰も想像し得ない新感覚（多分）のMusical Cinderellaの開演です！Let’s get loud！✨✨' },
        { show: false, cat:'council', title: '有名アニメ・ドラマの主題歌', at: 'X棟n階', by: '吹奏楽部', src: '/council.png', desc: 'こんにちは!!吹奏楽部は、70名以上の大所帯で日々活動しています。普段は個性で溢れる私達ですが、演奏ではひとつに団結して美しい音楽を奏でます。ぜひステージにお越しください💕' },
        { show: false, cat:'council', title: '魚・製作物展示、実験', at: 'X棟n階', by: '科学研究部', src: '/council.png', desc: '科学研究部では、魚や部員が製作したものを展示しています。また、エッグドロップチャレンジを行うこともできます。実験を行っているかもしれません。是非来てみて下さい。' },
        { show: false, cat:'council', title: 'おみくじ・合格おみくじ・恋みくじ', at: 'X棟n階', by: '男子バスケットボール部', src: '/council.png', desc: '男子篭球部は普通の御籤だけではなく，大学受験，中学受験を占う合格御籤，恋愛経験豊富な我々のアドバイス付き恋御籤などを販売します．一回100円．割と豪華な景品あり．' },
        { show: false, cat:'council', title: 'ギネス世界記録にチャレンジ！', at: 'X棟n階', by: '男子テニス部', src: '/council.png', desc: '男子テニス部のとある部員がギネス世界記録に本気で挑戦します。この日のために汗水たらしてトレーニングを積んできました。本気で本気の彼の下剋上をご覧ください。' },
        { show: false, cat:'council', title: 'フードドライブと食に関するクイズ', at: 'X棟n階', by: 'ESD foodプロジェクト', src: '/council.png', desc: '家に無駄になっている食品はありませんか?ESDフードプロジェクトでは今年度もフードドライブを行います!クイズも用意していますので、是非色々な食品を持ってきて下さい!' },
        { show: false, cat:'council', title: 'カラフルで映える写真スポット', at: 'X棟n階', by: '女子バレーボール部', src: '/council.png', desc: 'カラフルで映える写真スポットを作りました。女バレの明るく個性豊かな感じを表現しています。誰でも楽しめるので思い出づくりにぜひ気軽に来て写真を撮ってくれたらうれしいです！' },
        { show: false, cat:'council', title: '缶バッジ作りワークショップ・部員作品展示', at: 'X棟n階', by: '美術部', src: '/council.png', desc: 'びーっ、びじゅつぶ！げんきげんき！（某教育テレビのマラカス付き妖精風）　毎年大盛況の缶バッジ作りワークショップ、今年も開催します！部員を唸らせる作品を作った方には何かいいことがあるかも！？' },
        { show: false, cat:'council', title: 'クラシックやジャズ、Jpop', at: 'X棟n階', by: 'アンサンブル同好会', src: '/council.png', desc: 'アンサンブルの敷居をグッと下げて、お馴染みの楽曲を演奏します。クラシックやジャズ、Jpopと幅広いジャンルでお楽しみ頂けます。絶賛会員募集中！是非お越しください！皆さんを素敵なコンサート会場にお連れします。' },
        { show: false, cat:'council', title: 'ASTAサイエンスショー', at: 'X棟n階', by: 'ASTA', src: '/council.png', desc: '我々、ASTAは新たなASTA民の獲得を目標にサイエンスショーを実施します。ASTAの"A"の字も知らない人からASTAの熱狂的なファンまでが楽しめるような実験を準備しておりますので奮ってご参加ください。ステージ2日目（※急遽予定が変更される場合があります。）' },
        { show: false, cat:'council', title: '自作ゲーム', at: 'X棟n階', by: 'PC部', src: '/council.png', desc: 'プログラミングでゲーム作りや動画作りをみんなでしたり、1人でしたり和気藹々とした楽しくフレンドリーな部活動です。' },
        { show: false, cat:'council', title: '演劇', at: 'X棟n階', by: '演劇部', src: '/council.png', desc: 'こんにちは、演劇部です！今回の作品は、いわゆる「学園モノ」。今しか出せないリアルさを大切に表現します。また、今回は一部ダブルキャスト。キャストによる違いも楽しめる要素のひとつです。是非お越しください！' },
        { show: false, cat:'council', title: '学校グッズ販売', at: 'X棟n階', by: '生徒会執行部', src: '/council.png', desc: 'こんにちは！生徒会執行部です。中庭のアリーナ前で学校グッズを販売しています！ぜひお立ち寄りください！' },
        { show: false, cat:'team', title: 'calm with heat(バンド)', at: 'X棟n階', by: 'calm with heat', src: '/council.png', desc: '私達5人は吹奏楽部とコーラス部で構成されています！音楽を知り、音楽が好きな私達だからこその力のある演奏をします！みんなが一度は聞いたことのある曲をするのでぜひ聴きに来てください！' },
        { show: false, cat:'team', title: 'Leo(バンド)', at: 'X棟n階', by: 'Leo(10回生)', src: '/council.png', desc: '私達は、10回生4人で構成されているバンドです！メンバーのボーカル兼エレキ、アコギ、キーボード、そして盛り上げ隊長(？)は、それぞれそれなりに個性的なメンバーです！バンドの名前は、8月の星座の名前から取りました。バンドを結成したのが丁度去年の8月だったからです。そんな私達が、約半年間かけて練習してきた数曲を、全力で演奏します！' },
        { show: false, cat:'team', title: 'anima(バンド)', at: 'X棟n階', by: 'anima(9回生)', src: '/council.png', desc: 'こんにちは！私たちはanimaです。曲ごとによってメンバーが変わって出演するので、どの曲を誰がするかは当日のお楽しみ！最高に楽しいステージを届けるので一緒に盛り上がりましょう！' },       
        { show: false, cat:'team', title: 'うなぎパイ補完計画(バンド)', at: 'X棟n階', by: 'うなぎパイ補完計画(11回生)', src: '/council.png', desc: 'うなぎパイ補完計画（仮）です。ノリと勢いだけで集まった６人組がアニメ曲を演奏します。サックスが入っていたりキーボードが二人だったり摩訶不思議なバンドですがぜひ聞きに来てください' },
        { show: false, cat:'team', title: 'ダンス企画', at: 'X棟n階', by: 'アスリコット(11～13回生)', src: '/council.png', desc: '私たちアスリコットは11回生から13回生までのメンバーでダンスパフォーマンスをします！学年をまたいでのパフォーマンスも！？来たらあなたも盛り上がること間違いなし！ぜひ見に来てください！' },
        { show: false, cat:'team', title: '有志アニメーション', at: 'X棟n階', by: '10回生', src: '/council.png', desc: '「悪霊退散!」でお馴染みの陰陽師、実は現代技術を駆使する者だった!?この世界に隔たりなんて存在しない。奇想天外な「歴史×テクノロジー」堂々登場！' },
        { show: false, cat:'tfpt', title: 'とげラジ', at: 'X棟n階', by: 'TFPTと愉快なMCたち', src: '/unknown.png', desc: '昨年好評だったラジオ企画を今年も放送！' },
        { show: false, cat:'tfpt', title: 'クイズ企画', at: 'X棟n階', by: 'TFPT', src: '/unknown.png', desc: 'クイズ企画がパワーアップ！神大附属のクイズ王は誰だ！？' },
        { show: false, cat:'teacher', title: '教員主催企画', at: 'X棟n階', by: '教員', src: '/unknown.png', desc: '例' },
      ],
    };
  },
  computed: {
    prgHomeroom() {
      return this.programs.filter((program) => program.cat === "homeroom");
    },
    prgCouncil() {
      return this.programs.filter((program) => program.cat === "council");
    },
    prgTeam() {
      return this.programs.filter((program) => program.cat === "team");
    },
    prgTfpt() {
      return this.programs.filter((program) => program.cat === "tfpt");
    },
    prgTeacher() {
      return this.programs.filter((program) => program.cat === "teacher");
    },
  },
};
</script>
<style></style>
