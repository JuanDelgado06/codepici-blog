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
//Vue Scrroll Progress
import VueScrollProgress from 'vue-scroll-progress'





export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  Vue.use(ElementUI, { locale })
  Vue.use(vMediaQuery)
  Vue.use(SocialSharing)
  Vue.use(VueScrollProgress)
}
