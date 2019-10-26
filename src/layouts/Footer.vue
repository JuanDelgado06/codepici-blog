<template>
    <div>
        <footer class="footer-bar MyFooter">
            <div class="social-page">
                <div class="link">
                        <div class="link-fb link-item">
                        <a class="icon-share" href="https://www.facebook.com/codepici/" target="_blank"><i class="fab fa-facebook-f"></i></a>  
                        </div>
                        <div class="link-tb link-item">
                        <a class="icon-share" href="https://twitter.com/codepici" target="_blank"><i class="fab fa-twitter"></i></a> 
                        </div>
                        <div class="admin-logo">
                            <a href="https://codepici-blog.site/admin/" target="_blank"><g-image alt="logo" src="~/favicon.png" ></g-image></a>
                        </div>
                </div>            
                <div class="create">
                   <p>Pagina Web creada por : <a href="mailto:josedelgadozambrano30@gmail.com?Subject=Hola, soy Juan Delgado en que te puedo ayudar ?">JuanDelgado06</a></p>
                </div>
            </div>
        </footer>        
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
    background: $c-dark-alt;
    padding: 1.5rem;
}
.title-footer {
    color: $c-primary;
    margin: 0;
    margin-bottom: 0.5rem;
    font-family: $font-code;
}
.social-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        margin: 0;
        margin-top: 1rem;
    }
    a {
        color: $c-primary;
        transition: all .4s ease;
        &:hover {
            color: $c-secondary;
        }
    }
}
.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    &-item {
        margin-right: .8rem;
        padding: 0.6rem;
        width: 2rem;
        height: 2rem;
        border-radius:10px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .8s ease;
        @include respond-to(small) {
            width: 2.3rem;
            height: 2.3rem;
        }
        a {
            color: #f2f2f2;
        }
    }
    .admin-logo {
        width: 2.3rem;
        transition: all .8s ease;
        @include respond-to(small) {
            width: 2.6rem;
        }
        &:hover {
            transform: rotate(360deg);
        }
    }
    &-fb {
    background: #3b5998;
        &:hover {
            background: rgba(14, 14, 14, 0.5);
            transform: rotate(360deg);
            a {
                color: #3b5998;
            }
        }
    }
    &-tb {
    background: #14bed4;
        &:hover {
            background: rgba(14, 14, 14, 0.5);
            transform: rotate(360deg);
            a {
                color: #14bed4;
            }
        }
    }
    .icon-share {
        font-size: 1.2rem;
        cursor: pointer;
        @include respond-to(small) {
            font-size: 1.5rem;
        }
    }
}

</style>
