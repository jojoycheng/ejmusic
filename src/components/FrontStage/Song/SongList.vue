<template>
  <a href="#" class="position-relative">
          <div class="d-md-none w-100 h-70 position-absolute bottom-0 bg-dark rounded-6px" style="z-index: -1"></div>
          <div
            class="
              d-flex
              flex-md-column
              justify-content-between
              bg-transparent bg-md-white
              rounded-20px
              p-3
              mt-3
            "
          >
            <div class="d-flex d-md-block align-items-end">
              <div
                class="
                  w-90px
                  h-90px
                  w-md-150px
                  h-md-150px
                  me-4
                  m-md-0
                  rounded-12px
                  bg-primary bg-md-primary
                "
              ></div>
              <div class="text-white m-0">
                <h4 class="fs-5">歌曲名稱</h4>
                <h5 class="fs-6">歌手名稱</h5>
              </div>
            </div>
            <div class="d-flex align-items-center pt-4">
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
        </a>
</template>

<script>
export default {
  name: 'SongList'
}
</script>
