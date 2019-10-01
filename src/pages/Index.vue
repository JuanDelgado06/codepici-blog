<template>
  <Layout>
    <ClientOnly>
    <div class="MyContainer home"  v-scroll-reveal.reset>
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <h1>Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
      </p>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum vel minus esse repellendus repudiandae vero. Maiores assumenda doloribus modi reiciendis at fuga deleniti maxime deserunt, repudiandae non saepe quas! Ut.</p>
      <p class="home-links">
        <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p>
    </div>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'  
  }
}
</script>

<style>
.home {
  min-height: 83vh;
}
.home-links a {
  margin-right: 1rem;
}
</style>
