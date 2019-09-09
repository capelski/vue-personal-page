<template>
    <div id="app">
        <navbar/>
        <loader :display="loading"/>
        <router-view />
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Loader from './components/Loader.vue'
    import router from './router'

    export default {
        components: { Navbar, Loader },
        name: 'App',
        data() {
            return {
                loading: false
            };
        },
        created() {
            router.beforeEach((to, from, next) => {
                this.loading = true
                next()
            })

            router.afterEach((to, from) => {
                setTimeout(() => this.loading = false, 800)
            })
        },
        metaInfo: {
            titleTemplate: '%s | Carles Capellas'
        }
    }
</script>

<style lang="scss">
    @import './scss/globals.scss';

    @include fontFace('Montserrat', 700, 'montserrat/Montserrat-Bold.ttf');
    @include fontFace('Montserrat', 400, 'montserrat/Montserrat-Regular.ttf');
    @include fontFace('Roboto Slab', 700, 'roboto-slab/RobotoSlab-Bold.ttf');
    @include fontFace('Roboto Slab', 400, 'roboto-slab/RobotoSlab-Regular.ttf');

    html,
    body,
    #app,
    .navbar-spacer {
        min-height: 100vh;
    }

    body {
        font-family: $font-primary;
        scrollbar-width: none; /* Firefox 64 */
        -ms-overflow-style: none; /* IE 11 */

        &::-webkit-scrollbar { /** Webkit */
            display: none;
        }
    }
    
    p {
        line-height: 1.75;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .btn {
        font-family: $font-secondary;
        font-weight: 700;
    }

    a,
    a:hover {
        color: $primary;
    }

    .navbar-spacer {
        padding-top: 80px;
        padding-bottom: 50px;

        &.full-screen {
            padding-top: 50px;
            padding-bottom: 0;
            height: calc(100vh - 50px);

            .full-screen-content {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .btn-xl {
        font-size: 18px;
        padding: 10px 30px;
        margin-top: 10px;
    }

    .btn-primary {
        color: white;
        background-color: $primary;
        border-color: $primary;
    }

    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:hover {
        color: white;
        background-color: #fec810 !important;
        border-color: #fec810 !important;
    }

    .btn-primary:active,
    .btn-primary:focus {
        box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
    }

    ::-moz-selection {
        background: $primary;
        text-shadow: none;
    }

    ::selection {
        background: $primary;
        text-shadow: none;
    }

    img::selection {
        background: transparent;
    }

    img::-moz-selection {
        background: transparent;
    }

    .dark {
        background-color: $primary-dark;
        color: $primary-grey;

        .btn-primary,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:hover {
            color: $primary-dark;
        }
    }
</style>