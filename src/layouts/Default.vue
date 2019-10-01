<template>
  <div class="master">
    <div class="header-container header-bar">
      <el-header class="MyHeader MyContainer">
          <strong>
            <g-link to="/" class="title__link title-bar">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <!-- BOTON PARA MENU DRAWER -->
          <div class="nav view-mobile">
            <button @click.prevent="drawer = true" class="btn-menu">
              <i class="el-icon-menu icon"></i>
            </button>
          </div>
          <!-- MENU DRAWER DESKTOP -->
          <nav class="nav view-desktop">
              <g-link class="nav__link" to="/">Home</g-link>
              <g-link class="nav__link" to="/about/">About</g-link>
          </nav>
      </el-header>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      custom-class="drawer-mobile" size="60%"
      >
        <el-menu background-color="#080808" class="menu-nav-mobile">
            <el-menu-item index="1">
              <g-link  to="/" class="nav-link-mobile">Home</g-link> 
            </el-menu-item>
            <el-menu-item index="2">
              <g-link  to="/about/" class="nav-link-mobile">About</g-link> 
            </el-menu-item>           
        </el-menu>

    </el-drawer>    
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from './Footer'
export default {
  metaInfo: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
      }
    ],
    // script: [
      // {
        // body: false,
        // src: 'https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js'
      // }
    // ]
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  components: { Footer }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/index';
.header-container {
  margin: 0 auto 20px auto;
  width: 100%;
  max-width: 1500px;
  background: $c-dark-alt;  
  .navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
}
.MyHeader {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__link {
  border: none;
  font-size: 2.2rem;
  &:hover {
        color: $c-primary-alt;
    }
}
.nav__link {
  margin-left: 1.2rem;
  color: $c-primary;
  &:hover {
    color: $c-primary-alt;
    }
}
.menu-nav-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 70vh;
}
.nav-link-mobile {
  color: $c-primary;
}
</style>
