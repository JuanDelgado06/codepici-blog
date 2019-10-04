<template>
    <div>
        <el-footer class="MyFooter footer-bar ">
            <h3 class="title-footer">Mi Repositorio</h3>
            <social-sharing :url="url" inline-template 
                title="Cursos Baratos" class="nav__link"
                description="CodePici es el Mejor perros"
                quote="Cursos Baratos"
                hashtags="vuejs,codepici,juandelgado"
                twitter-user="vuejs"
            >
                <div>
                    <network network="facebook" style="cursor: pointer;">
                    <a class="nav-link-mobile">Facebook
                    </a>
                    </network>
                </div>
            </social-sharing>       
        </el-footer>        
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
             url: 'https://github.com/JuanDelgado06',
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
    .MyFooter {
        width: 100%;
        height: 5.2rem;
        margin-bottom: auto;
        background: $c-dark-alt;
        padding: .8rem;
        .title-footer {
        color: $c-primary;
        margin: .6rem 0;
        }
    }
</style>