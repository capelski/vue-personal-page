<template>
    <div class="navbar-spacer narrow">
        <header class="home">
            <div class="intro-text">
                <h1 class="intro-heading text-uppercase">Carles Capellas</h1>
                <h2 class="intro-subheading">Get to know something about me</h2>
                <div class="technologies">
                    <img src="/img/node.png?$modena=vue-personal-page" alt="Node.js logo"/>
                    <img src="/img/docker.png?$modena=vue-personal-page" alt="Docker logo"/>
                    <img src="/img/azure.png?$modena=vue-personal-page" alt="Windows Azure logo"/>
                </div>
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
                name: 'description', content: 'Personal page where you can get to know a bit more about me. Read my blog entries, find out about my personal projects or nose around the countries I have been'
            }]
        }
    }
</script>

<style scoped>
    header.home {
        height: calc(100vh - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #333;
        background-image: url('/img/header-bg.jpg?$modena=vue-personal-page');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (min-width: 768px) {
        header.home {
            height: calc(100vh - 55px);
        }
    }

    header.home .intro-heading {
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 15px;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    header.home .intro-subheading {
        font-size: 30px;
        line-height: 30px;
        margin-bottom: 25px;
        font-weight: normal;
    }

    @media (min-width: 768px) {
        header.home .intro-heading {
            font-size: 75px;
            line-height: 75px;
        }

        header.home .intro-subheading {
            font-size: 40px;
            line-height: 40px;
            margin-bottom: 50px;
        }
    }

    .hidden-xs {
        display: none;
    }

    @media (min-width: 768px) {
        .hidden-xs {
            display: block;
        }
    }

    .technologies {
        padding-top: 100px;
    }

    .technologies img {
        height: 70px;
        padding: 0 10px;
    }
</style>