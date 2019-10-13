<template>
    <Layout :isActive="true"  :showFooter="true">
        <div class="MyContainer header-content">
          <div class="post-title">
            <h1 class="post-title-text">
              {{ $page.post.title }}
            </h1>
            <PostMeta :post="$page.post" />
          </div>
          <div class="post content-box">
            <div class="post-header">
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
                    </div>
                </social-sharing> 
              </div>
            </div>
          </div>
          <div class="post-comments">
            <Vssue title="CodePici" />
            <!-- Add comment widgets here -->
          </div>
        </div>
    </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  data() {
    return {
      url: 'https://github.com/JuanDelgado06',
      postUrl: [],
      urlPath: '',
      titleShare: '',
      descriptionShare: '',
      logoComment: 'https://codepici-blog.site/assets/static/favicon.82a2fbd.d88937b.png'
    }
  },
  components: {
    PostMeta,
    PostTags,
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
    background: -webkit-linear-gradient(left,$c-secondary, $c-primary );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
      width: 2.3rem;
      height: 2.3rem;
      border-radius:10px;
      display: flex;
      justify-content: center;
      align-items: center;
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
    .icon-share {
      font-size: 1.5rem;
    }
  }
  .post-tags {
    text-align: center;
  }
}
.post-title-share {
  margin: 0 1rem 0 0;
  align-self: center;
}
.post-social {
  display: flex;
  justify-content: center;
}
</style>