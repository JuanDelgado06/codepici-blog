<template>
  <Layout :isActive="true">
    <div class="MyContainer header-content">
        <a href="https://github.com/shayneo/vue-fuse">
        </a>
        <a href="http://fusejs.io/" class="fuse text-red">
        Fuse.js Library 
        </a>

        <div class="md:w-1/2 center bg-teal-light min-h-screen overflow-scroll">
        <h1 class="text-grey-darkest my-4">Vue Fuse Demo</h1>
        <div class="buscadorContainer">
            <input v-model="buscar" placeholder="Que quieres buscar ?"  event-name="results" @keyup.enter="runSearch" class="buscador"> 
            <el-button @click="runSearch" :disabled="buscar == ''" icon="el-icon-search" size="small"></el-button>
        </div>
        <div v-if="sinResultados">
            <h2>No hay resultados para {{noEncontrado}}</h2>
        </div>
        <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
            <h2 class="w-1/4">{{ book.name }}</h2>
            <div class="ml-4 w-3/4">{{ book.description }}</div>
        </div>
        </div>
    </div>
  </Layout>
</template>

<script>
import VueFuse from '@/components/VueFuse.vue'

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
        books: [
            {
            name: 'Node.js',
            description: 'Node es un "framework" de javascript con el cual javascript se a convertido en uno de los mejores lenguajes '
            }, {
            name: 'javascript',
            description: 'javascript es mi lenguaje de programacion favorito'
            }, {
            name: 'Vue.js',
            description: 'Me encanta Vue.js y quiero ser todo un experto en Vue y en el Mevn Stack.'
            }, {
            name: 'Firebase',
            description: 'Estamos aprendiendo Firebase para lograr hacer cosas increibles'
            }
        ]
    }
  },
  methods: {
    saludar () { 
        alert('Saludando')
    },
    runSearch () {
      this.$search(this.buscar, this.books, { keys: ['name', 'description'] }).then(result => {
        this.results = result
        console.log(this.results.length);
        if( this.results.length < 1 ) {
            console.log(`No hay resultados para ${this.buscar}`);
            this.noEncontrado = this.buscar
            this.sinResultados = true
            this.buscar = ''
        } else {
            console.log(`Resultados de ${this.buscar} son ${this.results.length}`)
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
