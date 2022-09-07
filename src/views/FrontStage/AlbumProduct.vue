<template>
  <div class="albumBanner"></div>
  <section class="container px-4 px-md-1 my-4">
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3 mt-4 mt-md-5 pe-md-4">
        <div class="p-4 border rounded-12px shadow-sm">
          <ul class="px-0 pt-1">
            <li
              :class="{active: categoryParams === item.category}"
              class="mb-4 albumCategory liStyle"
              style="list-style: none"
              v-for="item in albumList"
              :key="item.title"
            >
              <router-link :to="`/albumProduct/${item.category}`" class="fs-5 text-dark text-decoration-none">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-9 mt-5 mb-5">
        <album-list :album-list="albumFilter"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.albumBanner {
  background: url("@/assets/img/banner04.jpg") center center/100% auto no-repeat;
  background-size: cover;
  height: 60vh;
}

.albumCategory:hover, .albumCategory.active {
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
import AlbumList from '@/components/FrontStage/AlbumProduct/AlbumList.vue'

export default {
  name: 'AlbumProduct',
  components: {
    AlbumList
  },
  data () {
    return {
      albumData: [],
      // albumFilter: [],
      albumList: [
        {
          title: '全部專輯',
          category: 'all'
        },
        {
          title: '懷舊偶像劇',
          category: 'idolDrama'
        },
        {
          title: '電影主題曲',
          category: 'themeMusic'
        },
        {
          title: '特色 MV 歌曲',
          category: 'featureMV'
        }
      ]
    }
  },
  computed: {
    categoryParams () {
      return this.$route.params.category
    },
    albumFilter () {
      if (this.categoryParams === 'all') {
        return this.albumData
      } else if (this.categoryParams === 'idolDrama') {
        return this.albumData.filter(album => album.category === '懷舊偶像劇')
      } else if (this.categoryParams === 'themeMusic') {
        return this.albumData.filter(album => album.category === '電影主題曲')
      } else {
        return this.albumData.filter(album => album.category === '特色 MV 歌曲')
      }
    }
  },
  methods: {
    getAlbum () {
      this.$http.get(`${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_PATH}/products/all`)
        .then(res => {
          console.log(res.data)
          this.albumData = res.data.products
          // this.albumFilter = [...this.albumData]
        })
        .catch(err => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getAlbum()
  }
}
</script>
