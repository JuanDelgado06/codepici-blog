<template>
  <div class="master" :dialogVisible="true">
    <div class="header-container" 
      :class="{headerBar : isActive, paddingHome: padding, paddingHeader : isActive}">
      <header class="MyHeader MyContainer">
        <div class="title-header">
            <g-link to="/" class="logo-header">
                <g-image alt="logo" src="~/favicon.png" ></g-image>
            </g-link>
          <strong>
            <g-link to="/" class="title__link title-bar">
            {{ $static.metadata.siteName }}
            </g-link>
          </strong>
        </div>
          <!-- BOTON PARA MENU DRAWER -->
          <div class="nav view-mobile flex">
            <el-button @click="showSearch =  true" v-show="showSearch == false" v-if="showButtonSearch == true"><i class="fas fa-search"></i></el-button>
            <button @click.prevent="drawer = true" class="btn-menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <!-- MENU DRAWER DESKTOP -->
          <nav class="nav view-desktop flex">
              <g-link class="nav__link" to="/">Home</g-link>
              <g-link class="nav__link" to="/blog/">Blog</g-link>
              <g-link class="nav__link" to="/categoria/">Categorias</g-link>
              <a hreft="/#contact" class="nav__link" v-if="!isActive" v-scroll-to="'#contact'">Contácto</a>
              <g-link class="nav__link" to="/#contact" v-else>Contácto</g-link>
              <el-button @click="showSearch =  true" v-show="showSearch == false" class="nav__link" v-if="showButtonSearch == true"><i class="fas fa-search"></i></el-button>
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
              <g-link  to="/blog/" class="nav-link-mobile">Blog</g-link> 
            </el-menu-item>           
            <el-menu-item index="3">
              <g-link  to="/categoria/" class="nav-link-mobile">Categorias</g-link> 
            </el-menu-item>           
            <el-menu-item index="4">
              <a hreft="/#contact"  class="nav-link-mobile" v-if="!isActive" v-scroll-to="'#contact'" @click="drawer = false">Contácto</a>
              <g-link  class="nav-link-mobile" to="/#contact" v-else>Contácto</g-link>
            </el-menu-item>           
        </el-menu>
    </el-drawer>   
    <div class="button-search" >
      <SearchInput   v-if="showSearch"/>
      <el-button 
          @click="closeModal"
          icon="el-icon-close" 
          v-show="showSearch ==  true" class="close-search" circle size="small">
      </el-button>
    </div>
    <section class="starts-background">
      <div class="stars"></div>
      <div class="stars2"></div>
    </section>
    <slot />
    <Footer v-if="showFooter" />
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
import SearchInput from '~/components/SearchInput'

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
    showFooter: true,
    showButtonSearch : {
      type: Boolean,
      default: true
    },
    isActive: {
      type: Boolean, 
      default: true
    }
  },
  components: { Footer, SearchInput  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      padding: true,
      showSearch: false,
    }
  },
  methods: {
    closeModal () {
      this.showSearch = false
    }
  }  
}
</script>

<style lang="scss" scope>
@import '@/assets/style/index';
.button-search {
  .el-button {
    background: rgba(255, 255, 255, 0);
    color: $c-default;
    font-size: 1.5rem;
    border: none;
    right: 1rem;  
    &:focus, &:hover {
      color: $c-primary;
      border: none;
      background-color: rgba(0, 0, 0, 0);
    }  
  }
  .close-search {
    position: fixed;
    z-index: 1001;
    top: 3.1rem;
    right: 7%;
    @include  respond-to(little) {
      top: 3.2rem;
      right: 8%;
    }    
    @include  respond-to(small) {
      top: 4.5rem;
      right: 10%;
    }
    @include  respond-to(semiBig) {
      right: 19%;
    }
    @include  respond-to(big) {
      top: 3.6rem;
      right: 22%;
    }
  }
}
.paddingHeader {
  padding: .1rem 0;
  position: fixed;
  top: 0;
  // transform: translate3d(0, 0, 0);
  // transition: 0.4s all ease-out;
  // @include  respond-to(small) {
  //   padding: .2rem 0;
  // }
}
.nav {
  align-self: center;
  .el-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0);
        border: none;
        color: $c-primary;
        font-size: 1.2rem;
        &:focus, &:hover {
        color: $c-primary;
        border: none;
        background-color: rgba(0, 0, 0, 0);
      }
  }
}
</style>
