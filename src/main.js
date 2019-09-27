// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
//Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/es'
//Vue Media Queries
import vMediaQuery from 'v-media-query'
//Social Share
import SocialSharing from 'vue-social-sharing'

//Scroll Reveal
import VueScrollReveal from 'vue-scroll-reveal';
//Block Reveal
import VueBlockReveal from 'vue-block-reveal';
import VueExpandableImage from 'vue-expandable-image'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  Vue.use(ElementUI, { locale })
  Vue.use(vMediaQuery)
  Vue.use(SocialSharing)
  Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 1000,
    scale: 1,
    distance: '10px',
    // mobile: false
  })
  Vue.use(VueBlockReveal)
  Vue.use(VueExpandableImage)
}
