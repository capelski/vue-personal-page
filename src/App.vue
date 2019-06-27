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
            title: 'Home',
            titleTemplate: '%s | Carles Capellas'
        }
    }
</script>

<style>
    html,
    body,
    #app,
    .navbar-spacer {
        height: 100%;
    }

    .navbar-spacer {
        padding-top: 50px;
    }

    @media(min-width: 768px) {
        .navbar-spacer {
            padding-top: 53px;
        }
    }

    .m-top-40 {
        margin-top: 40px;
    }

    body {
        overflow-x: hidden;
        font-family: 'Roboto Slab', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    p {
        line-height: 1.75;
    }

    a {
        color: #fed136;
    }

    a:hover {
        color: #fec503;
    }

    .text-primary {
        color: #fed136 !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .btn {
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
    }

    .btn-xl {
        font-size: 18px;
        padding: 10px 30px;
        margin-top: 10px;
    }

    .btn-primary {
        background-color: #fed136;
        border-color: #fed136;
    }

    .btn-primary:active, .btn-primary:focus, .btn-primary:hover {
        background-color: #fec810 !important;
        border-color: #fec810 !important;
        color: white;
    }

    .btn-primary:active, .btn-primary:focus {
        box-shadow: 0 0 0 0.2rem rgba(254, 209, 55, 0.5) !important;
    }

    ::-moz-selection {
        background: #fed136;
        text-shadow: none;
    }

    ::selection {
        background: #fed136;
        text-shadow: none;
    }

    img::selection {
        background: transparent;
    }

    img::-moz-selection {
        background: transparent;
    }
</style>