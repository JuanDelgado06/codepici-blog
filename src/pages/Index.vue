<template>
  <Layout :showFooter="true" :isActive="false" style="background: #080808">
    <ClientOnly>
      <div class="wrap-banner ">
        <div class="main-title MyContainer">
          <vue-typed-js :strings="['con CodePici', 'el Futuro']">
            <h1 class="title-hero">Desarrollando <span class="subtitle-hero typing"></span></h1>
          </vue-typed-js>          
        </div>
        <div class="particle">
          <vue-particles
              color="#2cd1b0" linesColor="#834efd" class="particle-js"
              :particleOpacity="0.8" :particlesNumber="80" shapeType="triangle" :particleSize="4"
              :linesWidth="1.5" :lineOpacity="0.7" :linesDistance="180" :moveSpeed="5" >      
          </vue-particles>
        </div>
      </div>
      <div class="MyContainer ">    
          <div class="title-init">
              <h2 class="glitch" data-text="Ultimas Publicaciones">Ultimas Publicaciones</h2>
          </div>         
          <div class="lastPost">
            <PostCardHome v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
          </div>
          <FormNetlify id="contact"/>
      </div>
      <btnTop :offset="800"/>
    </ClientOnly>
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
        cover_image 
        path
      }
    }
  }
}
</page-query>

<script>
import PostCardHome from '~/components/PostCardHome.vue'
import FormNetlify from '~/components/FormNetlify.vue'
import btnTop from '~/components/plugins/ButtonTop'

export default {
  data() {
    return {
      img : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4f403379780121.5db47ac9a167b.jpg'      
    }
  },
  metaInfo () {
    return {
      title: "CodePici",
      meta: [
        {
          name: 'description',
          content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web"
        },
        { property: "og:type", content: 'article' },
        { property: "og:title", content: "CodePici" },
        { property: "og:description", content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web" },
        { property: "og:url", content: "https://codepici-blog.site/blog/" },
        { property: "og:image", content: this.img },
        
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "CodePici" },
        { name: "twitter:description", content: "Aprende desarrollo, diseño y programacion web. Aqui encontraras articulos, tutoriales y mucho mas, todo relacionado con el mundo del desarrollo web" },
        { name: "twitter:site", content: "@codepici" },
        { name: "twitter:creator", content: "@codepici" },
        { name: "twitter:image", content: this.img },
      ]
    }
  },
  components: { PostCardHome, FormNetlify, btnTop},
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.wrap-banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
}
.main-title {
  z-index: 999;
  display: flex;
  justify-content: center;
}
.particle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.particle-js {
  width: 100%;
  height: 100%;
}
.title-hero {
  font-size: 2.4rem;
  text-align: center;
  font-family: $font-code;
  font-weight: 500;
  .subtitle-hero {
    font-family: $font-code;
    font-weight: 500;
  }
  @include  respond-to(small) {
    font-size: 4rem;
  }
}
.home-links a {
  margin-right: 1rem;
}
.title-init {
  margin: 2rem  0 ;
  border-bottom: 1px solid;
  border-top: 1px solid;
  padding: .7rem;
  @include respond-to(small) {
    margin: 3rem 0;
    padding: 1rem;
  }
  h2 {
    margin: 0;
    text-transform: uppercase;
    text-align: center;
    font-weight: 500;
    font-size: 1.8rem;
    @include respond-to(small) {
      font-size: 3.5rem;
    }
  }
}
.carousel {
  margin: 2rem 0;
}
.lastPost {
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @include respond-to(semiBig) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
  }
}
</style>
