<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <div class="post-card-header">
      <g-image alt="Cover image" v-if="post.cover_image" class="post-card-image" :src="post.cover_image" />
    </div>
    <div class="post-card-content">
      <PostMeta class="post-card-meta" :post="post" />
      <h3 class="post-card-title" v-html="post.title" />
      <!-- <p class="post-card-description" v-html="postDescription" /> -->
      <p class="post-card-description">{{postDescription}} <span v-if="tooText">...</span></p>

      <PostTags class="post-card-tags" :post="post" />

      <g-link class="post-card-link" :to="post.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
  data() {
    return {
      postDescription: this.post.description.substring(0, 180),
      tooText: false
    }
  },
  created () {
    if ( this.postDescription.length >= 180) {
      this.tooText = true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.post-card {
  position: relative;
  background: $c-dark-alt;
  border-radius: 1.1rem;
  margin: 0 .6rem 1rem .6rem;
  @include respond-to(small) {
    margin: 0 0 1rem 0;
  }
  &-header {
    overflow: hidden; 
    border-radius: 1rem  1rem 0 0;
  }
  &-image {
    min-width: 100%;
  }
  &-title {
    margin-top: 0;
  }
  &-tags {
    z-index: 1;
    position: relative;
  }
  &-content {
    padding: 1rem;
  }
  &-description {
    font-size: .8rem;
    @include respond-to(small) {
      font-size: .9rem;
    }
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
