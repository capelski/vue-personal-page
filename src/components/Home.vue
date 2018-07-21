<template>
    <div class="navbar-spacer">
        <header class="masthead">
            <div class="intro-text">
                <div class="intro-heading text-uppercase">Carles Capellas</div>
                <div class="intro-subheading">Get to know something about me</div>

                <div class="hidden-xs">
                    <router-link to="projects" class="btn btn-primary btn-xl text-uppercase">
                        What have I built?
                    </router-link>
                    <router-link to="places" class="btn btn-primary btn-xl text-uppercase">
                        Where have I been?
                    </router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
    header.masthead {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #333;
        background-image: url("/static/img/header-bg.jpg?namespace=vue-personal-page");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    header.masthead .intro-heading {
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 25px;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    header.masthead .intro-subheading {
        font-size: 30px;
        line-height: 30px;
        margin-bottom: 25px;
    }

    @media (min-width: 768px) {
        header.masthead .intro-heading {
            font-size: 75px;
            line-height: 75px;
        }

        header.masthead .intro-subheading {
            font-size: 40px;
            line-height: 40px;
            margin-bottom: 40px;
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
</style>