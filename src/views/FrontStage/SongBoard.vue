<template>
  <div class="songBanner"></div>
  <section class="container px-5 px-md-1 my-4">
    <div class="row">
      <div class="col-12 col-md-5 col-lg-4 mt-4 mt-md-5 pe-md-5">
        <div class="p-4 border rounded-12px shadow-sm">
          <h3 class="mb-4">分類排行</h3>
          <ul class="px-0 pt-1">
            <li
              :class="{active:isActive === item.title}"
              class="mb-4 category liStyle"
              style="list-style: none"
              v-for="item in boardList"
              :key="item.title"
              @click="changeChart(item.title, item.playlistID)"
            >
              <router-link to="/songBoard" class="fs-5 text-dark text-decoration-none">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-7 col-lg-8 mt-5 mb-5">
        <leader-board-full :board-title="isActive" :board-data="chartNum(20)"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.songBanner {
  background: url("@/assets/img/banner04.jpg") center center/100% auto no-repeat;
  background-size: cover;
  height: 60vh;
}

.category:hover, .category.active {
  font-style: italic;
  border-left: #6573df 3px solid;
  padding-left: 8px;
  transition: all 0.2s;
}

.liStyle:hover {
  background-color: #95a6fa29;
}

</style>

<script>
import LeaderBoardFull from '@/components/FrontStage/SongBoard/LeaderBoardFull.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'SongBoard',
  components: {
    LeaderBoardFull
  },
  data () {
    return {
      isActive: '綜合新歌即時榜',
      boardList: [
        {
          title: '綜合新歌即時榜',
          playlistID: 'LZPhK2EyYzN15dU-PT'
        },
        {
          title: '華語單曲排行榜',
          playlistID: 'H-bKpKtcP2hFFflUeh'
        },
        {
          title: '台語單曲排行榜',
          playlistID: '9_sZfxEJmE4IFt2ETX'
        },
        {
          title: '西洋單曲排行榜',
          playlistID: 'SqKba6FG219sIuWjcp'
        },
        {
          title: '日語單曲排行榜',
          playlistID: 'OmgrDOSpy7BGdwm1fm'
        },
        {
          title: '韓語單曲排行榜',
          playlistID: 'PZJIscJ-MWFJoBASGl'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      token: 'token',
      tokenType: 'tokenType'
    }),
    ...mapGetters(['chartNum'])
  },
  methods: {
    changeChart (title, playlistID) {
      if (this.$store.state.token) {
        this.$store.dispatch('getChart', playlistID)
      } else {
        this.$store.dispatch('getToken', playlistID)
      }
      this.isActive = this.isActive === title ? title : title
    }
  },
  mounted () {
    this.changeChart(this.isActive, this.boardList[0].playlistID)
  }

}
</script>
