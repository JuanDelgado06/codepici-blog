<template>
  <Layout isActive= 'true' blog="true">
      <ClientOnly >
        <div class="MyContainer header-content"  >
            <vue-scroll-progress-bar backgroundColor="linear-gradient(to right, rgba(44, 209, 176, 0.65), rgba(130, 78, 253, 0.65))" height=".4rem" />
            <div class="mw">
                 <h1 v-block-reveal="{delay: 250, bgcolor: '#2cd1b0'}">Blog</h1>
                 
                <!-- <div class="post-list">
                    <div v-for="(edge, index) in $page.allPost.edges" :key="index">
                        <h1 class="title" v-html="edge.node.title" />
                        <p class="date" v-html="edge.node.date" />
                        <p class="description" v-html="edge.node.description" />
                        <p>{{edge.node.timeToRead}} min read</p>
                        <g-link :to="edge.node.path" class="read">Read More...</g-link>
                        <hr class="line" />
                    </div>
                </div>                  -->

            </div>
              
              

        </div>
      </ClientOnly>
  </Layout>
</template>

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
.mw {
    height: 100vh;
     padding-top: 3.5rem;
    @include  respond-to(small) {
      padding-top: 5rem;
    }
}
</style>