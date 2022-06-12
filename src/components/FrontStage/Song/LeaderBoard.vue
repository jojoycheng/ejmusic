<template>
  <h2>即時排行榜</h2>
  <div class="mt-3 mt-md-5">
    <ul class="m-0 p-0">
      <li style="list-style: none" v-for="num in 10" :key="num">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div
              class="
                d-flex
                justify-content-center
                align-items-center
                w-36px
                h-36px
                me-4
                rounded-circle
                numberlist
              "
            >
              <h4 class="m-0 fs-5">{{ num }}</h4>
            </div>
            <a href="#">
              <img
                class="w-60px h-60px w-md-90px h-md-90px me-4 rounded-12px"
                src="https://picsum.photos/100/100/?random=10"
              />
            </a>
            <div>
              <h4 class="fs-5">歌曲名稱</h4>
              <h5 class="fs-6">歌手名稱</h5>
            </div>
          </div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#3948b4"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </a>
        </div>
        <hr />
      </li>
    </ul>
    <div class="d-grid gap-2 mx-auto mt-3">
      <button class="btn btn-secondary rounded-12px text-primary" type="button">
        聆聽更多
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  .numberlist {
    &:nth-of-type(1) {
      background-color: rgb(255, 217, 0);
    }
    &:nth-of-type(2) {
      background-color: rgb(198, 198, 198);
      }
    &:nth-of-type(3) {
      background-color: rgba(255, 157, 0, 0.861);
    }
  }
</style>

<script>
export default {
  name: 'LeaderBoard'
}
</script>
