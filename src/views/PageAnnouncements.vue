<template>
  <div class="announcements">
    <v-container class="my-5">
      <div class="text-h3">お知らせ・お願い</div>
      <br><br>
      みなさんに向けたお知らせ・お願いです。
      <br><br>
      <div class="text-h4">保護者の方へ</div>
      <div class="text-h5">フードコート</div>
      20日にご来校される保護者の皆様には、飲食を行うスペースとしてフードコートを16席ご用意しております。新型コロナウイルス感染対策としてフードコート以外での水分補給を除く飲食は原則不可とさせていただきますので、ご理解の程よろしくお願いします。<br>
      フードコートの空席状況は<router-link :to=" { name: 'programs' } ">こちらからご確認いただけます</router-link>。
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7">
          <a href="https://docs.google.com/viewer?url=https://togensai.jp/files/foodcourt.pdf" target="_blank">表示されない場合はこちら&nbsp;<v-icon color="primary">mdi-open-in-new</v-icon></a>（<a href="https://togensai.jp/files/foodcourt.pdf" target="_blank">それでも表示されない場合</a>）<br><br>
          <iframe height="700px" width="100%" class="GoogleDriveViewer__Frame--1sgoy elevation-3 rounded-lg" src="https://docs.google.com/viewer?url=https%3A%2F%2Ftogensai.jp%2Ffiles%2Ffoodcourt.pdf&amp;embedded=true" style="border: none;">読み込んでいます...</iframe>
        </v-col>
      </v-row>
      <br>
      <div class="text-h5">制服リユース</div>
      PTAの制服リユース＆ミニ休憩スペースは5/20(金)午前9：00～11：00、午後12：10～14：00に開設いたします。
      場所は２年１組（雨天時選択D1教室）です。
      <br>
      <br>
      <div class="text-h4">防疫対策</div>
      <v-card elevation="1" style="border: 1px solid black; margin-bottom:5px;">
        <v-card-title class="font-weight-bold"><v-icon color="pink">mdi-alert-circle</v-icon>&nbsp;守ってほしいこと</v-card-title>
        <v-card-text><div class="text-body-1" style="color:black"><ol>
          <li>昼食時以外はマスクを必ずつけましょう。</li>
          <li>兎原祭中は人と人との距離を保ち、長時間の会話は控えましょう。</li>
          <li>企画入場時等企画内で消毒の場が設けられている場合は必ず手指の消毒を行いましょう。</li>
          <li>各企画代表者は定期的に換気をするようにしましょう。</li>
          <li>兎原祭の途中で体調が悪くなったら、無理をしないようにしてください。</li>
        </ol></div></v-card-text>
      </v-card>
      <v-card elevation="1" style="border: 1px solid black; margin-bottom:5px;">
        <v-card-title class="font-weight-bold"><v-icon color="pink">mdi-check</v-icon>&nbsp;チェックリスト</v-card-title>
        <v-card-text><div class="text-body-1" style="color:black">以下に該当する方は、入場をお控えください。<ul>
          <li>現在、新型コロナウイルスの陽性者である</li>
          <li>新型コロナウイルスと診断されている人と2週間以内に会った</li>
          <li>濃厚接触者の疑いがある、または健康観察の対象者である</li>
          <li>直近で、所属学校・企業・団体等で新型コロナウイルス感染者が出て、自身が濃厚接触者かどうかまだ判明していない</li>
          <li>のどの痛み、強いだるさ、発熱、咳、息苦しさがある</li>
          <li>その他体調が悪い</li>
          <li>味がしない・においがしない</li>
          <li>下痢をしている（持病や食あたりなどを除く）</li>
          <li>2週間以内に海外渡航歴がある</li>
          <li>同居する人が以上の各項目にあてはまる</li>
        </ul></div></v-card-text>
      </v-card>		
      <ul><li>有志バンドを観覧するには整理券または招待券が必要です。整理券は各バンド公演開始10分前から、音楽室前の受付にて先着順で配布いたします。招待券は事前に各バンドから配布されます。感染対策のため、整理券・招待券合わせて観客は20人までとなっております。予めご了承ください。</li>
      <li>屋外ステージを観覧する際は感染対策のため、観客同士の距離を保ち、マスクを外しての会話や大声での声援はお控えください。</li></ul>
      <br>
      <div class="text-h4">おねがい</div>
      落し物や迷子を発見した場合、実行委員パーカーを着た生徒に伝えるか、本部（物理教室）に届け出るようご協力をお願いします。
      <br><br>
      <div class="text-h4">生徒の皆さんへ</div>
      <p>情報機器は節度をもって利用しましょう。歩きスマホは危険です。
      <div class="text-h5">情報委員会から</div>
      今年度の兎原祭でのICT機器の使用に関する禁止・注意事項について、兎原祭実行委員・情報委員会で話し合い、決定した内容をお知らせします。これらの事項は個人情報保護や肖像権・著作権の侵害等による重大なトラブルの発生を抑制するために作成しています。ご理解、ご協力をお願いします。
      <v-card elevation="15">
        <v-card-title>〜禁止事項〜</v-card-title>
        <v-card-text><div class="text-body-1" style="color:black"><ul>
          <li>個人や人物の撮影の際、<b><u>本人の許可を取らずに撮影する行為を禁止する</u></b></li>
          <li><b><u>撮影したデータの送受信及び公開を禁止する</u></b>.このとき<b><u>企画で使用されている制作物等の著作物の撮影データ等の送受信も禁止</u></b>する(SNS・メール・ウェブサイト等へのアップロードを含む)</li>
          <li><b><u>野外ステージ・アリーナで開催される、有志者によるパフォーマンス等(コーラス部・ダンス・バンド等)の撮影・録音等は禁止する</u></b>.ただし、教員等から撮影・録音等の許可を取り、十分に配慮している団体及び生徒による撮影・録音等はこの限りでない</li>
          <li>校内Wi-Fiの使用に関しては<b><u>兎原祭に関係のないサイト等の閲覧を禁止する</u></b></li>
        </ul></div></v-card-text>
      </v-card>
      <br>
      以上の禁止事項に加え、<b><u>常識の範囲内での使用</u></b>をよろしくお願いします。また、<b><u>情報モラル・基本的な携帯電話の利用マナーを遵守してください</u></b>。<br>
      大きなトラブルが発生してからでは<b><u>取り返しがつきません</u></b>。また、大きなそのような事態が発生した際には、<b><u>校内でのICTデバイスの利用に制限をかけるといった措置が取られることがあります</u></b>。そうなってしまった際に<b><u>不利益を被るのは自分たちであるということを理解し、友達・仲間同士で注意し合うように</u></b>してください。
      大きなトラブルが発生しないようにルール・マナーを守ってICTの利用をしてください。
    </v-container>
  </div>
</template>
<script></script>
<style></style>
