<template>
  <Layout :showFooter="true">
    <div class="MyContainer header-content blog"  >
      <h2 class="blog-subtitle"> Publicaciones en total: {{totalPost}}</h2>
      <transition name="fade" appear>
        <div class="blog-posts" >
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>     
      </transition>
      <Pager :info="$page.posts.pageInfo" class="pagination"  linkClass="pagination-item"
            prevLabel="←" nextLabel="→" firstLabel="|←" lastLabel="→|" :range="6" ariaLabel="..."/>            
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, sortBy: "date", order: DESC, perPage: 6, page: $page ) @paginate {
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
        cover_image (width: 770, height: 400, blur: 10)
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
      isActive : true,
      totalPost: ''
    }
  },
  mounted () {
    this.totalPost = this.$page.posts.totalCount
  },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.blog {
  &-subtitle {
    margin: 0 0 1rem 0;
  }
  &-posts {
    @include respond-to(mid) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
    }
    // @include respond-to(big) {
    //   grid-template-columns: repeat(3, 1fr)
    // }
  }
}
.pagination {
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
  width: 60%;
  @include respond-to(small) {
    width: 50%;
    a {
      font-size: 1rem;
    }
  }
  .active--exact {
    color: $c-dark;
    background: $c-primary;
    padding: .2rem 0.6rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 11px 10px 37px 9px rgba(0, 0, 0, 0.76);
    text-shadow: none;
  }
  a {
    color: $c-default;
    transition: all .4s ease-in;
    font-size: 1rem;
    font-weight: bold;
    font-family: $font-nice;
    text-shadow: 2px 2px 5px #6333d4a8;
    @include respond-to(small) {
    a {
      font-size: 1.5rem;
    }
  }
  }
}
</style>