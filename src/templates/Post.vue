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

            <div class="post-footer" v-for="url in postUrl" :key="url.name">
                <social-sharing :url="url.url" inline-template 
                    title="Cursos Baratos" class="nav__link"
                    description="CodePici es el Mejor perros"
                    quote="Cursos Baratos"
                    hashtags="vuejs,codepici,juandelgado"
                    twitter-user="vuejs"
                >
                <div>
                    <network network="facebook" style="cursor: pointer;">
                    <a class="">Share Facebook
                    </a>
                    </network>
                </div>
              </social-sharing> 
            </div>
            <div class="post-footer" >
                <social-sharing :url="urlPath" inline-template 
                    title="Cursos Baratos" class="nav__link"
                    description="CodePici es el Mejor perros"
                    quote="Cursos Baratos"
                    hashtags="vuejs,codepici,juandelgado"
                    twitter-user="vuejs"
                >
                <div>
                    <network network="facebook" style="cursor: pointer;">
                    <a class="">Share Facebook wiht path
                    </a>
                    </network>
                </div>
              </social-sharing> 
            </div>
              <PostTags :post="$page.post" />
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
import axios from 'axios'

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
    axios("/search.json").then(response => {
      // console.log(response.data.items)
      this.postUrl = response.data.items
      console.log(this.postUrl);
      console.log('Informacion de page');
      console.log(this.$page.post.path);
    })
    this.urlPath =  this.$page.post.path
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
</style>