<template>
  <banner-carousel />
  <section class="container px-5 px-md-1 my-4">
    <div class="row">
      <div class="col-12 col-md-4 mt-4 mt-md-5 pe-md-5">
        <dayof-song/>
      </div>
      <div class="col-12 col-md-8 mt-5 mb-5">
        <leader-board />
      </div>
    </div>
  </section>
  <section class="container px-5 px-md-1 my-4">
    <featured-album/>
  </section>
  <section class="container px-5 px-md-1 my-5">
    <song-list/>
  </section>
  <section class="container px-5 px-md-1 my-5">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <span class="text-decoration-underline fst-italic">
          在聆聽歌曲的同時是否會喚起你的某些回憶？<br>
          歌曲不只傳唱出歌手的情感，也透過各種形式參與著我們的生活。<br><br>
          還記得小時候陪著爸媽一起看的八點檔，國高中時看的電視偶像劇、各種電影，以及長大後在手機平板上看的發燒 MV 嗎？<br>
          就讓我們來一起來尋找自己的音樂記憶吧！
        </span>
      </div>
    </div>
  </section>
  <!-- <iframe :src="`https://widget.kkbox.com/v1/?id=${kkboxData[1].album.id}&type=album&terr=SG&lang=en&autoplay=true`" allow="autoplay" height="600px" frameborder="0"></iframe> -->
  <!-- <iframe id="player" type="text/html" width="640" height="390"
  src="http://www.youtube.com/embed/S3nTbkmKfhk"
  frameborder="0"></iframe> -->
</template>

<style lang="scss">
</style>

<script>
import BannerCarousel from '@/components/FrontStage/Layout/Banner/BannerCarousel.vue'
import DayofSong from '@/components/FrontStage/HomePage/DayofSong.vue'
import LeaderBoard from '@/components/FrontStage/HomePage/LeaderBoard.vue'
import FeaturedAlbum from '@/components/FrontStage/HomePage/FeaturedAlbum.vue'
import SongList from '@/components/FrontStage/HomePage/SongList.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      token: '',
      kkboxData: ''
    }
  },
  methods: {
    getSearch () {
      const config = {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
      this.$http.get('https://api.kkbox.com/v1.1/search?q=茄子蛋&type=artist,track&territory=TW', config)
        .then(res => {
          console.log(res)
          this.kkboxData = res.data.tracks.data
        })
    }
  },
  created () {
  },
  components: {
    BannerCarousel,
    DayofSong,
    LeaderBoard,
    FeaturedAlbum,
    SongList
  }
}
</script>
