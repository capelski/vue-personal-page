<template>
    <div id="app">
        <navbar />
        <loader :display="loading" />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Loader from './components/Loader.vue';
import router from './router';

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
            this.loading = true;
            next();
        });

        router.afterEach((to, from) => {
            setTimeout(() => (this.loading = false), 800);
        });

        if (window.location.href.startsWith(process.env.PRODUCTION_URL)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            document.getElementsByTagName('body')[0].appendChild(script);
            script.onload = function() {
                (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: 'ca-pub-3020023783009364',
                    enable_page_level_ads: true
                });
            };
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        }
    },
    metaInfo: {
        titleTemplate: '%s | Carles Capellas'
    }
};
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

    &::-webkit-scrollbar {
        /** Webkit */
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
    color: $primary-color;
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
    background-color: $primary-color;
    border-color: $primary-color;
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
    background: $primary-color;
    text-shadow: none;
}

::selection {
    background: $primary-color;
    text-shadow: none;
}

img::selection {
    background: transparent;
}

img::-moz-selection {
    background: transparent;
}

.clickable {
    cursor: pointer;
}

.dark {
    background-color: $light-main-color;
    color: $dark-main-color;

    .btn-primary,
    .btn-primary:active,
    .btn-primary:focus,
    .btn-primary:hover {
        color: $light-main-color;
    }
}
</style>