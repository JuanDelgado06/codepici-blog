<template>
    <div>
        <form 
        name="contact"
        method="post"
        action="/blog/"
        netlify
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        v-on:submit.prevent="handleSubmit"
        class="form-contact"
        >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
            <label>
            Don’t fill this out: <input name="bot-field" />
            </label>
        </p>
        <h2 class="title-form">Contáctanos</h2>
        <div class="sender-info">
            <div class="input-form">
            <label for="name" class="label" >Tu Nombre</label>
            <input type="text" name="name" v-model="formData.name" class="input" placeholder="juan delgado" required/>
            </div>
            <div class="input-form">
            <label for="email">Tu Email</label>
            <input type="email" name="email" v-model="formData.email" class="input" placeholder="correo@correo.com" required/>
            </div>
        </div>

        <div class="message-wrapper">
            <label for="message">Mensaje</label>
            <textarea name="message" v-model="formData.message" class="textarea" placeholder="Por que eres tan genial ?" required></textarea>
        </div>
        <div class="button-send">
            <button type="submit" class="send">Enviar</button>
        </div>
        </form>          
    </div>
</template>

<script>
export default {
    name: 'FormNetlify',
    data() {
    return {
        formData: {},
    }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
            // .then(() => this.$router.push('/blog'))
            .then( () => {
                this.$notify({
                    title: 'Enviado Correctamente',
                    message: 'Gracias por contactarnos, te responderemos en el menor tiempo posible',
                    type: 'success'
                });
                this.formData.name = ''
                this.formData.email = ''
                this.formData.message = ''
            } )
            .catch(error => alert(error))
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/style/index';
    .form-contact {
        width: 100%;
        margin: 1rem auto;
        background: url('../assets/img/bg-form.jpg');
        background-size: cover;
        background-position: center;
        padding: 2rem;
        border-radius: 5%;
         @include respond-to(small) {
            width: 90%;
        }
    }
    .title-form {
        margin: .8rem 0;
        text-align: center;
        text-transform: uppercase;
        color: $c-primary;
        font-size: 2rem;
        @include respond-to(small) {
            font-size: 3rem;
        }
    }
    .sender-info {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 16px;
        margin-bottom: 1rem;
        @include respond-to(small) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    label {
        text-shadow: -3px 2px 4px #080808;
        color: $c-secondary;
    }
    .input-form {
        .input {
            display: block;
            width: 100%;
            outline: none;
            padding: .8rem;
            font-family: $font-nice;
            font-size: 1rem;
            border: 1px solid $c-primary;
            background: rgba(8, 8, 8, 0.502);
            color: $c-primary;
            margin-top: .5rem;
        }
    }
    .message-wrapper {
        margin-bottom: 1rem;
        .textarea {
            display: block;
            min-width: 100%;
            height: 200px;
            outline: none;
            resize: none;
            font-family: $font-nice;
            font-size: 1rem;
            padding: 0.8rem;
            border: 1px solid $c-primary;
            background: rgba(8, 8, 8, 0.5);
            color: $c-primary;
            margin-top: .5rem;
        }
    }
    .button-send {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .send {
            cursor: pointer;
            outline: none;
            font-size: 1rem;
            font-weight: 700;
            font-family: $font-nice;
            padding: 0.4rem 1rem;
            border: 1px solid $c-primary;
            background: rgba(8, 8, 8, 0.5);
            color: $c-primary;
            transition: all .4s ease-in;
            &:hover {
                border-color: $c-secondary;
                background: $c-secondary;
                color: $c-dark;
            }
        }
    }
</style>