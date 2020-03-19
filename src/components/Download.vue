<template>
    <div>
        <!-- title="Descarga" -->
            <!-- width="90%" -->
        <el-dialog
            :visible.sync="dialogVisible"
            fullscreen
            center
            custom-class="dialog"
        >
            <h2 class="dialog-title-1 center">Link de descarga del curso :</h2>
            <h3 class="dialog-title-2 center">{{post.title}}</h3>
            <p class="dialog-link-down center"> 👻 Link abajo 👻</p>
            <div class="grid-2">
                <div id="adsenseinstance" style="display: block; text-align: center;" v-html="adsenseFeedContent"></div>
                <div id="adsgoeshere3" style="display: block; text-align: center;" v-html="adsenseContent"></div>
            </div>

            <h3 class="dialog-count center" v-if="countdown >= 1">El link directo para descargar el curso estara listo en {{ countdown }} segundos</h3>
            <div class="center">
                <a :href="post.link" v-if="showDownload" target="_blank" class="dialog-download">! Descarga directa ¡</a>
            </div>
            <div id="adsenseinstance" style="display: block; text-align: center;" v-html="adsenseFeedContent"></div>
            <div id="adsgoeshere4" style="display: block; text-align: center;" v-html="adsenseContent"></div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cerrar</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: true,
            showDownload: false,
            countdown: 15,
            adsenseContent: '',
            adsenseFeedContent: ''
        }
    },
    props: ['post'],
    metaInfo () {
        return {
            script: [
                { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async:true, defer:true },
                { src: '//d2lp70uu6oz7vk.cloudfront.net/?uupld=844969', defer:true },
            ]
        }
    },
    mounted() {
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
        this.adsenseFeedContent = document.getElementById('adsensefeed').innerHTML
        setTimeout(() => {
            this.countdown--
            setTimeout(() => {
                this.countdown--
                setTimeout(() => {
                    this.countdown--
                    setTimeout(() => {
                        this.countdown--
                        setTimeout(() => {
                            this.countdown--
                            setTimeout(() => {
                                this.countdown--
                                setTimeout(() => {
                                    this.countdown--
                                    setTimeout(() => {
                                        this.countdown--
                                        setTimeout(() => {
                                            this.countdown--
                                            setTimeout(() => {
                                                this.countdown--
                                                setTimeout(() => {
                                                    this.countdown--
                                                    setTimeout(() => {
                                                        this.countdown--
                                                        setTimeout(() => {
                                                            this.countdown--
                                                            setTimeout(() => {
                                                                this.countdown--
                                                                setTimeout(() => {
                                                                    this.countdown--
                                                                    this.showDownload = true
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
.dialog {
    background:$c-dark;
    &-download {
        position: relative;
        cursor: pointer;
        font-size: 1.6rem;
        background: $c-secondary;
        color: white;
        padding: 0.7rem 1rem;
        border-radius: 1.2rem;
        transition: all .5s ease;
        box-shadow: -4px 7px 21px 1px rgba(82,81,82,0.47);
        &:hover {
            background: $c-negative;
            font-size: 1.7rem;
        }
    }
    &-title-1 {
        font-size: 2rem;
        color: $c-primary;
    }
    &-title-2{
        font-size: 2rem;
        color: $c-secondary-alt;
    }
    &-link-down {
        font-size: 1.8rem;
        color: $c-primary;
        //text-transform: uppercase;
        font-weight: 700;
    }
    &-count {
        font-size: 1.8rem;
    }
    &-footer {
        position: relative;
    }
}
.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}
</style>