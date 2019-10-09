<template>
    <div>
      <div class="container-search">
          <div class="buscadorContainer">
              <input v-model="buscar" placeholder="Que quieres buscar ?"  event-name="results" @keyup="runSearch" class="buscador"> 
              <!-- <el-button @click="runSearch" :disabled="buscar == ''" icon="el-icon-search" size="small"></el-button> -->
          </div>
          <!-- <transition name="el-fade-in-linear"> -->
          <div class="content-result" v-if="buscar !== ''">
              <div v-if="sinResultados" class="sin-resultados">
                  <h2>No hay resultados para <span>{{noEncontrado}}</span></h2>
              </div>
              <div v-for="book in results" :key="book.name" class="">
                  <h2 class="w-1/4">{{ book.title }}</h2>
                  <div class="ml-4 w-3/4">{{ book.summary }}</div>
                  <a :href="book.url">LInk</a>
              </div>
          </div>
          <!-- </transition> -->
      </div>
    </div>
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

<style lang="scss">
@import '@/assets/style/index';
.center {
  margin: auto;
  text-align: center;
}
.container-search {
  display: inline;
}
.buscadorContainer {
    display: grid;
    margin: 0;
    padding: 0;
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
.content-result {
  background: $c-dark-alt;
  border: 1px solid $c-primary;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.sin-resultados {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 2rem;
  span {
    color: $c-negative;
    font-family: $font-default;
    text-transform: uppercase;
    text-decoration: underline;
  }
}
</style>
