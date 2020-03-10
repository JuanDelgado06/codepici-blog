<template>
    <Layout :isActive="true"  :showFooter="true" :showButtonSearch="false">
      <ClientOnly >
        <div class="MyContainer header-content">
          <div class="post-title">
            <a @click="$router.go(-1)" class="go-back"><i class="fas fa-long-arrow-alt-left"></i> Atras</a>
            <h1 class="post-title-text" v-block-reveal="{delay: 500, bgcolor: '#834efd', direction: 'lr'}">
              {{ $page.post.title }}
            </h1>
            <PostMeta :post="$page.post" class="post-meta"/>
          </div>
          <div class="post content-box">
            <div class="post-header" >
              <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            </div>

            <!-- Publicidad -->
            <div id="adsgoeshere" class="money" style="text-align: center;" v-html="adsenseContent"></div>

            <div class="post-content" v-html="$page.post.content" />
            
            <!-- Publicidad -->
            <div id="adsgoeshere" class="money" style="text-align: center;" v-html="adsenseContent"></div>

            <div class="post-footer" >
              <div class="post-cms">
                <h3 class="post-cms-time" v-if="$page.post.duration"><i class="fas fa-clock"></i> Duracion : {{$page.post.duration}}</h3>
                <div class="post-link" >
                  <h3 class="post-link-title" v-if="$page.post.link"><i class="fas fa-cloud-download-alt"></i> Link de Descarga <i class="fas fa-cloud-download-alt"></i> </h3>
                    <div class="button-link" v-if="$page.post.link">
                      <a class="post-link-mega" :href="$page.post.link" target="_blank"> <i class="fas fa-cloud-download-alt"></i> Descarga <i class="fas fa-cloud-download-alt"></i> </a>
                    </div>
                    <div class="button-link">
                        <a class="post-link-donation" href="https://paypal.me/JuanDelgado06?locale.x=es_XC" target="_blank"><i class="fab fa-paypal"></i> Donar <i class="fab fa-paypal"></i></a>
                    </div>
                    <div class="button-link" v-if="$page.post.oficial">
                      <a class="post-link-oficial" :href="$page.post.oficial" target="_blank"> <i class="fas fa-qrcode"></i> Web Oficial <i class="fas fa-qrcode"></i> </a>
                    </div>
                </div>
              </div>
            </div>

            <!-- <Adsense data-ad-client="ca-pub-3575861396081873" class="adsense"></Adsense> -->
            <div id="adsgoeshere" class="money" style="text-align: center;" v-html="adsenseContent"></div>

            <div class="post-footer" >
              <PostTags :post="$page.post" class="post-tags"/>
              <div class="post-social">
                  <h3 class="post-title-share">Compartir📢</h3>
                  <social-sharing :url="urlPath" inline-template 
                      :title="titleShare"
                      :description="descriptionShare"
                      hashtags="codepici, juandelgado06"
                      twitter-user="codepici"
                  >
                    <div class="link">
                        <network network="facebook" style="cursor: pointer;">
                          <div class="link-fb link-item">
                            <a class="icon-share"><i class="fab fa-facebook-f"></i></a>  
                          </div>
                        </network>
                        <network network="whatsapp" style="cursor: pointer; ">
                          <div class="link-ws link-item">
                          <a class="icon-share"><i class="fab fa-whatsapp"></i></a> 
                          </div>
                        </network>                      
                        <network network="twitter" style="cursor: pointer; ">
                          <div class="link-tb link-item">
                          <a class="icon-share"><i class="fab fa-twitter"></i></a> 
                          </div>
                        </network>       
                        <network network="email" style="cursor: pointer; ">
                          <div class="link-em link-item">
                          <a class="icon-share"><i class="fa fa-envelope"></i></a> 
                          </div>
                        </network>       
                    </div>
                </social-sharing> 
              </div>
            </div>
                      
          <div class="post-comments">
            <Vssue title="CodePici" />
          </div>

          <!-- <DonationAlert v-if="$page.post.link"/> -->
          <btnTop :offset="300"/>
        </div>
      </ClientOnly>
    </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import DonationAlert from '~/components/DonationAlert'
import btnTop from '~/components/plugins/ButtonTop'

