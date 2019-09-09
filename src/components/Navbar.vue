<template>
    <nav id="main-nav" class="navbar navbar-expand-md fixed-top navbar-shrink">
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
                            class="theme-switcher clickable"
                            @click="switchTheme"
                        >
                            <span>&#127767;</span>
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

<style lang="scss">
    @import '../scss/globals.scss';

    #main-nav.navbar {
        padding-top: 0;
        padding-bottom: 0;
        background-color: $primary-dark;

        .theme-switcher {
            display: block;
            padding: 10px;
            font-size: 19px;

            span {
                display: inline-block;
                transition-duration: 0.8s;
                transition-property: transform;
            }
        }

        .navbar-toggler {
            font-size: 12px;
            right: 0;
            padding: 13px;
            text-transform: uppercase;
            color: white;
            border: 0;
        }

        .navbar-nav .nav-item .nav-link {
            font-size: 15px;
            line-height: 24px;
            font-weight: 400;
            padding: 13px;
            letter-spacing: 1px;
            color: white;
            font-family: $font-secondary;

            &.router-link-exact-active,
            &:hover {
                color: $primary;
            }
        }
    }

    .dark {
        #main-nav.navbar {
            border-bottom: 1px solid $primary-grey;

            .theme-switcher span {
                transform: rotate(180deg);
                -webkit-transform: rotate(180deg);
            }
        }
    }
</style>