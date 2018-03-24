<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
      <div class="container">
        <!-- <a class="navbar-brand js-scroll-trigger" href="#page-top">That's it</a> -->
        <!-- <router-link to="home" class="navbar-brand js-scroll-trigger">Home</router-link>-->
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <!--<a class="nav-link js-scroll-trigger" href="#services">Projects</a>-->
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <!--<a class="nav-link js-scroll-trigger" href="#services">Projects</a>-->
              <router-link to="/projects" class="nav-link">Projects</router-link>
            </li>
            <li class="nav-item">
              <!--<a class="nav-link js-scroll-trigger" href="#portfolio">Places</a>-->
              <router-link to="/places" class="nav-link">Places</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
</template>