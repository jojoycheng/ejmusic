<template>
  <div class="albumBanner"></div>
  <section class="container px-4 px-xl-7 my-4">
    <div class="row d-flex justify-content-between mx-0 mt-5">
      <div class="col-12 col-lg-5 p-0 mb-lg-5 text-center">
        <img src="https://picsum.photos/300/300/?random=10" class="w-100">
      </div>
      <div class="col-12 col-lg-6 p-0 mt-5 mt-lg-0 mb-5">
        <div class="px-0 pb-2 m-0">
          <span>精選專輯 / </span>
          <span>懷舊偶像劇 / </span>
          <span>我可能不會愛你</span>
        </div>
        <h1 class="fs-4 fs-lg-2 mt-3">我可能不會愛你</h1>
        <p class="fs-7 fs-lg-6 text-black-50 mt-3">代表歌曲：還是會【韋禮安】</p>
        <p class="mt-4">
          <span class="text-primary p-1 border border-primary rounded-6px">全館免運</span>
        </p>
        <p>
          <span class="fs-5 fs-lg-3 text-primary me-4">NT$ 480</span>
          <span class="text-black-50"><del>NT$ 500</del></span>
        </p>
        <label for="quantity" class="fs-6 mb-2 me-2">數量</label>
        <select name="quantity" id="quantity" class="fs-6 p-2 pe-5">
          <option :value="num" v-for=" num in 10" :key="num">{{ num }}</option>
        </select>
        <div class="row justify-content-start mt-4 mx-0">
          <button type="button" class="col-8 col-lg-4  btn btn-primary p-3 px-4 me-5 fs-6">加入購物車</button>
          <button type="button" class="col-8 col-lg-4 btn btn-outline-success p-3 px-4 mt-3 mt-lg-0 fs-6">專輯試聽</button>
        </div>
        <p class="text-primary fs-6 mt-4">小計：<span class="fst-italic">NT$ 480 元</span></p>
      </div>
    </div>
  </section>
  <section class="container px-4 px-xl-7 my-4">
    <h2 class="fs-5 ps-2 mb-1">專輯介紹</h2>
    <hr class="m-0 h-2px">
    <div class="productIntro p-3">
      <p>
        八大重量級偶像劇「我可能不會愛你」是瞿友寧執導、徐譽庭編劇的都會愛情劇，由金鐘影后林依晨擔任女主角，以及影壇小天王陳柏霖、王陽明、陳匡怡共同演出，『我可能不會愛你』偶像劇是從女主角程又青即將邁入30大關為開始，講述一個關於「特別的朋友」的故事。
      </p>
      <br class="mt-3">
      <p>
        ◎「我可能不會愛你」電視原聲帶收錄片頭 / 片尾曲及動人插曲、配樂讓感動無限
      </p>
      <br class="mt-3">
      <p>
        「我可能不會愛你」電視原聲帶除了請來創作實力備受肯定的金曲新人王韋禮安譜寫及演唱片頭曲「還是會」，連偶像劇的主要演員們也紛紛為戲獻「聲」，女主角林依晨為戲演唱的片尾曲「翅膀」，不僅融入戲劇中而更加深刻，林依晨深情的詮釋也讓歌曲動人唯美又溫暖，男主角陳柏霖演唱的插曲「我不會喜歡你」，是由編劇徐譽庭為劇中男主角李大仁量身訂做寫下的歌詞，讓大家可以聽見隱藏在李大仁內心的情感拉扯，這首歌就像是對「我可能不會愛你」整部戲的註解，也讓人感到進退兩難的隱隱作痛，此外，還收錄蔡昌憲、王宏恩、Aggie
      </p>
      <br class="mt-3">
      <p>
        演唱的插曲及精緻配樂，讓大家再一次的感動回味，錯綜複雜的曖昧情愫和深刻難得的真摯情感。
      </p>
    </div>
  </section>
  <section class="container px-4 px-xl-7 my-4">
    <h2 class="fs-5 ps-2 mb-1">購物說明</h2>
    <hr class="m-0 h-2px">
    <div class="productIntro p-3">
      <p>
        使用電腦播放程式請留意：CD曲目的編排是否正確，將視您所使用之播放程式其串連的媒體資料庫所提供的資訊而定。若播放程式所顯示的專輯資訊內容與實際商品有出入，此非商品本身問題，請您可手動更新程式或向程式管理人員反應。
      </p>
      <br class="mt-3">
      <p>
      「限量商品購買提醒：因數量有限，若庫存不足時，將無法提供換貨，敬請包涵見諒。」
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.albumBanner {
  background: url("@/assets/img/banner04.jpg") center center/100% auto no-repeat;
  background-size: cover;
  height: 40vh;
}

.productIntro {
  // height: 500px;
  background-color: #3947b41a;
}
</style>

<script>
export default {
}
</script>
