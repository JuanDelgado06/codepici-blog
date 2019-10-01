import '~/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
//Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/es'
//Social Share
import SocialSharing from 'vue-social-sharing'
//Scroll 
import VueScrollReveal from 'gridsome-scroll-reveal';
import VueBlockReveal from 'vue-block-reveal';
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

import VueImg from 'v-img';
import BackToTop from 'vue-backtotop'
 

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  
  Vue.use(ElementUI, { locale })
  Vue.use(VueScrollReveal, {
    // class: 'v-scroll-reveal', 
    // duration: 400,
    // scale: 1,
    // distance: '5px',
    // // mobile: false
  })
  Vue.use(VueBlockReveal)
  Vue.use(SocialSharing)
  Vue.use(BackToTop)
  Vue.use(VueImg)
  Vue.use(VueScrollProgressBar)
  }
