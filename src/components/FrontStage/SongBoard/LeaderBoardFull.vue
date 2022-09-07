<template>
  <h2 class="pt-4 m-0">{{ boardTitle }}</h2>
  <div class="mt-3 mt-md-4">
    <ul class="mx-0 mb-5 p-0">
      <li class="leaderBoardStyle px-2" style="list-style: none" v-for="(chart, id) in boardData" :key="chart.id">
        <div class="row d-flex align-items-center justify-content-between py-3">
          <div class="col-12 col-lg-11 d-flex align-items-center">
            <div
              class="
                col-1
                d-flex
                justify-content-center
                align-items-center
                w-28px
                w-md-36px
                h-28px
                h-md-36px
                me-3
                rounded-circle
                numberlist
              "
            >
              <h4 class="m-0 fs-5">{{ id + 1 }}</h4>
            </div>
            <div class="col-3 col-xl-2">
              <a href="#">
                <img
                  class="w-60px h-60px w-md-90px h-md-90px me-3 me-sm-4 rounded-12px"
                  :src="chart.album.images[0].url"
                />
              </a>
            </div>
            <div class="col-8 col-lg-7 col-xl-9">
              <span class="fs-8 fs-md-6">{{ chart.name }}</span>
              <p class="fs-8 fs-md-7 text-black-50 pt-2 mb-2">{{ chart.album.artist.name}}</p>
            </div>
          </div>
          <div class="d-none d-lg-block col-lg-1">
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
        </div>
        <hr class="m-0" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.leaderBoardStyle {
  border-radius: 12px;
  overflow-wrap: break-word;
  &:nth-of-type(1) .numberlist {
    background-color: rgb(255, 217, 0);
    flex-shrink: 0;
  }
  &:nth-of-type(2) .numberlist {
    background-color: rgb(198, 198, 198);
    flex-shrink: 0;
  }
  &:nth-of-type(3) .numberlist {
    background-color: rgba(226, 140, 2, 0.861);
    flex-shrink: 0;
  }
}

.leaderBoardStyle:hover {
    background-color: #95a6fa29;
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
  props: ['boardTitle', 'boardData'],
  data () {
    return {
    }
  }
}
</script>