export default {
  data() {
    return {
      url: 'https://github.com/JuanDelgado06',
      postUrl: [],
      urlPath: '',
      titleShare: '',
      imageUrl: '',
      descriptionShare: '',
      adsenseContent: '',
    }
  },
  components: {
    PostMeta,
    PostTags,
    DonationAlert,
    btnTop
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        { property: "og:type", content: 'article' },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.description },
        { property: "og:url", content: this.urlPath },
        { property: "article:published_time", content: this.$page.post.date },
        { property: "og:image", content: this.imageUrl },
        
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:description", content: this.$page.post.description },
        { name: "twitter:site", content: "@codepici" },
        { name: "twitter:creator", content: "@codepici" },
        { name: "twitter:image", content: this.imageUrl },
      ],
       script: [
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async:true, defer:true },
        { src: '//d18mealirgdbbz.cloudfront.net/?laemd=844969', defer:true },
        { src: '//d18mealirgdbbz.cloudfront.net/?laemd=844972', defer:true },
      ]
    }
  },
  created () {
    this.urlPath =  `https://codepici-blog.site${this.$page.post.path}`
    this.imageUrl = `https://codepici-blog.site${this.$page.post.cover_image}`
    this.titleShare =  this.$page.post.title
    this.descriptionShare = this.$page.post.description
  },
  mounted() {
    this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
  },
  methods: {
    reloadPage () {
        return window.location.reload(true)
    }
  },
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image 
    link
    duration
    oficial
  }
}
</page-query>

<style lang="scss">
@import '@/assets/style/index';
.post-title {
  margin-top: .6rem;
  h1 {
  // -webkit-text-stroke: 1px $c-default;
    // color: transparent;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: 0;
  @include respond-to(little) {
      font-size: 3rem;
    }
    @include respond-to(small) {
      font-size: 4rem;
    }
  }
  .post-meta {
    text-align: center;
  }
}
.post-content {
  h1, h2, h3 {
    color: $c-primary;
  }
  a {
    font-size: 1rem;
    color: $c-accent;
    text-decoration: underline;
  }
  ul {
    li {
      list-style: circle;
      margin-left: 2rem;
    }
  }
  code {
    background: $c-dark-alt;
    margin: 0 auto;
    border-left: 2px solid rgba(17, 160, 217, 0.8);
    border-right: 2px solid rgba(17, 160, 217, 0.8);
    border-radius: 10px;
    color: $c-primary;
    display: block;
    font-family: $font-nice;
    font-size: 0.8rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    width: 90%;
    white-space: pre;
    overflow-y: hidden;
    overflow-x: auto;
    @include respond-to(small) {
      width: 80%;
    }
  }
  blockquote {
    background: $c-dark-alt;
    border-radius: 1rem;
    border-left: 2px solid $c-primary;
    border-right: 2px solid $c-primary;
    font-size: 0.9rem;
    color: #cecece;
    padding:  .1rem 1rem;
    width: 90%;
    margin: 0 auto;
    @include respond-to(small) {
      width: 80%;
    }
  }
}
.post-footer {
  margin: 3rem 0 2rem;
  outline: none;
  text-align: center;
  .link {
    display: flex;
    align-items: center;
    &-item {
      margin-right: .8rem;
      padding: 0.6rem;
      width: 2rem;
      height: 2rem;
      border-radius:10px;
      display: flex;
      justify-content: center;
      align-items: center;
      @include respond-to(small) {
        width: 2.3rem;
        height: 2.3rem;
      }
      a {
        color: #f2f2f2;
      }
    }
    &-fb {
      background: #3b5998;
    }
    &-ws {
      background: #08be30;
    }
    &-tb {
      background: #14bed4;
    }
    &-em {
      background: $c-secondary;
    }
    .icon-share {
      font-size: 1.2rem;
      @include respond-to(small) {
        font-size: 1.5rem;
      }
    }
  }
  .post-tags {
    text-align: center;
  }
}
.button-link {
  display: flex;
  justify-content: center;
}
.post-link {
  text-align: center;
   &-title {
    font-size: 1.8rem;
    text-align: center;
    color: $c-primary;
    @include respond-to(small) {
      font-size: 2.2rem;
    }
  }
  &-donation {
    @extend .link-bar;
    @extend .buttons-link;
    color:$c-primary;
    margin-bottom: 1rem;
    &:hover {
      background: $c-primary;
      border:2px solid $c-primary;
      color: $c-dark;
    }
  }
  &-mega {
    @extend .buttons-link;
    color: $c-negative;
    border: 2px solid $c-negative;
    margin: 1rem 0;
    &:hover {
      background: $c-negative;
      border:2px solid $c-negative;
      color: $c-dark;
    }
  }
  &-oficial {
    @extend .buttons-link;
    color: $c-info;
    border: 2px solid $c-info;
    margin-bottom: 2rem;
    &:hover {
      background: $c-info;
      border:2px solid $c-info;
      color: $c-dark;
    }
  }
}
.post-title-share {
  margin:  1rem 0 .5rem 0;
  align-self: center;
  @include respond-to(little) {
    margin: 0 .8rem 0 0;
  }
}
.post-social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include respond-to(little) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
.post-cms {
  &-time {
    text-align: center;
    font-family: $font-nice;
  }
}
.temario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.5rem;
    padding: 0;
  }
  ol {
    margin: 0;
    padding: 0;
    li {
      font-weight: 300;
      strong {
        font-weight: 700;
      }
    }
  }
}
</style>