<template>
  <Layout :isActive="true">
    <div class="MyContainer header-content">
        <a href="https://github.com/shayneo/vue-fuse">
        </a>
        <a href="http://fusejs.io/" class="fuse text-red">
        Fuse.js Library 
        </a>

        <div class="md:w-1/2 center bg-teal-light min-h-screen overflow-scroll">
        <h1 class="text-grey-darkest my-4">Buscador</h1>
        <div class="buscadorContainer">
            <input v-model="buscar" placeholder="Que quieres buscar ?"  event-name="results" @keyup="runSearch" class="buscador"> 
            <el-button @click="runSearch" :disabled="buscar == ''" icon="el-icon-search" size="small"></el-button>
        </div>
        <div v-if="sinResultados">
            <h2>No hay resultados para {{noEncontrado}}</h2>
        </div>
        <div v-for="book in results" :key="book.name" class="">
            <h2 class="w-1/4">{{ book.title }}</h2>
            <div class="ml-4 w-3/4">{{ book.summary }}</div>
            <a :href="book.url">LInk</a>
        </div>
        <!-- <div v-for="edge in $page.posts.edges"  :key="edge.node.id">
            <h2>{{ edge.node.title }}</h2>
            <p>{{edge.node.description}}</p>
        </div> -->
        </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, sortBy: "date", order: DESC, perPage: 2, page: $page ) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import VueFuse from '@/components/VueFuse.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    VueFuse
  },
  data () {
    return {
        sinResultados: false,
        noEncontrado: '',
        buscar: '',
        results: [],
        post: [
            {
            "id": "https://codepici-blog.site/mi-primer-post/",
            "url": "https://codepici-blog.site/mi-primer-post/",
            "title": "Mi primer Post",
            "summary": "Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.",
            "date_modified": "2019-10-03T00:00:00.000Z"
        },
        {
            "id": "https://codepici-blog.site/say-hello-to-gridsome/",
            "url": "https://codepici-blog.site/say-hello-to-gridsome/",
            "title": "Say hello to Gridsome 🎉",
            "summary": "A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!",
            "date_modified": "2019-02-07T00:00:00.000Z"
        },
        {
            "id": "https://codepici-blog.site/markdown-test-file/",
            "url": "https://codepici-blog.site/markdown-test-file/",
            "title": "Markdown test file",
            "summary": "Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.",
            "date_modified": "2019-02-06T00:00:00.000Z"
        },
        {
            "id": "https://codepici-blog.site/post-con-imagen/",
            "url": "https://codepici-blog.site/post-con-imagen/",
            "title": "Post con Imagen",
            "summary": "Markdown is intended to be as easy-to-read and easy-to-write as is feasible. Readability, however, is emphasized above all else. A Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.",
            "date_modified": "2019-01-07T00:00:00.000Z"
        }
        ]
    }
  },
  methods: {
    runSearch () {
      this.$search(this.buscar, this.post, { keys: ['title', 'summary'] }).then(result => {
        this.results = result
        // console.log(this.results.length);
        if( this.buscar.length >= 1 && this.results.length < 1 ) {
            // console.log(`No hay resultados para ${this.buscar}`);
            this.noEncontrado = this.buscar
            this.sinResultados = true
        } else {
            // console.log(`Resultados de ${this.buscar} son ${this.results.length}`)
            this.sinResultados = false
        }
      }) .catch(err => {
          console.log(err);
      })
    }
  },
  created () {
    this.$on('results', results => {
      this.results = results
    })
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/index';
.center {
  margin: auto;
  text-align: center;
}
.buscadorContainer {
    display: grid;
    grid-template-columns: 89.5% 9.5%;
    grid-gap: 1%;    
    background: $c-dark-alt;
    border: 1px solid $c-primary;
    border-radius: .8rem;
    .el-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0);
        border: none;
        color: $c-primary;
    }
    .buscador {
        outline: none;
        padding: .7rem;
        font-family: $font-nice;
        background: rgba(0, 0, 0, 0);
        color: $c-primary;
        border: none;
    }
    ::placeholder { 
        color: $c-primary-alt; 
    } 
}
</style>
