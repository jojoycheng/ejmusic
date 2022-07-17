<template>
  <h2>綜合新歌即時榜</h2>
  <div class="mt-3 mt-md-5">
    <ul class="m-0 p-0">
      <li class="homeBoardStyle px-2" style="list-style: none" v-for="(chart, id) in chartData" :key="chart.id">
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
              <h4 class="m-0 fs-5">{{ id + 1 }}</h4>
            </div>
            <a href="#">
              <img
                class="w-60px h-60px w-md-90px h-md-90px me-3 me-sm-4 rounded-12px"
                :src="chart.album.images[0].url"
              />
            </a>
            <div>
              <p class="fs-8 fs-md-5">{{ chart.name }}</p>
              <p class="fs-8 fs-md-6 text-black-50">{{ chart.album.artist.name}}</p>
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
.homeBoardStyle {
  border-radius: 12px;
  &:nth-of-type(1) .numberlist {
    background-color: rgb(255, 217, 0);
  }
  &:nth-of-type(2) .numberlist {
    background-color: rgb(198, 198, 198);
  }
  &:nth-of-type(3) .numberlist {
    background-color: rgba(226, 140, 2, 0.861);
  }
  &:nth-of-type(6), &:nth-of-type(7), &:nth-of-type(8), &:nth-of-type(9), &:nth-of-type(10) {
    @media screen and (max-width: 576px) {
      display: none;
    }
    @media screen and (min-width: 768px) {
      img {
      max-width: 70px;
      max-height: 70px;
      }
    }
  }
}
.homeBoardStyle:hover {
    background-color: #95a6fa29;
  }
</style>

<script>
export default {
  name: 'LeaderBoard',
  data () {
    return {
      chartData: []
    }
  },
  props: ['token'],
  methods: {
    getChart (playlistID) {
      const config = {
        headers: {
          Authorization: 'Bearer PApI0Sz3hGuFZo-6XF-ViQ=='
        }
      }
      this.$http.get(`https://api.kkbox.com/v1.1/charts/${playlistID}/tracks?territory=TW&limit=10`, config)
        .then(res => {
          console.log(res.data.data)
          this.chartData = res.data.data
        })
    }
  },
  mounted () {
    this.getChart('LZPhK2EyYzN15dU-PT')
  }
}
</script>
