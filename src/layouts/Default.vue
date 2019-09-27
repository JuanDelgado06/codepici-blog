<template>
  <div class="master">
    <div class="header-container header-bar">
      <el-header class="MyHeader MyContainer">
          <strong>
            <g-link to="/" class="title__link title-bar">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <!-- BOTON PARA MENU DRAWER -->
          <div class="nav" v-if="$mq.resize && $mq.below('600px')">
            <button @click.prevent="drawer = true" class="btn-menu">
              <i class="el-icon-menu icon"></i>
            </button>
          </div>
          <!-- MENU DRAWER DESKTOP -->
          <nav class="nav" v-if="$mq.resize && $mq.above('601px')">
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
            <el-menu-item index="1" class="prueba">
              <g-link  to="/" class="nav-link-mobile">Home</g-link> 
            </el-menu-item>
            <el-menu-item index="2">
              <g-link  to="/about/" class="nav-link-mobile">About</g-link> 
            </el-menu-item>           
        </el-menu>

    </el-drawer>    
    <footer class="MyFooter absolute-bottom footer-bar">
      <h3 class="title-footer">Mi Repositorio</h3>
      <social-sharing :url="url" inline-template 
                    title="Cursos Baratos" class="nav__link"
                    description="CodePici es el Mejor perros"
                    quote="Cursos Baratos"
                    hashtags="vuejs,codepici,juandelgado"
                    twitter-user="vuejs"
                  >
                  <div>
                    <network network="facebook" style="cursor: pointer;">
                      <a class="nav-link-mobile">Facebook
                      </a>
                    </network>
                  </div>
        </social-sharing>       
    </footer>
    <slot/>
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
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      url: 'https://github.com/JuanDelgado06'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.header-container {
  margin: 0 auto 20px auto;
  max-width: 1500px;
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
.MyFooter {
    width: 100%;
    position: fixed;
    background: $c-dark-alt;
    padding: .8rem;
    .title-footer {
      color: $c-primary;
      margin: 0;
    }
}
</style>
