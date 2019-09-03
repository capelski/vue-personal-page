<template>
    <nav id="main-nav" class="navbar navbar-expand-md navbar-dark fixed-top navbar-shrink">
        <div class="container">
            <button
                ref="menuButton"
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fa fa-bars fa-2x"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                        <a
                            class="clickable"
                            @click="switchTheme"
                        >
                            <span class="theme-switcher">&#127767;</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" @click.native="closeMenu">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link" @click.native="closeMenu">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link" @click.native="closeMenu">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/trips" class="nav-link" @click.native="closeMenu">Trips</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" target="_blank" @click="closeMenu" href="/pdf/cv.pdf?$modena=vue-personal-page">CV</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                theme: ''
            };
        },
        methods: {
            closeMenu() {
                if(!window.matchMedia('(min-width: 768px)').matches) {
                    this.$refs.menuButton.click();
                }
            },
            switchTheme() {
                this.theme = this.theme === '' ? 'dark' : '';
                window.document.querySelector('html').className = this.theme; 
                window.document.querySelector('body').className = this.theme; 
            }
        }
    }
</script>

<style>
    #main-nav {
        background-color: #212529;
    }

    .dark #main-nav {
        border-bottom: 1px solid #D2D3D4;
    }

    .theme-switcher {
        padding: 0.6em 0.4em;
        font-size: 20px;
        display: inline-block;
        transition-duration: 0.8s;
        transition-property: transform;
    }

    .dark .theme-switcher {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
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

    #main-nav .navbar-nav .nav-item .nav-link {
        font-size: 15px;
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
        #main-nav .navbar-nav .nav-item .nav-link {
            padding: 1.1em 1em !important;
        }
        #main-nav.navbar-shrink {
            padding-top: 0;
            padding-bottom: 0;
            background-color: #212529;
        }
    }
</style>