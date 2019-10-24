<template>
          <div class="card-home">
            <div class="card-home-image" >
              <g-link :to="post.path">
                  <g-image :src="post.cover_image"/>
              </g-link>              
            </div>
            <div class="card-home-description">
              <div class="card-home-info">
                  <g-link :to="post.path">
                    <h2 v-html="post.title" />
                  </g-link>       
                  <p>{{postDescription}}<span v-if="tooText">...</span></p>
              </div>
              <g-link class="card-home-button" :to="post.path">Leer más</g-link>
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
      postDescription: this.post.description.substring(0, 100),
      tooText: false
    }
  },
  created () {
    if ( this.postDescription.length >= 100) {
      this.tooText = true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.card-home {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 10px;
  background: #202020;
  margin-bottom: 1rem;
  transition: all .4s ease;
  @include respond-to(little) {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond-to(semiBig) {
    margin-bottom: 0;
  
  }
  &:hover img {
    filter: brightness(60%);
  }
  &-image {
    overflow: hidden;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(90%);
    transition: all .4s ease-in-out;
    &:hover {
      transform: scale(1.1)
    }
  }
  &-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    h2 {
      font-family: $font-nice;
      color: $c-default;
      margin-top: 0;
      font-size: 1.3rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  &-info {
    padding: 1rem 1rem 1rem 0;
  }
  &-button {
    font-family: $font-nice;
    color: $c-default;
    cursor: pointer;
    padding: .1rem .3rem;
    font-size: 1rem;
    border-bottom: 3px solid #b3b3b3;
    margin-bottom: 0.5rem;
    transition: all .4s ease-in;
  }
  &:hover .card-home-button {
    border-color: $c-primary;
    color: $c-primary;
  }
}

</style>
