<template>
  <div class="row row-cols-2 row-cols-lg-3 g-3 g-md-4 g-lg-5">
    <div class="col" v-for="album in albumList" :key="album.id">
      <div class="card border rounded-6px shadow-sm album">
        <div class="position-relative">
          <img
            :src="album.imageUrl"
            class="card-img-top w-100 rounded-6px shadow-md"
            alt="album"
          />
          <button class="btn btn-primary w-100 albumBtn" @click="addToCart(album.id)">加入購物車</button>
        </div>
        <div class="card-body px-2">
          <p class="card-title text-center mt-2 fs-7 fs-md-6 pt-2 mb-1">{{ album.title }}</p>
          <p class="card-text text-center fs-8 fs-md-7 text-black-50 mb-2">{{ album.description }}</p>
          <p class="card-text text-center">
            <span class="fs-7 fs-md-5 text-primary mb-1 me-4">NT$ {{ album.price }}</span>
            <span class="fs-7 fs-md-6 text-black-50"><del>NT$ {{ album.origin_price }}</del></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.albumBtn {
  position: absolute;
  bottom: -15%;
  left: 0;
  padding: 12px 0;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s;
}

.album:hover {
  .albumBtn {
    bottom: 0;
    opacity: 1;
  }
}
</style>

<script>
export default {
  name: 'AlbumList',
  props: ['albumList'],
  data () {
    return {
    }
  },
  methods: {
    addToCart (id) {
      this.$store.dispatch('addToCart', id)
      // const data = {
      //   data: {
      //     product_id: id,
      //     qty: 1
      //   }
      // }
      // this.$http.post(`${process.env.VUE_APP_BASE_URL}/api/${process.env.VUE_APP_API_PATH}/cart`, data)
      //   .then(res => {
      //     console.log(res.data)
      //   })
      //   .catch(err => {
      //     console.log(err.response)
      //   })
    }
  }
}
</script>
