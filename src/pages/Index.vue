<template>
  <Layout :showFooter="true" :isActive="false">
    <ClientOnly>
    <div class="home">
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
    </div>
    <div class="MyContainer"  >             
        <p v-scroll-reveal.reset>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>
        
        <p v-scroll-reveal.reset>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vel minus esse repellendus repudiandae vero. Maiores assumenda doloribus modi reiciendis at fuga deleniti maxime deserunt, repudiandae non saepe quas! Ut.</p>
        <h2>Ultimas publicaciones</h2>
        <div class="last-post">
            <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
    </div>
    </ClientOnly>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, sortBy: "date", order: DESC, perPage: 4, page: $page ) @paginate {
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
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  metaInfo: {
    title: 'Home'
  },
  components: { PostCard }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.home {
  background-image: url(../assets/img/bg-galaxia.png);
  background-size: cover;
}
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
.last-post {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  @include respond-to(small) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
