<template>
    <div>
        <back-to-top bottom="50px" right="40px" text="Back to top" visibleoffset="200" class="btn-scroll-master">
            <button type="button" class="btn-scroll">
              <i class="el-icon-top"></i>
            </button>
        </back-to-top>
    </div>
</template>

<script>
export default {
    name: 'btn-top',
    // components: { BackToTop }
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.btn-scroll {
  width: 40px;
  height: 40px;
  background: $c-primary;
  border-radius: 50%;
  border: none;
  outline: none;
  background: -webkit-linear-gradient(bottom,$c-secondary, $c-primary );
  box-shadow: 5px 5px 19px -2px rgba(59, 47, 114, 0.93);
  cursor: pointer;
  i {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f2f2f2;
  }
  @media screen and (min-width: 630px){
      width: 50px;
      height: 50px;
      i {
        font-size: 2rem;
      }
  } 
}
</style>