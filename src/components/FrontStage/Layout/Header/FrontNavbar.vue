<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container d-flex align-items-center px-0">
      <button
        class="navbar-toggler border-0 mt-1 px-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="22"
          fill="#3948b4"
          class="bi bi-menu-button-wide-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      <router-link
        class="
          navbar-brand
          d-flex
          align-items-center
          text-primary
          fs-4
          mx-0
          p-2
        "
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="#3948b4"
          class="bi bi-disc-fill pe-1 d-none d-md-block"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM4 8a4 4 0 0 1 4-4 .5.5 0 0 0 0-1 5 5 0 0 0-5 5 .5.5 0 0 0 1 0zm9 0a.5.5 0 1 0-1 0 4 4 0 0 1-4 4 .5.5 0 0 0 0 1 5 5 0 0 0 5-5z"
          />
        </svg>
        EJMusic</router-link
      >
      <a class="nav-link d-inline-block d-md-none p-2" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="#3948b4"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item text-center px-2">
            <router-link class="nav-link active fs-6" aria-current="page" to="/songBoard"
              >歌曲排行榜</router-link
            >
          </li>
          <li class="nav-item dropdown text-center px-2">
            <a
              class="nav-link active dropdown-toggle fs-6"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              精選專輯
            </a>
            <ul
              class="dropdown-menu border-0 border-md"
              aria-labelledby="navbarDropdown"
            >
              <li class="text-center">
                <a class="dropdown-item fs-6" href="#">全部專輯</a>
              </li>
              <li class="text-center">
                <a class="dropdown-item fs-6" href="#">懷舊偶像劇</a>
              </li>
              <li class="text-center">
                <a class="dropdown-item fs-6" href="#">電影主題曲</a>
              </li>
              <li class="text-center">
                <a class="dropdown-item fs-6" href="#">特色 MV 歌曲</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <a class="nav-link d-none d-md-inline-block pe-md-1" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="22"
          fill="#3948b4"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </a>
    </div>
  </nav>
</template>

<style lang="scss">
// @import "@/assets/stylesheets/all";
.nav-link:hover, .dropdown-item:hover {
  opacity: .75;
}

</style>

<script>
export default {
  name: 'FrontNavbar'
}
</script>
