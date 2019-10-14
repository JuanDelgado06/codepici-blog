<template>
    <Layout :isActive="true"  :showFooter="true">
      <ClientOnly >
        <div class="MyContainer header-content">
          <div class="post-title">
            <h1 class="post-title-text" v-block-reveal="{delay: 500, bgcolor: '#834efd', direction: 'lr'}">
              {{ $page.post.title }}
            </h1>
            <PostMeta :post="$page.post" />
          </div>
          <div class="post content-box">
            <div class="post-header" >
              <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            </div>

            <div class="post-content" v-html="$page.post.content" />
            <div class="post-pay">
              <a href="https://paypal.me/JuanDelgado06?locale.x=es_XC" target="_blank">Apóyanos</a>
            </div>
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
}
.post-content {
  h2, h3 {
    color: $c-primary;
  }
  li {
    list-style: circle;
    margin-left: 2rem;
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
</style>