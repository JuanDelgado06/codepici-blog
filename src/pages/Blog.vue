<template>
  <Layout isActive= 'true'>
      <ClientOnly >
        <div class="MyContainer header-content"  >
            <div class="mw">
                 <h1 v-block-reveal="{delay: 250, bgcolor: '#2cd1b0'}">Blog</h1>
                <div class="posts">
                  <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
                </div>                 
            </div>
        </div>
      </ClientOnly>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
import btnTop from '~/components/plugins/ButtonTop'

export default {
  metaInfo: {
    title: 'About'
  },
  components: {  btnTop, PostCard  },
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