<template>
  <div class="p-4 border rounded-12px shadow-sm">
    <h2 class="text-center mb-3">每日推薦</h2>
    <a href="#">
      <img
        class="w-100 rounded-6px mb-3"
        src="https://picsum.photos/300/300/?random=10"
      />
    </a>
    <div>
      <h4 class="fs-5">歌曲名稱</h4>
      <h5 class="fs-6">歌手名稱</h5>
    </div>
    <hr />
    <div>
      <p>
        每日一曲，是從精選專輯之中再次挑選而出，期待和各位一起欣賞每首好作品。
      </p>
    </div>
    <div class="d-grid gap-2 mx-auto mt-3">
      <button class="btn btn-secondary rounded-12px text-primary" type="button">
        聆聽更多
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayofSong'
}
</script>
