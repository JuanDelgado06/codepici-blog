<template>
    <Layout :isActive="true"  :showFooter="true">
      <ClientOnly >
        <div class="MyContainer header-content">
          <div class="post-title">
            <h1 class="post-title-text" v-block-reveal="{delay: 500, bgcolor: '#834efd', direction: 'lr'}">
              {{ $page.post.title }}
            </h1>
            <PostMeta :post="$page.post" class="post-meta"/>
          </div>
          <div class="post content-box">
            <div class="post-header" >
              <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            </div>

            <div class="post-content" v-html="$page.post.content" />

            <div class="post-footer" >
              <PostTags :post="$page.post" class="post-tags"/>
              <div class="post-social">
                  <h3 class="post-title-share">Compartir📢</h3>
                  <social-sharing :url="urlPath" inline-template 
                      :title="titleShare"
                      :description="descriptionShare"
                      quote="CodePici"
                      hashtags="vuejs, codepici, juandelgado06"
                      twitter-user="vuejs"
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
            
            </div>
          
          <div class="donation" v-if="viewPost" >
            <transition name="bounce" appear>
                <div class="donation-container">
                    <vue-typed-js :strings="['Apóyanos con una donación para poder seguir publicando mas contenido ']">
                      <h3 class="donation-title"><span class="typing"></span></h3>
                    </vue-typed-js>                          
                    <!-- <h3 class="donation-title" >Apóyanos con una <span>donación</span> para poder seguir publicando mas contenido</h3> -->
                    <div class="donation-buttons" >
                      <button @click="viewPost = false" class="donation-button bad">Salir😥</button>
                      <a @click="viewPost = false" class="donation-button success" href="https://paypal.me/JuanDelgado06?locale.x=es_XC" target="_blank">💚Donar💚</a>
                    </div>
                </div>
              </transition>
            </div>

          <div class="post-comments">
            <Vssue title="CodePici" />
          </div>
          <btnTop :offset="300"/>
        </div>
      </ClientOnly>
    </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import btnTop from '~/components/plugins/ButtonTop'

export default {
  data() {
    return {
      url: 'https://github.com/JuanDelgado06',
      postUrl: [],
      urlPath: '',
      titleShare: '',
      descriptionShare: '',
      
      viewPost: false
    }
  },
  components: {
    PostMeta,
    PostTags,
    btnTop
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  },
  created () {
    this.urlPath =  `https://codepici-blog.site${this.$page.post.path}`
    this.titleShare =  this.$page.post.title
    this.descriptionShare = this.$page.post.description
  },
  mounted() {
    setTimeout(() => {
      this.viewPost = true
    }, 3000);
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
  }
}
</page-query>

<style lang="scss">
@import '@/assets/style/index';
.post-title {
  h1 {
    text-align: center;
    margin-bottom: 0;
  @include respond-to(little) {
      font-size: 2.5rem;
    }
    @include respond-to(small) {
      font-size: 3rem;
    }
  }
  .post-meta {
    text-align: center;
  }
}
.post-content {
  h2, h3,h4 {
    color: $c-primary;
    // font-family: $font-nice;
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
.donation {
  width: 100%;
  height: 100%;
  text-align: center;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  background: rgba(0, 0, 0, 0.445);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-container {
    width: 80%;
    background: $c-dark-alt;
    padding: 1rem 2rem;
    transform: translateX3d(0, -300px, 0);
    @extend .link-bar;
    @include respond-to(mid) {
      width: 50%;
    }
    @include respond-to(big) {
      width: 30%;
    }
  }
  &-title {
    font-family: $font-code;
    // padding-bottom: 1rem;
    span {
      font-family: $font-code;
      font-size: 1.5rem;
      font-weight: 700;
      color: $c-primary;
      @include respond-to(mid) {
        font-size: 2rem;
      }
    }
  }
  
  &-buttons {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 10px;
    .success {
      @extend .link-bar;
      color: $c-primary;
      font-size: 1.2rem;
      transition: all .4s ease;
      &:hover {
        background: $c-primary;
        color: $c-dark-alt;
      }
      @include respond-to(mid) {
        font-size: 1.4rem;
      }
    }
    .bad {
      background: rgba(0, 0, 0, 0);
      border: 2px solid $c-secondary;
      color: $c-secondary;
      font-size: 1.1rem;
      padding: .2rem 0.3rem;
      cursor: pointer;
      @include respond-to(mid) {
        font-size: 1.3rem;
      }
    }
  }
  &-button {
    font-family: $font-code;
    font-weight: 600;
    padding: .2rem 0.5rem;
  }
}
</style>