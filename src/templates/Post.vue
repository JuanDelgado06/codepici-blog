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
                <social-sharing :url="urlPath" inline-template 
                    title="Cursos Baratos" 
                    description="CodePici es el Mejor perros"
                    quote="CodePici"
                    hashtags="vuejs, codepici, juandelgado06"
                    twitter-user="vuejs"
                >
                  <div>
                      <network network="facebook" style="cursor: pointer;">
                        <a class="">Compartir Post en Facebook
                        </a>
                      </network>
                  </div>
              </social-sharing> 
              <PostTags :post="$page.post" />
            </div>
          </div>

          <div class="post-comments">
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
      urlPath: ''
    }
  },
  components: {
    PostMeta,
    PostTags
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
  margin: 2rem 0;
}
</style>