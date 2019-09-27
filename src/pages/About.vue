<template>
  <Layout>

        <div class="MyContainer"  >
          <vue-read-progress color="#2cd1b0" opacity="0.6" height="5px" v-if="$mq.resize && $mq.below('1000px')"></vue-read-progress>
              <h1 v-block-reveal="{delay: 250, bgcolor: '#2cd1b0'}">About us</h1>
              <p v-scroll-reveal.reset="{ delay: 250 }">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id dictum tortor, at volutpat lectus. Sed at erat in felis varius dignissim. Vestibulum vestibulum dictum dapibus. Maecenas velit dolor, egestas nec ultrices vel, commodo vitae leo. Morbi semper rhoncus ante, vel venenatis lorem aliquet non. Nullam eget sem vestibulum est gravida efficitur. Donec sagittis condimentum mattis. Nulla a ultricies metus. Sed ornare, magna ut accumsan fringilla, est ante dictum est, vel efficitur velit risus eget ligula. Sed dictum sapien eget nisl cursus euismod. Sed euismod, tellus in pulvinar accumsan, tellus magna faucibus quam, sed porttitor ante velit eu lorem. In a elementum mauris, nec lacinia lacus. Nulla at dolor vitae quam gravida lobortis non vel massa. Nam eget urna eu felis faucibus lacinia sit amet a tortor.
              </p>
              <p v-scroll-reveal.resett="{ delay: 400 }">
        Vivamus pretium feugiat lacus, mollis luctus nibh dictum ac. Integer non tortor sed diam posuere feugiat. Fusce sit amet finibus nisi. Nulla porttitor, dui ac auctor hendrerit, justo nisi congue ante, ut viverra urna sapien a magna. Sed imperdiet aliquam interdum. Etiam mi orci, malesuada ut neque et, luctus finibus mauris. Sed tincidunt ipsum sem, sed mollis augue iaculis sed. Nullam a purus fermentum, egestas dolor sit amet, vehicula magna. Curabitur in blandit erat. Integer ultricies nisl arcu, vitae eleifend ligula accumsan et. Vivamus at tempor orci. Sed iaculis magna dolor, vel cursus ipsum gravida ac. Sed condimentum ultricies arcu id ornare. Curabitur scelerisque placerat semper. Sed vel accumsan nisi. Integer convallis lacus sit amet ex venenatis sollicitudin.
              </p>
        <p v-scroll-reveal.resett="{ delay: 400 }">
        Pellentesque odio orci, iaculis a porttitor eget, convallis nec ante. In condimentum pulvinar dui, et luctus ligula mollis sed. Quisque at mi vitae nisi sodales auctor eu tristique nisl. Mauris vestibulum, dui elementum posuere auctor, tellus felis convallis purus, sit amet blandit erat metus ac sapien. Nunc vitae ligula imperdiet, porttitor elit eu, pretium turpis. Ut sit amet pellentesque lectus, non tincidunt arcu. Phasellus vel tristique tortor. Fusce eget lacus placerat, iaculis lorem ut, convallis tortor. Morbi ac facilisis eros.

        </p>
        <expandable-image v-scroll-reveal.reset="{ delay: 400, easing: 'ease-in' }" alt="gato-gordo" src="https://images.unsplash.com/photo-1569576231685-8a0bb772d2f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></expandable-image>
        <h2  v-block-reveal="{delay: 250, bgcolor: '#2cd1b0', direction: 'lt'}">Probando el plugin Vue Block Reveal</h2>

        <p v-scroll-reveal.resett="{ delay: 400 }">

        Proin porta, arcu quis interdum efficitur, neque metus tempus mi, nec egestas neque mi at nunc. Etiam sed purus est. Donec sollicitudin posuere elit, in aliquam libero rhoncus ut. Integer tincidunt arcu quam, nec egestas justo mattis eget. Mauris a mi et sem lacinia iaculis. Maecenas commodo nec orci bibendum efficitur. Pellentesque ac viverra lacus, in efficitur lacus. Nulla aliquet arcu tortor, ac bibendum libero ultricies et. Vestibulum eu metus nunc. Pellentesque luctus fermentum magna. Maecenas porta, enim sit amet feugiat tempus, libero metus venenatis augue, ac dictum nisl enim id orci.
        </p>
      <g-image v-scroll-reveal.reset="{ delay: 400, easing: 'ease-in' }" alt="gato-gordo" src="https://www.pets4homes.co.uk/images/articles/4859/large/ten-interesting-facts-about-ragdoll-cats-5b434cbc69d2e.jpg"></g-image>
        <p v-scroll-reveal.resett="{ delay: 400 }">
        Curabitur hendrerit enim felis, non ornare tortor accumsan vel. Suspendisse nulla tortor, ultricies pellentesque elit vel, fermentum hendrerit quam. Maecenas id arcu at dui pharetra eleifend. Nam suscipit accumsan elit, a lacinia dolor luctus nec. Suspendisse porttitor lacinia sapien, eu blandit nisi convallis scelerisque. Proin ut dui quis erat vulputate tempus sit amet sed dui. Nunc suscipit pharetra ligula, hendrerit euismod nisl mattis ut. Pellentesque interdum augue diam, quis viverra mi elementum vitae. Cras efficitur quam eu dolor vulputate, sed placerat quam efficitur. Vivamus vel sem eget nibh lobortis imperdiet id hendrerit dolor. Phasellus ac libero quis nulla eleifend molestie. Ut pulvinar ante sed ante lacinia aliquam.
        </p>

      <btnTop />
        
        </div>
  </Layout>
</template>

<script>
import VueReadProgress from "vue-read-progress"
import btnTop from '~/components/plugins/ButtonTop'
export default {
  metaInfo: {
    title: 'About us'
  },
  components: { VueReadProgress, btnTop }
}
</script>

<style lang="scss">

</style>
