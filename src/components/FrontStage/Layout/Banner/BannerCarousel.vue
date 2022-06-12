<template>
  <div id="carouselExampleCaptions" class="carousel slide banner" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style lang="scss">
.carousel-item {
  height: 60vh;
  @media screen and (min-width: 576px) {
    height: 70vh;
  }
  &:nth-of-type(1) {
    background: linear-gradient(90deg, rgb(1, 48, 72) 0%, transparent 60%),
    url('@/assets/img/banner01.jpg') center center/100% auto no-repeat;
    background-size: cover;
  }
  &:nth-of-type(2) {
    background: linear-gradient(90deg, rgb(72, 41, 1) 0%, transparent 60%),
    url('@/assets/img/banner02.jpg') center center/100% auto no-repeat;
    background-size: cover;
  }
  &:nth-of-type(3) {
    background: linear-gradient(90deg, rgba(104, 99, 1, 0.774) 0%, transparent 60%),
    url('@/assets/img/banner03.jpg') center center/100% auto no-repeat;
    background-size: cover;
  }
}

</style>

<script>
export default {
  name: 'BannerCarousel'
}
</script>
