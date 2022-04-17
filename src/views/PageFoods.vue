<template>
  <div class="foods">
    <v-container class="my-5">
      <div class="text-h3">食販</div>
      <br><br>
      兎原祭に食販が帰ってきました！校内で販売される飲食物のご案内です！<br>情報は順次公開予定です！どんなお店が出店するかお楽しみに！
      <v-row dense>
        <v-col v-for="shop in shops" :key="shop.title" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
          <v-card>
            <v-img :src="shop.src" class="white--text align-end" height="auto">
              <div style="background-color:rgba(255,255,255,0.8)"><v-card-title style="color:black" v-text="shop.title" class="text-caption"></v-card-title></div>
            </v-img>
            <v-card-actions>
              <v-btn @click="show = !show" color="#E91E63" text>開く</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show"><v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text v-text="shop.desc"></v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-card elevation="15" style="border: 3px solid red">
        <v-card-title class="justify-center font-weight-bold">感染拡大防止のためのお願い</v-card-title>
        <v-card-text><div class="text-body-1" style="color:black">
          校内で発売される食品について、<b>フードコートを設置</b>いたします。お食事の際はフードコートをご利用ください。また、フードコートでは校内で発売された食品以外のお食事を制限させていただきます。また、その他係員の指示に従ってご利用ください。
        </div></v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      shops: [
        { title: '大学生協', src: '/coop.png', desc: '神戸大学生協が食販を実施します。@購買部' },
        { title: 'トミーズ', src: '/tommys.png', desc: '「あん食」で有名なトミーズが出店します！' },
        { title: '生徒会', src: '/council.png', desc: '生徒会が飲料水などの販売をします。' },
        { title: '外部食販', src: '/unknown.png', desc: '何が出店するかお楽しみに！' },
        { title: '外部食販', src: '/unknown.png', desc: '何が出店するかお楽しみに！' },
        { title: '外部食販', src: '/unknown.png', desc: '何が出店するかお楽しみに！' },
      ],
      show: false,
    }),
  }
</script>
<style></style>
