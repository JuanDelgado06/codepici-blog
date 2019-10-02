<template>
  <div class="master">
    <div class="header-container" :class="{headerBar : isActive, paddingHome: padding, paddingHeader : isActive}">
      <header class="MyHeader MyContainer">
        <div class="title-header">
            <g-link to="/" class="logo-header">
                <g-image alt="logo" src="../assets/img/logo.svg" ></g-image>
            </g-link>
          <strong>
            <g-link to="/" class="title__link title-bar">
            {{ $static.metadata.siteName }}
            </g-link>
          </strong>
        </div>
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
      </header>
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
      },
    ]
  },
  props: {
    isActive: null
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      padding: true
    }
  },
  components: { Footer }
}
</script>

<style lang="scss" scope>
@import '@/assets/style/index';
.master {
  z-index: 999;
}
.header-container {
  margin: 0 auto 20px auto;
  width: 100%;
  background: $c-dark-alt; 
  padding: .1rem 0;
  .navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
}
.paddingHeader {
  padding: .1rem 0;
  @include  respond-to(small) {
    padding: .2rem 0;
  }
}
.MyHeader {
  display: flex;
  justify-content: space-between;
  margin: .3rem auto;
  padding: 0 1rem;
}
.title-header {
  display: flex;
  align-items: center;
}
.title__link {
  border: none;
  font-size: 1.8rem;
  align-self: center;
  font-family: $font-code;
  @include  respond-to(small) {
    font-size: 2.4rem;
  }
  &:hover {
    color: $c-primary-alt;
  }
}
.logo-header {
  width: 2rem;
  margin-right: .5rem;
  @include respond-to(small) {
    width: 3rem;
  }
}
.nav {
  align-self: center;
}
.nav__link {
  margin-left: 1.2rem;
  color: $c-primary;
  font-family: $font-code;
  font-weight: bold;
  font-size: 1.4rem;
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
  height: 75vh;
}
.nav-link-mobile {
  color: $c-primary;
  font-size: 1.5rem;
  font-family: $font-code;
  font-weight: bold;
}
</style>
