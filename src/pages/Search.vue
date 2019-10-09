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
        </div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
        sinResultados: false,
        noEncontrado: '',
        buscar: '',
        results: [],
        post: []
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
    axios("/search.json").then(response => {
      // console.log(response.data.items)
      this.post = response.data.items
      // console.log(this.post);
    })
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
