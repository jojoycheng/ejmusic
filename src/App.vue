<template>
  <front-navbar/>
  <router-view></router-view>
  <front-footer/>
</template>

<style lang="scss">
@import "@/assets/stylesheets/all";
</style>

<script>
import FrontNavbar from '@/components/FrontStage/Layout/Header/FrontNavbar.vue'
import FrontFooter from '@/components/FrontStage/Layout/Footer/FrontFooter.vue'
export default {
  components: {
    FrontNavbar,
    FrontFooter
  }
}
</script>
