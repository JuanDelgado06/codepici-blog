<template>
    <div>
        <el-footer class="MyFooter footer-bar ">
            <h3 class="title-footer">Mi Repositorio</h3>
            <a href="https://zealous-aryabhata-98ce9d.netlify.com/admin" target="_blank">Admin</a>
        </el-footer>        
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
@import '@/assets/style/index';
    .MyFooter {
        position: sticky;
        width: 100%;
        background: $c-dark-alt;
        padding: .8rem;
        .title-footer {
        color: $c-primary;
        margin: 0;
    }
    }
</style>