<template>
    <div>
        <button class="btn-action" :class="{clickBtn : clickBtn}" @click="handleClick"><i class="el-icon-plus"></i></button>
        <button  class="btn-action-home"  :class="{clickBtnHome : clickBtn, closeBtn : closeBtn }"><i class="el-icon-s-home"></i></button>
        <button  class="btn-action-blog"  :class="{clickBtnBlog : clickBtn, closeBtn : closeBtn }"><i class="el-icon-notebook-1"></i></button>
    </div>
</template>

<script>
export default {
    name: 'FloatingButton',
    data() {
    return {
      clickBtn: false,
      closeBtn: true,
      ready: false
    }
    },
    methods: {
        handleClick() {
        this.clickBtn = !this.clickBtn
        this.closeBtn = !this.closeBtn
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/style/index';
.btn-action-master {
  border: none;
  background: $c-primary;
  color: $c-dark;
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  position: fixed;

}
.btn-action {
  @extend .btn-action-master;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 1;
  i {
    font-size: 1.3rem;
    font-weight: bold;
    transition: all .5s ease;
  }
}
.clickBtn {
  background: $c-secondary;
  i {
    transform: rotate(135deg);
  }
}
.btn-action-home {
  @extend .btn-action-master;
  bottom: calc( 2.5rem * 2.3 );  
  right: 2.5rem;
  transition: all .4s ease-in;
  i {
    font-size: 1.3rem;
    font-weight: bold;
    transition: all .5s ease;
  }
}
.clickBtnHome {
  bottom: calc( 2.5rem * 2.3 );  
  right: 2.5rem;
  background: $c-primary;
  animation-name: show;
  animation-duration: .5s;
}
@keyframes show {
  from {
    bottom: 2.5rem;
    right: 2.5rem;
    opacity: 0;
  }
  to {
    bottom: calc( 2.5rem * 2.3 );
    right: 2.5rem;
    opacity: 1;
    }
}
.closeBtn {
  bottom: 2.5rem;
  right: 2.5rem;
  animation-name: close;
  animation-duration: .5s;
}
@keyframes close {
  0% {
    bottom: 2.5rem;
    right: 2.5rem;
    opacity: 0;
  }
  2% {
    bottom: calc( 2.5rem * 2.3 );
    right: 2.5rem;
    opacity: 1;
    }
  100% {
    bottom: 2.5rem;
    right: 2.5rem;
    opacity: 0;
  }
}
.btn-action-blog {
  @extend .btn-action-home;
  bottom: calc( 2.5rem * 2.3 );  
  right: 2.5rem;
  transition: all .4s ease-in;
  i {
    font-size: 1.3rem;
    font-weight: bold;
    transition: all .5s ease;
  }
}
.clickBtnBlog {
  bottom:calc( 2.5rem * 3.6 );  
  right: 2.5rem;
  background: $c-primary;
  animation-name: showBlog;
  animation-duration: .5s;
}
@keyframes showBlog {
  from {
    bottom: 2.5rem;
    right: 2.5rem;
    opacity: 0;
  }
  to {
    bottom: 9.5rem;
    right: 2.5rem;
    opacity: 1;
    }
}
.closeBtn {
  bottom: 2.5rem;
  right: 2.5rem;
  animation-name: close;
  animation-duration: .5s;
}
</style>
