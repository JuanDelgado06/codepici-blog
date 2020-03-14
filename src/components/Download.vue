<template>
    <div>
        <!-- title="Descarga" -->
            <!-- width="90%" -->
        <el-dialog
            :visible.sync="dialogVisible"
            fullscreen
            center
        >
            <h2 class="center">Link de descarga del curso {{post.title}}</h2>
            <div class="grid-2">
                <div id="adsgoeshere" style="width: 50%; height: 30%;" v-html="adsenseContent"></div>
                <div id="adsgoeshere3" style="width: 50%; height: 30%;" v-html="adsenseContent"></div>
            </div>

            <h3 class="center" v-if="countdown >= 1">El link directo para descargar el curso estara listo en {{ countdown }} segundos</h3>
            <div class="center">
                <a :href="post.link" v-if="showDownload" target="_blank" class="dialog-download">Ir a la descarga</a>
            </div>
            <div id="adsgoeshere2" style="width: 50%; height: 30%;" v-html="adsenseContent"></div>
            <div id="adsgoeshere4" style="width: 50%; height: 30%;" v-html="adsenseContent"></div>
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
            adsenseContent: ''
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
    created() {
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML
    },
    mounted() {
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
    &-download {
        position: relative;
        cursor: pointer;
    }
    &-footer {
        position: relative;
    }
}
.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}
</style>