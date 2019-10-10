<template>
    <div>
      <!-- <div class="container-search">
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
      </div> -->
      <div class="container-dialog">
          <el-button type="text" @click="dialogVisible = true"  icon="el-icon-s-tools"></el-button>
          <el-dialog
            title="Que quieres buscar ?"
            :visible.sync="dialogVisible"
            width="80%" top="12vh" center
            >
            <div class="buscadorContainer">
              <input v-model="buscar" placeholder="Que quieres buscar ?"  event-name="results" @keyup="runSearch" class="buscador"> 
            </div>
              <div v-if="sinResultados" class="sin-resultados">
                  <h2>No hay resultados para <span>{{noEncontrado}}</span></h2>
              </div>
              <div v-for="book in results" :key="book.name" class="">
                  <h2 class="w-1/4">{{ book.title }}</h2>
                  <div class="ml-4 w-3/4">{{ book.summary }}</div>
                  <a :href="book.url">LInk</a>
              </div>
        </el-dialog>      
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchDialog',
  props: {
    // dialogVisible
  },
  data () {
    return {
        dialogVisible: false,
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
    },
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
.container-dialog {
  ::-webkit-scrollbar {
    width: .8rem;
  }
  ::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 5px $c-primary; 
    // border-radius: 2rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(44, 209, 176, 0.507); 
    // border-radius: 1rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: $c-primary-alt; 
  }
  .el-dialog {
    background: $c-dark-alt;
    border: 2px solid;
    border-image-source: linear-gradient(125deg, $c-primary, $c-secondary);
    border-image-slice: 1;  
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    .buscadorContainer {
      position: sticky;
      top: 2rem;
    }
  }
  .el-dialog__title {
    color: $c-primary;
    font-family: $font-code;
    font-size: 1.5rem;
  }
  .dialog-footer {
    display: flex;
  }
}
</style>
