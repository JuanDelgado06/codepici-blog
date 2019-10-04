<template>
  <Layout isActive= 'true' :showFooter="true">
        <div class="MyContainer header-content"  >
                 <h1 v-block-reveal="{delay: 250, bgcolor: '#2cd1b0'}">Blog</h1>
                <div class="posts">
                  <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
                </div>                 
                <Pager :info="$page.posts.pageInfo"/>
            </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, sortBy: "date", order: DESC, perPage: 3, page: $page ) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
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
import { Pager } from "gridsome";

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {  btnTop, PostCard, Pager  },
  data() {
    return {
      isActive : true
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/style/index';

</style>