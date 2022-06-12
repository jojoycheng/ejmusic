<template>
  <banner-carousel />
  <section class="container px-5 px-md-1 my-4">
    <div class="row">
      <div class="col-12 col-md-4 mt-3 mt-md-5 pe-md-5">
        <div class="p-4 border rounded-12px shadow-sm">
          <h2 class="text-center mb-3">每日推薦</h2>
          <a href="#">
            <img class="w-100 rounded-6px mb-3" src="https://picsum.photos/300/300/?random=10">
          </a>
          <div>
            <h4 class="fs-5">歌曲名稱</h4>
            <h5 class="fs-6">歌手名稱</h5>
          </div>
          <hr>
          <div>
            <p>每日一曲，從精選專輯之中再次精選而出，是給每一首好作品的最高欣賞與鼓勵。</p>
          </div>
          <div class="d-grid gap-2 mx-auto mt-3">
            <button
              class="btn btn-secondary rounded-12px text-primary"
              type="button"
            >
              聆聽更多
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 mt-5">
        <leader-board/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
</style>

<script>
import BannerCarousel from '@/components/FrontStage/Layout/Banner/BannerCarousel.vue'
import LeaderBoard from '@/components/FrontStage/Song/LeaderBoard.vue'
export default {
  name: 'HomeView',
  components: {
    BannerCarousel,
    LeaderBoard
  }
}
</script>
