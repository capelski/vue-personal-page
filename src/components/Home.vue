<template>
    <div class="navbar-spacer">
        <header class="masthead">
            <div class="intro-text">
                <div class="intro-lead-in">Get to know something about me</div>
                <div class="intro-heading text-uppercase">Carles Capellas</div>

                <router-link to="projects" class="btn btn-primary btn-xl text-uppercase">
                    What have I built?
                </router-link>
                <router-link to="places" class="btn btn-primary btn-xl text-uppercase">
                    Where have I been?
                </router-link>
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

    header.masthead .intro-text {
        padding: 0;  
    }

    header.masthead .intro-text .intro-lead-in {
        font-size: 22px;
        font-style: italic;
        line-height: 22px;
        margin-bottom: 25px;
        font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    header.masthead .intro-text .intro-heading {
        font-size: 50px;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 25px;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    @media (min-width: 768px) {
        header.masthead .intro-text .intro-lead-in {
            font-size: 40px;
            font-style: italic;
            line-height: 40px;
            margin-bottom: 25px;
            font-family: 'Droid Serif', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        header.masthead .intro-text .intro-heading {
            font-size: 75px;
            font-weight: 700;
            line-height: 75px;
            margin-bottom: 50px;
            font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
    }
</style>