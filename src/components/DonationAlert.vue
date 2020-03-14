<template>
    <div>
        <div class="donation" v-if="viewPost" >
            <transition name="bounce" appear>
                <div class="donation-container">
                    <vue-typed-js :strings="['Apóyanos con una donación para poder seguir publicando mas contenido ']">
                        <h3 class="donation-title"><span class="typing"></span></h3>
                    </vue-typed-js>                          
                    <div class="donation-buttons" >
                        <button @click="viewPost = false" class="donation-button bad" :disabled="activate">Salir😥</button>
                        <a @click="viewPost = false" class="donation-button success" href="https://paypal.me/JuanDelgado06?locale.x=es_XC" target="_blank">💚Donar💚</a>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DonationAlert',
    data() {
        return {
            viewPost: false,
            activate: true
        }
    },
    created() {
        setTimeout(() => {
            this.viewPost = true
            setTimeout(() => {
                this.activate = false
            }, 2500);
        }, 1500);
    },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.donation {
  width: 100%;
  height: 100%;
  text-align: center;
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  background: rgba(0, 0, 0, 0.445);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-container {
    width: 80%;
    background: $c-dark-alt;
    padding: 1rem 2rem;
    transform: translateX3d(0, -300px, 0);
    @extend .link-bar;
    @include respond-to(mid) {
      width: 50%;
    }
    @include respond-to(big) {
      width: 30%;
    }
  }
  &-title {
    font-family: $font-code;
    // padding-bottom: 1rem;
    span {
      font-family: $font-code;
      font-size: 1.5rem;
      font-weight: 700;
      color: $c-primary;
      @include respond-to(mid) {
        font-size: 2rem;
      }
    }
  }
  &-buttons {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 10px;
    .success {
      @extend .link-bar;
      color: $c-primary;
      font-size: 1.2rem;
      transition: all .4s ease;
      &:hover {
        background: $c-primary;
        color: $c-dark-alt;
      }
      @include respond-to(mid) {
        font-size: 1.4rem;
      }
    }
    .bad {
      background: rgba(0, 0, 0, 0);
      border: 2px solid $c-secondary;
      color: $c-secondary;
      font-size: 1.1rem;
      padding: .2rem 0.3rem;
      transition: all .3s ease;
      cursor: pointer;
      @include respond-to(mid) {
        font-size: 1.3rem;
      }
      &:disabled {
          cursor: not-allowed;
          opacity: .5;
      }
    }
  }
  &-button {
    font-family: $font-code;
    font-weight: 600;
    padding: .2rem 0.5rem;
  }
}
</style>