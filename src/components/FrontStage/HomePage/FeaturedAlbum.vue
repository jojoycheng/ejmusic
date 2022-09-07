<template>
  <div class="d-flex justify-content-between align-items-center pt-4 my-4">
    <h2 class="m-0">精選專輯</h2>
    <button class="d-none d-md-block btn btn-secondary rounded-12px text-primary" type="button">
      更多專輯
    </button>
  </div>
  <div class="row row-cols-2 row-cols-md-4 g-4">
    <div class="col" v-for="i in 4" :key="i">
      <div class="card border rounded-6px shadow-sm">
        <a href="#">
          <img
            src="https://picsum.photos/300/300/?random=10"
            class="card-img-top w-100 rounded-6px shadow-md"
            alt="..."
          />
        </a>
        <div class="card-body px-2">
          <h5 class="card-title mt-2 fs-7 fs-sm-5">歌曲名稱</h5>
          <p class="card-text fs-8 fs-sm-6">歌手名稱</p>
        </div>
      </div>
    </div>
    <div class="col-12 text-center pt-4">
      <button class="d-md-none w-50 btn btn-secondary rounded-12px text-primary" type="button">
      更多專輯
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedAlbum'
}
</script>
