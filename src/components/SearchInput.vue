<template>
  <div class="relative">

    <div class="relative w-80">
      <el-input
        type="text"
        placeholder="Busca algo increible" prefix-icon="el-icon-search" clearable
        v-model="query"
        @input="softReset"
        @keyup="performSearch"
        @keyup.esc="searchResultsVisible = false"
        @keydown.up.prevent="highlightPrev"
        @keydown.down.prevent="highlightNext"
        @keyup.enter="gotoLink"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        ref="search"
      >
      </el-input>

    </div>
    <transition name="fade">
      <div v-if="query.length > 0 && searchResultsVisible" class="search-result" style="max-height: 32rem">
        <div class="flex flex-col" ref="results">
          <a
            v-for="(post, index) in results"
            :key="index"
            :href="post.item.path"
            @click="reset"
          >
            <!-- class="bg-background-form border-b border-gray-400 text-xl cursor-pointer p-4 search-hover"
            :class="{ 'search-highlighted' : index === highlightedIndex }" -->
            {{ post.item.title }}

            <span>{{ post.item.description }}</span>
          </a>
          <a href="#">Hola mundo
            <span>Soy un spam perro</span>
          </a>

          <div v-if="results.length === 0" class="search-result">
            <p class="my-0">No encontramos '<strong>{{ query }}</strong>'</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<static-query>
  {
    metadata{
      pathPrefix
    }
  }
</static-query>

<script>
import axios from 'axios'

export default {
  components: {
  },
  created() {
    axios(this.$static.metadata.pathPrefix + "/search.json").then(response => {
      this.posts = response.data
    })
    .catch(error => {
      console.log(error);
    })
  },
  data() {
    return {
      query: '',
      results: [],
      posts: [],
      highlightedIndex: 0,
      searchResultsVisible: false,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'description']
      }
    }
  },
  methods: {
    softReset() {
      this.highlightedIndex = 0
      this.searchResultsVisible = true
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.results = results
      })
    },
    highlightPrev() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1
        this.scrollIntoView()
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.results.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1
        this.scrollIntoView()
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
    },
    gotoLink() {
      if (this.results[this.highlightedIndex]) {
        window.location = this.results[this.highlightedIndex].item.path
      }
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .search-result {
    background: #f2f2f2;
  }
</style>

