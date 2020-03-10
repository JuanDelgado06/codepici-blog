<template>
  <Layout :showFooter="true">
    <div class="MyContainer header-content blog"  >
      <h2 class="blog-subtitle"> Publicaciones en total: {{totalPost}}</h2>
      <transition name="fade" appear>
        <div class="blog-posts" >
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>     
      </transition>

      <!-- <Adsense data-ad-client="ca-pub-3575861396081873" class="adsense"></Adsense>   -->
      
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
  components: {  btnTop, PostCard, Pager  },
  data() {
    return {
      isActive : true,
      totalPost: '',
      img : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4f403379780121.5db47ac9a167b.jpg'
    }
  },
  metaInfo () {
    return {
      title: "Blog",
      meta: [
        {
          name: 'description',
          content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web"
        },
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "CodePici Blog" },
        { property: "og:description", content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web" },
        { property: "og:url", content: "https://codepici-blog.site/blog/" },
        { property: "og:image", content: this.img },
        
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "CodePici Blog" },
        { name: "twitter:description", content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web" },
        { name: "twitter:site", content: "@codepici" },
        { name: "twitter:creator", content: "@codepici" },
        { name: "twitter:image", content: this.img },
      ],
      script: [
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async:true, defer:true },
        { src: '//d18mealirgdbbz.cloudfront.net/?laemd=844969', defer:true },
        { src: '//d18mealirgdbbz.cloudfront.net/?laemd=844972', defer:true },
      ]
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