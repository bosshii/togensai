<template>
  <div class="programs">
    <v-container class="my-5">
      <div class="text-h3">企画</div>
      <br><br>
      <b>目次:</b>&nbsp;<a href="#waittime">待ち時間</a>・<a href="#tfpt">本部企画</a>・<a href="#homeroom">学年企画</a>・<a href="#club">部活動&生徒会</a>・<a href="#team">有志企画</a>・<a href="#teacher">教員主催企画</a>
      <br>
      今年も個性豊かな企画が沢山集まりました。皆さんのご来訪をお待ちしています！<br><br>※写真・詳細情報は順次追加していきます
      <br><br>
      <div class="text-h4" id="waittime">待ち時間一覧</div>
      待ち時間を確認して賢く兎原祭を回りましょう。<br>表示されない場合は<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0yCISgJd2X-7nac2_KXjxTmJTuRACj4stpBTJOYTBAtovUaGAmKObObZKHNKa0nyClZEX8ry5jSRS/pubhtml?gid=1741501077&single=true" target="_blank">こちらから</a>。<br>担当者向け:<a href="https://docs.google.com/forms/d/e/1FAIpQLSc3gj6ZEWxxNhYOHym8yLWhAaG0TFsnRDFK5ulkIPFG3yDUjA/viewform?usp=sf_link" target="_blank">更新する</a><br>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0yCISgJd2X-7nac2_KXjxTmJTuRACj4stpBTJOYTBAtovUaGAmKObObZKHNKa0nyClZEX8ry5jSRS/pubhtml?gid=1741501077&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400px" frameborder="0" loading="lazy" class="elevation-3 rounded-lg"></iframe>
        </v-col>
      </v-row>
      <br><br>
      <div class="text-h4" id="time">タイムテーブル</div>
      <b>第一アリーナ(体育館)、屋外ステージ、音楽室(A棟3階)</b>で行われる企画はそれぞれ実施時間が決まっています。音楽室の企画は、<span style="color:#ff0000">公演開始10分前から整理券を配布します。人数が限られていますのでお早めにお越しください！</span><br>➪<router-link :to=" { name: 'timetable' } ">タイムテーブルはこちらから！</router-link>
      
      <br><br>
      <div class="text-h4" id="tfpt">本部企画</div>
      <v-row dense>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/images/prg/minhaya.jpg" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>クイズ大会</b><br>みんはや&対面 <router-link :to=" { name: 'quiz' } ">詳細はこちら</router-link></span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">クイズ企画がパワーアップ！神大附属のクイズ王は誰だ！？<router-link :to=" { name: 'quiz' } ">詳細はこちら！</router-link></div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/images/prg/radio.png" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>とげラジ</b><br><router-link :to=" { name: 'radio' } ">詳細はこちら</router-link></span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">昨年好評だったラジオ企画を今年も放送！<router-link :to=" { name: 'radio' } ">詳細はこちら！</router-link></div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-btn :ripple="false" color="#ff0707" depressed small class="white--text"><v-icon color="white">mdi-information</v-icon>情報</v-btn><b>「@場所」は実施場所を表します。「@E101/201」のようにスラッシュ付の場合、前者が晴天時、後者が雨天時の場所です。各部屋の位置はパンフレットまたは校内ディスプレイをご覧ください。</b>
      <div class="text-h4" id="homeroom">学年企画</div>
      <v-chip color="red" class="white--text">NEW</v-chip>&nbsp;学年企画のNo1を決めよう！<router-link :to=" { name: 'k1' } ">K-1グランプリ開催！</router-link>
      <v-row dense>
        <v-col v-for="program in prgHomeroom" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>{{ program.title }}</b><br>{{ program.by }} @ {{ program.at }}</span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4" id="club">部活・生徒会組織</div>
      <v-row dense>
        <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img src="/images/prg/asta.jpg" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>ASTA</b><br><router-link :to=" { name: 'asta' } ">詳細はこちら！</router-link></span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">ASTAは各班がさまざまな展示・製作を予定しています！<router-link :to=" { name: 'asta' } ">【詳細はこちら！】</router-link></div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col v-for="program in prgCouncil" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                 <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>{{ program.title }}</b><br>{{ program.by }} @ {{ program.at }}</span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4" id="team">有志企画</div>
      音楽室はA棟3階にございます。公演開始10分前から整理券を配布しますので、お早めにお越しください。
      <v-row dense>
        <v-col v-for="program in prgTeam" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>{{ program.title }}</b><br>{{ program.by }} @ {{ program.at }}</span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">{{ program.desc }}</div></v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div class="text-h4" id="teacher">教員主催企画・PTA</div>
      <v-row dense>
        <v-col v-for="program in prgTeacher" :key="program.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="program.src" class="white--text align-end" height="auto"></v-img>
            <v-card-actions class="mx-n2">
              <v-expansion-panels flat accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header style="width:100%;padding:10px 5px;"><span><b>{{ program.title }}</b><br>{{ program.by }} @ {{ program.at }}</span><template v-slot:actions><v-icon color="pink accent-2">$expand</v-icon></template></v-expansion-panel-header>
                  <v-expansion-panel-content class="px-4 mx-n7"><div style="color:black">{{ program.desc }}</div></v-expansion-panel-content>
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
        { cat:'homeroom', title: 'スポーツワールド', at: 'C204', by: '2年生', src: '/images/prg/unknown.png', desc: '世界のスポーツの中で気軽に楽しめるもの２つを、コロナ禍の旅行へ行きにくい今だからこそ体験してもらいたいと思います。がんばったら景品もあるかも？ぜひ来てください！' },
        { cat:'homeroom', title: '迷Q', at: 'E204', by: '2年生', src: '/images/prg/meiq.png', desc: '世界に関するクイズを解きながら迷路を抜ける、迷路とクイズを融合した企画　　　　　あなたは薄暗い迷宮に迷い込んでしまった。あなたの目の前にあるのは世界に関する2択の問題たち。この問題は一定時間すると変わるらしい。あなたはクイズに正解し、この迷宮を抜け出せるだろうか。' },
        { cat:'homeroom', title: 'ワールドカーニバルゲーム', at: 'E203', by: '2年生', src: '/images/prg/unknown.png', desc: 'トマトをたらいの中に投げ込んだりトマト瓶を倒したりして得点を稼ぐゲーム。　　　　　この企画はスペインで催されるトマティーナという祭りを参考に起案されたものです。実際の祭りでトマトを投げ合う様にならって、トマトを投げて遊べるようになっています。企画を楽しんでいただけるように精力を尽くしますので、是非よろしくお願いします。' },
        { cat:'homeroom', title: 'キノッコvsタケノッコ', at: '第2アリーナ', by: '3年生', src: '/images/prg/kinokotakenoko.png', desc: 'ここはお菓子の星、アポロ。星には二つ国がある。その名も『タケノッコ王国』と『キノッコ王国』どちらの王子も同じ姫に恋をしてしまう。『勝てば姫をやる』という条件で戦うことに…。果たして姫はどちらの手に！？' },
        { cat:'homeroom', title: '校襲電話～あなたには見えますか～', at: 'E302', by: '3年生', src: '/images/prg/telephone.png', desc: '人間を恨んでいる人形、マリーさんと繋がった電話を切るために呪われた教室を通り、受話器を戻す、ミッション型のお化け屋敷です。　　　　　みなさん、こんにちは！突然ですがみなさんはお化けを信じていますか？信じてない人は一度、お化け屋敷「校襲電話」に来てみるといいでしょう。ただし、入って無事に帰って来れる補償はないです...あなたは託された任務を無事にクリアし、無事帰って来ることができるでしょうか。是非来てください‼️' },
        { cat:'homeroom', title: 'うばら堂', at: 'D102・D103', by: '3年生', src: '/images/prg/ubaradou.png', desc: 'この企画では、日本と外国の遊びを楽しむことが出来ます。よくある遊びから、あまりない遊びまで！ おもいっきり力を使ってストレス発散し、大量のお菓子をゲットして幸せを感じましょう!? ぜひ遊びに来てください!!' },
        { cat:'homeroom', title: 'Everybody!!!', at: 'D104', by: '4年生', src: '/images/prg/everybody.jpg', desc: 'この企画では時間帯ごとにいろんな種類の(ミニゲーム、クイズ、ビンゴなど)大人数で行えるゲームを楽しめます！COVID-19対策を徹底して実施します。１人でも複数人でもかるーく遊びに来てください！' },
        { cat:'homeroom', title: '兎原寺の呪怨 ', at: 'D204', by: '4年生', src: '/images/prg/togenji.jpg', desc: '鐘の鳴り響く丑三つ時。この寺ではその昔、抉り出した少女の頭蓋骨を供える呪われた儀式が行われていた…関係者の不審死により儀式は取りやめになったが、今もその寺に近づくものには謎の失踪が起きるという…' },
        { cat:'homeroom', title: '縁日Fes', at: '運動場/D301', by: '4年生', src: '/images/prg/ennichifes.jpg', desc: 'スーパーボールすくいや射的などの屋台を出します。縁日で遊びたい人いたら、いつでも中庭にお越しください！射的でもスーパーボールでも何でもありますよ景品も御座います！とにかく中庭にお越しください！' },
        { cat:'homeroom', title: '劇「書きかけのミステリー」', at: '第1アリーナ', by: '5年生', src: '/images/prg/mistery.png', desc: 'ある大富豪一家で起こった不可解な殺人事件。完全オリジナルストーリーで構成する難解ミステリー！端から端まで伏線だらけのこの事件、結末を読まれない自信あり。この事件、あなたに解けますか？' },
        { cat:'homeroom', title: 'ぐるぐるダイナソーカップ', at: 'D304', by: '5年生', src: '/images/prg/dino.jpg', desc: 'ぐるぐるダイナソーカップはタイムスリップできるカップに乗って恐竜時代に行き恐竜の世界を楽しむアトラクションです。ぐるぐるとたくさん回転するアトラクションなので飛ばされたり酔ったりしないように気をつけてください！Lets Dinosaur！' },
        { cat:'homeroom', title: 'The Escape', at: 'C205[社会科室]', by: '5年生', src: '/images/prg/theescape.png', desc: 'お化け屋敷と謎解きゲームの融合。ようこそ滅亡した世界へ。あなたは自然を失ったこの地球に一人きり。彼女からのメッセージを頼りに様々な謎を解き、脱出用ロケットへたどり着け。想像を超える謎やからくりに挑め。愛を忘れるな。' },
        { cat:'homeroom', title: '演劇「不思議の国のアリス」', at: '第1アリーナ', by: '6年生', src: '/images/prg/alice.jpg', desc: '6年演劇では「不思議の国のアリス」を上演します！中等生活最後の兎原祭、受験勉強もあり各々が時間の無い中力を合わせて仕上げました。言わずと知れた名作、不思議の国のアリスを楽器演奏も交えてぜひお楽しみください！' },
        { cat:'homeroom', title: '大型制作', at: 'D203', by: '6年生', src: '/images/prg/works.png', desc: '約50人で大規模製作に取り組みました！製作物は3つあり、Kuss Art of Light、つまようじアートに加え、9回生学年企画劇の舞台装置製作にも携わっています。個性豊かな製作物、ぜひ楽しんでください。' },
        { cat:'homeroom', title: '映像制作', at: 'D203', by: '6年生', src: '/images/prg/unknown.png', desc: '&nbsp;' },
        { cat:'council', title: 'ミュージカル「シンデレラ」', at: '第1アリーナ', by: 'ESSパフォーマンス部', src: '/images/prg/essperformance.jpg', desc: '皆さんは観たくなる魔法にかかりましたか？誰も想像し得ない新感覚（多分）のMusical Cinderellaの開演です！Let’s get loud！✨✨' },
        { cat:'council', title: '公開ディベート', at: 'D202', by: 'ESSディベート部', src: '/images/prg/essdebate.jpg', desc: '今年も公開英語ディベートを行います！個性豊かな部員たちが全国レベルのスピーチを披露してくれます。国語や社会でやった人もいるディベートが「競技」になるとどうなるのか...？結果を是非確かめに来てください！' },
        { cat:'council', title: 'アニメ・ドラマの主題歌', at: '第1アリーナ', by: '吹奏楽部', src: '/images/prg/unknown.png', desc: 'こんにちは!!吹奏楽部は、70名以上の大所帯で日々活動しています。普段は個性で溢れる私達ですが、演奏ではひとつに団結して美しい音楽を奏でます。ぜひステージにお越しください💕' },
        { cat:'council', title: 'コーラス部', at: '第1アリーナ', by: 'コーラス部', src: '/images/prg/unknown.png', desc: 'こんにちは！コーラス部です！ 私達は「聴いてくださる方々に感動を」をモットーに日々楽しく活動しています。 兎原祭ではj-popからコンクール曲まで様々な曲を披露します。 また、合唱だけではなくダンスもあり、誰でも楽しめる内容となっているので、ぜひお越しください！' },
        { cat:'council', title: '魚・製作物展示・実験', at: 'E202/D201', by: '科学研究部', src: '/images/prg/science.jpg', desc: '科学研究部では、魚や部員が製作したものを展示しています。また、エッグドロップチャレンジを行うこともできます。実験を行っているかもしれません。是非来てみて下さい。' },
        { cat:'council', title: '合格おみくじ・恋みくじ', at: '中庭/D201', by: '男子バスケットボール部', src: '/images/prg/basketball.jpg', desc: '男子篭球部は普通の御籤だけではなく，大学受験，中学受験を占う合格御籤，恋愛経験豊富な我々のアドバイス付き恋御籤などを販売します．一回50円．割と豪華な景品あり．' },
        { cat:'council', title: 'ギネス世界記録にチャレンジ！', at: 'グラウンドステージ', by: '男子テニス部', src: '/images/prg/stage.png', desc: '男子テニス部のとある部員がギネス世界記録に本気で挑戦します。この日のために汗水たらしてトレーニングを積んできました。本気で本気の彼の下剋上をご覧ください。' },
        { cat:'council', title: 'クッキー販売', at: '中庭/E202', by: '家庭科研究部', src: '/images/prg/kateken.jpg', desc: '伝統の味、家庭科研究部のクッキーを販売しています！味はプレーン、チョコチップ、抹茶、紅茶の4種類！是非お買い求め下さい✨' },
        { cat:'council', title: 'フードドライブと食のクイズ', at: 'C103[リフレッシュルーム]', by: 'ESD foodプロジェクト', src: '/images/prg/esdfood.png', desc: '家に無駄になっている食品はありませんか?ESDフードプロジェクトでは今年度もフードドライブを行います!クイズも用意していますので、是非色々な食品を持ってきて下さい!' },
        { cat:'council', title: 'カラフルで映える写真スポット', at: 'E303', by: '女子バレーボール部', src: '/images/prg/unknown.png', desc: 'カラフルで映える写真スポットを作りました。女バレの明るく個性豊かな感じを表現しています。誰でも楽しめるので思い出づくりにぜひ気軽に来て写真を撮ってくれたらうれしいです！' },
        { cat:'council', title: '缶バッジ作りワークショップ・部員作品展示', at: 'E304', by: '美術部', src: '/images/prg/art.jpg', desc: 'びーっ、びじゅつぶ！げんきげんき！（某教育テレビのマラカス付き妖精風）　毎年大盛況の缶バッジ作りワークショップ、今年も開催します！部員を唸らせる作品を作った方には何かいいことがあるかも！？' },
        { cat:'council', title: 'クラシックやジャズ、Jpop', at: '第1アリーナ', by: 'アンサンブル同好会', src: '/images/prg/unknown.png', desc: 'アンサンブルの敷居をグッと下げて、お馴染みの楽曲を演奏します。クラシックやジャズ、Jpopと幅広いジャンルでお楽しみ頂けます。絶賛会員募集中！是非お越しください！皆さんを素敵なコンサート会場にお連れします。' },
        { cat:'council', title: '演劇部', at: '第1アリーナ', by: '演劇部', src: '/images/prg/unknown.png', desc: 'こんにちは、演劇部です！今回の作品は、いわゆる「学園モノ」。今しか出せないリアルさを大切に表現します。また、今回は一部ダブルキャスト。キャストによる違いも楽しめる要素のひとつです。是非お越しください！' },
        { cat:'council', title: 'とげたんオセロ', at: 'D303', by: 'PC部', src: '/images/prg/unknown.png', desc: 'プログラミングでゲーム作りや動画作りをみんなでしたり、1人でしたりと和気藹々とした楽しくフレンドリーな部活動です。' },
        { cat:'council', title: '学校グッズ販売', at: '中庭/D101', by: '生徒会執行部', src: '/images/prg/goods.png', desc: 'こんにちは！生徒会執行部です。中庭のアリーナ前で学校グッズを販売しています！ぜひお立ち寄りください！' },
        { cat:'team', title: '先生とプレバト!!', at: 'E104/E301', by: '有志+国語の先生', src: '/images/prg/haiku.png', desc: '俳句の査定でお馴染みの才能査定ランキングが兎原祭にやってきます！見事才能アリに輝くのは誰だ！？' },
        { cat:'team', title: '有志アニメーション', at: 'E301', by: '10回生有志', src: '/images/prg/animation.png', desc: '「悪霊退散!」でお馴染みの陰陽師、実は現代技術を駆使する者だった!?この世界に隔たりなんて存在しない。奇想天外な「歴史×テクノロジー」堂々登場！' },
        { cat:'team', title: 'calm with heat(バンド)', at: '音楽室', by: '吹奏楽部・コーラス部有志', src: '/images/prg/musicroom.png', desc: '私達5人は吹奏楽部とコーラス部で構成されています！音楽を知り、音楽が好きな私達だからこその力のある演奏をします！みんなが一度は聞いたことのある曲をするのでぜひ聴きに来てください！' },
        { cat:'team', title: 'Leo(バンド)', at: '音楽室', by: '10回生有志', src: '/images/prg/musicroom.png', desc: '私達は、10回生4人で構成されているバンドです！メンバーのボーカル兼エレキ、アコギ、キーボード、そして盛り上げ隊長(？)は、それぞれそれなりに個性的なメンバーです！バンドの名前は、8月の星座の名前から取りました。バンドを結成したのが丁度去年の8月だったからです。そんな私達が、約半年間かけて練習してきた数曲を、全力で演奏します！' },
        { cat:'team', title: 'anima(バンド)', at: '音楽室', by: '9回生有志', src: '/images/prg/musicroom.png', desc: 'こんにちは！私たちはanimaです。曲ごとによってメンバーが変わって出演するので、どの曲を誰がするかは当日のお楽しみ！最高に楽しいステージを届けるので一緒に盛り上がりましょう！' },       
        { cat:'team', title: 'うなぎパイ補完計画(バンド)', at: '音楽室', by: '11回生有志', src: '/images/prg/musicroom.png', desc: 'うなぎパイ補完計画（仮）です。ノリと勢いだけで集まった６人組がアニメ曲を演奏します。サックスが入っていたりキーボードが二人だったり摩訶不思議なバンドですがぜひ聞きに来てください' },
        { cat:'team', title: 'PIBARA(バンド)', at: '音楽室', by: '11回生有志', src: '/images/prg/musicroom.png', desc: '私たちPIBARAです！11回生5人で構成されたバンドグループです。未経験者もいる中、約1ヶ月間の練習で頑張って仕上げました！みんなが知ってる有名なあの曲も！？是非音楽室を覗いてみて下さい！！' },
        { cat:'team', title: 'AsRicotta(ダンス)', at: 'グラウンドステージ', by: '11～13回生有志', src: '/images/prg/stage.png', desc: '私たちアスリコットは11回生から13回生までのメンバーでダンスパフォーマンスをします！学年をまたいでのパフォーマンスも！？来たらあなたも盛り上がること間違いなし！ぜひ見に来てください！' },
        { cat:'teacher', title: '入学適性検査相談コーナー', at: 'C105[図書室]', by: '入学適性検査推進室', src: '/images/prg/council.png', desc: '適性検査相談会を実施します。' },
        { cat:'teacher', title: '家庭科教科展示', at: 'C305', by: '家庭科', src: '/images/prg/homeeconomics.jpg', desc: '生徒の日々の努力をご覧ください。※進路相談室です。家庭科教室ではありません' },
        { cat:'teacher', title: 'PTA制服リユース＆ミニ休憩スペース', at: 'E101[2年1組]/D101', by: 'PTA', src: '/images/prg/council.png', desc: '開催時間:　5/20(金)午前9：00～11：00　午後12：10～14：00' },
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
<style>
#anchor{
  padding-top:100px;
  margin-top:-100px;
}
</style>
