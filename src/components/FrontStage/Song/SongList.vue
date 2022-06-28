<template>
  <div class="d-flex justify-content-between align-items-center pt-4 mb-2">
    <h2 class="m-0">推薦歌單</h2>
    <button class="d-none d-md-block btn btn-secondary rounded-12px text-primary" type="button">
      更多歌曲
    </button>
  </div>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col">
        <a href="#" class="text-decoration-none">
          <div
            class="w-100 bg-primary bg-gradient rounded-6px"
          >
            <div
            class="
              d-flex
              justify-content-between
              bg-transparent
              rounded-20px
              p-3
              mt-3
            "
          >
            <div class="d-flex">
              <div class="d-flex align-items-center w-60px w-md-90px h-60px h-md-90px me-4 rounded-12px bg-primary-light bg-gradient">
                <div class="w-45px h-45px text-white font-monospace mx-auto">懷 舊 精 選</div>
              </div>
              <div class="d-flex flex-column justify-content-between text-white m-0">
                <h4 class="fs-7 fs-md-5 pt-2">懷舊偶像劇</h4>
                <h5 class="fs-8 fs-md-6 border rounded-12px text-center px-3">14 首歌曲</h5>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#eee"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="#" class="text-decoration-none">
          <div
            class="w-100 bg-green bg-gradient rounded-6px"
          >
            <div
            class="
              d-flex
              justify-content-between
              bg-transparent
              rounded-20px
              p-3
              mt-3
            "
          >
            <div class="d-flex">
              <div class="d-flex align-items-center w-60px w-md-90px h-60px h-md-90px me-4 rounded-12px bg-green-light bg-gradient">
                <div class="w-45px h-45px text-white font-monospace mx-auto">電 影 精 選</div>
              </div>
              <div class="d-flex flex-column justify-content-between text-white m-0">
                <h4 class="fs-7 fs-md-5 pt-2">電影主題曲</h4>
                <h5 class="fs-8 fs-md-6 border rounded-12px text-center px-3">8 首歌曲</h5>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#eee"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
          </div>
        </a>
      </div>
      <div class="col">
        <a href="#" class="text-decoration-none">
          <div
            class="w-100 bg-red bg-gradient rounded-6px"
          >
            <div
            class="
              d-flex
              justify-content-between
              bg-transparent
              rounded-20px
              p-3
              mt-3
            "
          >
            <div class="d-flex">
              <div class="d-flex align-items-center w-60px w-md-90px h-60px h-md-90px me-4 rounded-12px bg-red-light bg-gradient">
                <div class="w-45px h-45px text-white font-monospace mx-auto">特 色 Ｍ Ｖ</div>
              </div>
              <div class="d-flex flex-column justify-content-between text-white m-0">
                <h4 class="fs-7 fs-md-5 pt-2">特色 MV 歌曲</h4>
                <h5 class="fs-8 fs-md-6 border rounded-12px text-center">8 首歌曲</h5>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#eee"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
          </div>
        </a>
      </div>
    <div class="col-12 text-center pt-5">
      <button class="d-md-none w-50 btn btn-secondary rounded-12px text-primary" type="button">
      更多歌曲
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SongList'
}
</script>
