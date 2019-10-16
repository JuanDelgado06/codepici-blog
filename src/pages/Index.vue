<template>
  <Layout class="home" :showFooter="true" :isActive="false">
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
    <div class="MyContainer"  v-scroll-reveal.reset>             
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>
        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vel minus esse repellendus repudiandae vero. Maiores assumenda doloribus modi reiciendis at fuga deleniti maxime deserunt, repudiandae non saepe quas! Ut.</p>

   
    </div>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
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
  .subtitle-hero {
    font-family: $font-code;
  }
  @include  respond-to(small) {
    font-size: 4rem;
  }
}
.home-links a {
  margin-right: 1rem;
}
</style>
