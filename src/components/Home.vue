<template>
    <div class="navbar-spacer full-screen">
        <header class="full-screen-content home-header">
            <h1 class="intro-heading text-uppercase">Carles Capellas</h1>
            <h2 class="intro-subheading">Get to know something about me</h2>
            <div class="technologies">
                <img src="/img/node.png?$modena=vue-personal-page" alt="Node.js logo"/>
                <img src="/img/docker.png?$modena=vue-personal-page" alt="Docker logo"/>
                <img src="/img/azure.png?$modena=vue-personal-page" alt="Windows Azure logo"/>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        metaInfo: {
            title: 'Home',
            meta: [{
                name: 'description',
                content: 'Personal page where you can get to know a bit more about me. Read my blog entries, find out about my personal projects or nose around the countries I have been'
            }]
        }
    }
</script>

<style lang="scss" scoped>
    @import '../scss/globals.scss';

    .home-header {
        text-align: center;
        flex-direction: column;
        color: $primary-dark;
        background-image: url('/img/header-bg.jpg?$modena=vue-personal-page');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        .intro-heading {
            font-size: 50px;
            line-height: 50px;
            margin-bottom: 15px;
        }
        
        .intro-subheading {
            font-size: 30px;
            line-height: 30px;
            font-weight: normal;
            margin-bottom: 25px;
        }

        .technologies {
            padding-top: 100px;

            img {
                height: 70px;
                padding: 0 10px;
            }
        }

        @media (min-width: $medium) {
            .intro-heading {
                font-size: 75px;
                line-height: 75px;
            }
            
            .intro-subheading {
                font-size: 40px;
                line-height: 40px;
                margin-bottom: 50px;
            }
        }
    }
</style>