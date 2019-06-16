<template>
    <nav id="main-nav" class="navbar navbar-expand-md navbar-dark fixed-top navbar-shrink">
        <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars fa-2x"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/places" class="nav-link">Places</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" href="/pdf/cv.pdf?$modena=vue-personal-page">CV</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
    #main-nav {
        background-color: #212529;
    }

    #main-nav.navbar {
        padding-top: 0;
        padding-bottom: 0;
    }

    #main-nav .navbar-toggler {
        font-size: 12px;
        right: 0;
        padding: 13px;
        text-transform: uppercase;
        color: white;
        border: 0;
    }

    #main-nav .navbar-brand {
        color: #fed136;
        font-family: 'Kaushan Script', 'Helvetica Neue', Helvetica, Arial, cursive;
    }

    #main-nav .navbar-brand.active, #main-nav .navbar-brand:active, #main-nav .navbar-brand:focus, #main-nav .navbar-brand:hover {
        color: #fec503;
    }

    #main-nav .navbar-nav .nav-item .nav-link {
        font-size: 90%;
        font-weight: 400;
        padding: 0.75em 0;
        letter-spacing: 1px;
        color: white;
        font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #main-nav .navbar-nav .nav-item .nav-link.active, #main-nav .navbar-nav .nav-item .nav-link:hover {
        color: #fed136;
    }

    @media (min-width: 768px) {
        #main-nav {
            padding-top: 25px;
            padding-bottom: 25px;
            -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
            -moz-transition: padding-top 0.3s, padding-bottom 0.3s;
            transition: padding-top 0.3s, padding-bottom 0.3s;
            border: none;
            background-color: transparent;
        }
        #main-nav .navbar-brand {
            font-size: 1.75em;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            transition: all 0.3s;
        }
        #main-nav .navbar-nav .nav-item .nav-link {
            padding: 1.1em 1em !important;
        }
        #main-nav.navbar-shrink {
            padding-top: 0;
            padding-bottom: 0;
            background-color: #212529;
        }
        #main-nav.navbar-shrink .navbar-brand {
            font-size: 1.25em;
            padding: 12px 0;
        }
    }
</style>