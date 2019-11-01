<template>
  <Layout :isActive="true" :showFooter="false">
      <ClientOnly >
        <div class="conteiner-categorias">
          <div class="categorias">
            <ul  class="categorias-items">
                <li class="categorias-item" v-for="(tag, index) in $page.tags.edges" :key="index">
                  <div class="categorias-link">
                      <g-link
                        class="link-prueba"
                        :to="tag.node.path"
                      >{{tag.node.id}}</g-link>
                  </div>
                  <g-image src="../assets/img/bg-catego.jpg"></g-image>
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
  },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.conteiner-categorias {
  margin-top: 2rem;
  @include respond-to(small) {
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
.categorias {
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  &-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include respond-to(small) {
      grid-template-columns: repeat(4, 1fr);
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
    margin: 0 auto;
    left:0;
    right:0;
    height: 100%;
  }
  .link-prueba {
    color: $c-default;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
