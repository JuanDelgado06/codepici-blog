<template>
    <Layout :isActive="true">
      <div class="MyContainer header-content"  >
        <h1 class="tag-title">
          Categoría <span class="tag">#{{ $page.tag.title }}</span>
        </h1>
        <div class="posts">
          <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
        </div>
      </div>
    </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo () {
    return {
      title: `#${this.$page.tag.title}`,  
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.tag-title {
  margin-top: 1rem;
  text-align: center;
  // font-family: $font-nice;
  font-size: 2rem;
  font-weight: 700;
  @include respond-to(small) {
    font-size: 3rem;
  }
  @include respond-to(big) {
    font-size: 3.5rem;
  }
}
.tag {
  @extend .tag-title;
  // font-size: 3rem;
  color: $c-accent;
  font-family: $font-default;
  // font-weight: 700;
  text-transform: uppercase;
}
.posts {
  margin-top: 2rem;
}
</style>
