<template>
  <div class="banner"></div>
  <section class="container px-5 px-md-1 my-4">
    <div class="row">
      <div class="col-12 col-md-4 mt-4 mt-md-5 pe-md-5">
        <div class="p-4 border rounded-12px shadow-sm">
          <h3 class="mb-4">分類排行</h3>
          <ul class="px-0 pt-1">
            <li
              :class="{active:isActive === item.title}"
              class="mb-4 category"
              style="list-style: none"
              v-for="item in boardList"
              :key="item.title"
              @click="changeStyle(item.title)"
            >
              <router-link to="/songBoard" class="fs-5 text-dark text-decoration-none">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-8 mt-5 mb-5">
        <leader-board-full :board-title="isActive"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  background: url("@/assets/img/banner04.jpg") center center/100% auto no-repeat;
  background-size: cover;
  height: 50vh;
}

.category:hover, .category.active {
  font-style: italic;
  border-left: #6573df 3px solid;
  padding-left: 8px;
  transition: all 0.2s;
}

</style>

<script>
import LeaderBoardFull from '@/components/FrontStage/Song/LeaderBoardFull.vue'

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
          title: '綜合新歌即時榜'
        },
        {
          title: '華語單曲排行榜'
        },
        {
          title: '台語單曲排行榜'
        },
        {
          title: '西洋單曲排行榜'
        },
        {
          title: '日語單曲排行榜'
        },
        {
          title: '韓語單曲排行榜'
        }
      ]
    }
  },
  methods: {
    changeStyle (title) {
      this.isActive = this.isActive === title ? title : title
    }
  }
}
</script>
