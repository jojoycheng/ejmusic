<template>
  <h2>{{ boardTitle }}</h2>
  <div class="mt-3 mt-md-5">
    <ul class="m-0 p-0">
      <li style="list-style: none" v-for="num in 20" :key="num">
        <div class="d-flex align-items-center justify-content-between py-3">
          <div class="d-flex align-items-center">
            <div
              class="
                d-flex
                justify-content-center
                align-items-center
                w-28px
                w-sm-36px
                h-28px
                h-sm-36px
                me-3
                me-md-4
                rounded-circle
                numberlist
              "
            >
              <h4 class="m-0 fs-5">{{ num }}</h4>
            </div>
            <a href="#">
              <img
                class="w-60px h-60px w-md-90px h-md-90px me-3 me-sm-4 rounded-12px"
                src="https://picsum.photos/100/100/?random=10"
              />
            </a>
            <div>
              <h4 class="fs-7 fs-md-5">歌曲名稱</h4>
              <h5 class="fs-8 fs-md-6">歌手名稱</h5>
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
        <hr class="m-0" />
      </li>
    </ul>
    <div class="text-center mt-5">
      <button class="btn btn-secondary w-50 rounded-12px text-primary" type="button">
        聆聽更多
      </button>
    </div>
  </div>
</template>

<style lang="scss">
ul li {
  &:nth-of-type(1) .numberlist {
    background-color: rgb(255, 217, 0);
  }
  &:nth-of-type(2) .numberlist {
    background-color: rgb(198, 198, 198);
  }
  &:nth-of-type(3) .numberlist {
    background-color: rgba(226, 140, 2, 0.861);
  }
}

@for $i from 6 through 20 {
  ul li:nth-of-type(#{$i}) {
    @media screen and (min-width: 768px) {
      img {
      max-width: 70px;
      max-height: 70px;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'LeaderBoardFull',
  props: ['boardTitle'],
  data () {
    return {
    }
  }
}
</script>
