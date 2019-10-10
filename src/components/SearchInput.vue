<template>
    <div>
      <div class="container-search" >
        <div class="container-modal" >
            <div class="header-modal flex">
              <h2>Que quieres buscar ?</h2>
            </div>
              <div class="buscadorContainer">
                  <input v-model="buscar" placeholder="Que quieres buscar ?"  event-name="results" @keyup="runSearch" class="buscador"> 
              </div>
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
          </div>

      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchInput',
  data () {
    return {
        mostrar: true,
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
.container-search {
  ::-webkit-scrollbar {
    width: .8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(22, 219, 180, 0.4); 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: $c-primary-alt; 
  }
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.616);
}
.container-modal {
    margin: 3rem auto;
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    width: 90%;
    @extend .link-bar;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.7);
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
}
.buscadorContainer {
    display: grid;
    margin: 0 1%;
    padding: 0;
    background: $c-dark-alt;
    border: 1px solid $c-primary;
    border-radius: .8rem;
    position: sticky;
    top: 0;
    .buscador {
        outline: none;
        padding: .7rem;
        font-family: $font-nice;
        background: rgba(255, 255, 255, 0);
        color: $c-primary;
        border: none;
    }
    ::placeholder { 
      color: $c-primary-alt; 
        font-family: $font-code;
    } 
}
.sin-resultados {
  display: flex;
  text-align: center;
  justify-content: center;
  span {
    color: $c-negative;
    font-family: $font-default;
    text-transform: uppercase;
    text-decoration: underline;
  }
}
.header-modal {
  justify-content: space-between;
  h2 {
    margin: .8rem auto;
    font-family: $font-code;
    color: $c-secondary;
    font-size: 1.3rem;
    @include  respond-to(little) {
      font-size: 1.8rem;
    }    
  }
  .close-modal {
    position: absolute;
    top: .4rem;
    right: 1rem;
  }
}
</style>
