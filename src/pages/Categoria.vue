<template>
  <Layout :isActive="true" :showFooter="false" class="dont-scroll">
      <ClientOnly >
        <div class="conteiner-categorias">
          <div class="categorias">
            <ul  class="categorias-items">
                <li class="categorias-item" v-for="(tag, index) in $page.tags.edges" :key="index">
                  <div class="categoria-1"  v-if="index % 2 == 0">
                    <div class="categorias-link">
                        <g-link
                          class="link-prueba"
                          :to="tag.node.path"
                        >{{tag.node.id}}</g-link>
                    </div>
                    <g-image class="categoria-image" src="../assets/img/bg-catego.jpg"
                      v-if="index % 2 == 0"
                    ></g-image>
                  </div>
                  <div class="categoria-2 zoom-1" v-else>
                      <div class="categorias-link">
                          <g-link
                            class="link-prueba"
                            :to="tag.node.path"
                          >{{tag.node.id}}</g-link>
                      </div>
                      <g-image class="categoria-image" src="../assets/img/bg-catego-2.jpg"></g-image>
                  </div>
                  <!-- <g-image v-if="tag.node.id == 'vue' " class="categoria-image" src="../assets/img/logo.svg"></g-image> -->
                </li>
              </ul>
          </div>
        </div>
      </ClientOnly>
  </Layout>
</template>

<page-query>
query Posts {
  tags: allTag ( sortBy: "path", order: ASC ) {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
import btnTop from '~/components/plugins/ButtonTop'

export default {
  metaInfo: {
    title: 'About'
  },
  components: {  btnTop  },
  data() {
    return {
      isActive : true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.conteiner-categorias {
  margin-top: 2rem;
  @include respond-to(mid) {
      margin-top: 3rem;
    ::-webkit-scrollbar {
      width: .5rem;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(44, 209, 176, 0.8); 
      // border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: $c-primary-alt; 
    }
  }
}
.categoria-1 {
  transition: all .3s ease-out;
  animation: zoom 2s;
  animation-iteration-count: infinite;
@keyframes zoom {
    0% {transform: scale(.9);}
    20% {transform: scale(1);}
    80% {transform: scale(1);}
    99% {transform: scale(.9);}
    100% {transform: scale(.9);}
  }  
}
.categoria-2 {
  transition: all .3s ease-out;
  animation: zoom-2 2s;
  animation-iteration-count: infinite;
  animation-delay: 1.5s;
  @keyframes zoom-2 {
    0% {transform: scale(.9);}
    20% {transform: scale(1);}
    80% {transform: scale(1);}
    99% {transform: scale(.9);}
    100% {transform: scale(.9);}
  }  
}
.categorias {
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  &-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include respond-to(mid) {
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
    }
    @include respond-to(big) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  &-item {
    position: relative;
    z-index: 2;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    color: $c-primary;
  }
  &-link {
    position: absolute;
    left:0;
    right:0;
    height: 100%;
  }
  &-image {
    filter: blur(10px);
    opacity: 0.5;
  }
  .link-prueba {
    align-items: center;
    color: #f2f2f2;
    display: flex;
    justify-content: center;
    height: 100%;
    text-transform: uppercase;
    font-size: .8rem;
    @include respond-to(little) {
      font-size: 1rem;
    }
    @include respond-to(small) {
      font-size: 1.4rem;
    }
    @include respond-to(semiBig) {
      font-size: 1.8rem;
    }
  }
}
</style>
