<template>
    <div>
        <div class="donation-text" v-if="viewOne">
            <a class="donation-text-link" href="https://paypal.me/JuanDelgado06?locale.x=es_XC" target="_blank">
                <h3 class="donation-text-title">
                <span>D</span>
                <span>o</span>
                <span>n</span>
                <span>a</span>
                <span>r</span>
                <span> y </span>
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span> g</span>
                <span>e</span>
                <span>n</span>
                <span>i</span>
                <span>a</span>
                <span>l</span>
                </h3>
            <span class="donation-text-subtitle">Dale Click</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextDonation',
    props: {
        viewOne: false,
        viewTwo: false
    }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.donation-text {
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  &-link {
    color: rgba(0, 0, 0, 0);
  }
  &-title {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2px;
    @include respond-to(small) {
      font-size: 3rem;
    }
    span {
        font-family: $font-default;
        animation: animate 1.7s linear infinite;
        transition: all .3s ease-in;
        &:nth-child(1) {
            animation-delay: 0.4s
        }
        &:nth-child(2) {
            animation-delay: 0.4s
        }
        &:nth-child(3) {
            animation-delay: 0.4s
        }
        &:nth-child(4) {
            animation-delay: 0.4s
        }
        &:nth-child(5) {
            animation-delay: 0.4s
        }
        &:nth-child(6) {
            animation-delay: .8s
        }
        &:nth-child(7) {
            animation-delay: 1.2s
        }
        &:nth-child(8) {
            animation-delay: 1.2s
        }
        &:nth-child(9) {
            animation-delay: 1.2s
        }
        &:nth-child(10) {
            animation-delay: 1.6s
        }
        &:nth-child(11) {
            animation-delay: 1.6s
        }
        &:nth-child(12) {
            animation-delay: 1.6s
        }
        &:nth-child(13) {
            animation-delay: 1.6s
        }
        &:nth-child(14) {
            animation-delay: 1.6s
        }
        &:nth-child(15) {
            animation-delay: 1.6s
        }
    }
    @keyframes animate {
      0%, 100% {
        color: #f2f2f2;
        filter: blur(.5px);
        text-shadow: 0 0 10px $c-primary,
                                     0 0 20px $c-primary,
                                     0 0 40px $c-primary,
                                     0 0 80px $c-primary,
                                     0 0 120px $c-primary,
                                     0 0 200px $c-primary,
                                     0 0 300px $c-primary,
                                     0 0 400px $c-primary,
      }
      5%, 95% {
        color: #3f3f3f;
        filter: blur(0px);
        text-shadow: none;
      }
    }
  }
  &-subtitle {
    color: #686868;
    font-size: 1rem;
  }
}
</style>