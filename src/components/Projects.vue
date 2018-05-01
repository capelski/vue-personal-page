<template>
    <div class="navbar-spacer container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <project
                date="April 2018"
                name="Webjack & Webjack-ui"
                description="Seems that blackJack has been my programatic fetish since I first learned to code! I've built it as a desktop application in Visual Basic, as a command line application in Java and, finally, in the format of a nice UI (webjack-ui vue front end) online multiplayer web application"
                githubUrl="https://github.com/L3bowski/webjack"
                url="/webjack"
                :inverted=true
              />
              <project
                date="Feburary 2018"
                name="Vue personal page"
                description="You are in it! After discovering that my previous Angular.js personal page was actually boring (no one visiting my webpage cares about my education/work experience) I decided to build a new one. Before I was only using Angular as an external library for the data bindings. This time I had to do it the right way: webpack, client routing, components, etc. First step: replace Angular with Vue!"
                githubUrl="https://github.com/L3bowski/vue-personal-page"
              />
              <project
                date="2017-2018"
                name="Modena"
                description="After having built many web applications with Node.js and Express, I got fed up of configuring the express server again and again. Also, I needed to find a way to host the web apps in Azure without spending a fortune. The combination of both led me to develop this multi tenant express server which I currently use to host this webpage :)"
                githubUrl="https://github.com/L3bowski/modena"
                :inverted=true
              />
              <project
                date="June 2017"
                name="Jokify"
                description="This website was the combination of two motivations: On one hand I felt I had to make available to everyone all the twitter jokes I was receiving on whatsapp. On the other hand, I wanted to play around with CSS3 animations in order to build some nice UI without using jQuery easings. Here is the result!"
                githubUrl="https://github.com/L3bowski/jokify"
                url="/jokify"
              />
              <project
                date="April 2017"
                name="Fractal Generator"
                description="When I was in college I was asked to write an algorithm in C++ to generate fractal pictures. After many hours of coding I was really proud about the result, but the output looked so miserably on a command line that years later I rescued the code and transformed it to a webpage to make it presentable for everyone"
                url="/fractal-generator"
                githubUrl="https://github.com/L3bowski/fractal-generator"
                :inverted=true
              />
              <project
                date="September 2016"
                name="Dragon Pong"
                description="The company where I worked back then had a ping pong table but not a ranking system to track the scores. How could we possibly know who was the best player? I had to implement this website using Angular and PHP + Excel to find it out! (No, I wasn't working at Dragon Ball Inc. I have changed the name to avoid mentioning the company)"
                url="/dragon-pong"
                githubUrl="https://github.com/L3bowski/dragon-pong"
              />
              <project
                date="March 2016"
                name="Carniques Ausa"
                description="'It must have an interactive pig image!'. That was the sentence that convinced me to build this webpage. Pretty straightforward website with information from the Carniques Ausa company"
                url="/carniques-ausa"
                githubUrl="https://github.com/L3bowski/carniques-ausa"
                :inverted=true
              />
              <project
                date="July 2015"
                name="Vrokil"
                description="Failed attempt! A friend of mine had the idea to import Matterport 3D technology to Spain since back then it had not arrived yet. This website had to be the official webpage of the plane to success that we did not catch"
                url="/vrokil"
                githubUrl="https://github.com/L3bowski/vrokil"
              />
              <project
                date="May 2015"
                name="Angular.js personal page"
                description="Second round! My previous personal page was loading all the pages from server. Time to jump to the SPAs train. Same content than before, but in a single simple page and using the Angular data bindings"
                url="/angularjs-personal-page"
                githubUrl="https://github.com/L3bowski/angularjs-personal-page"
                :inverted=true
              />
              <project
                date="March 2014"
                name="Poliester Pelegrina"
                description="Poliester Pelegrina SCP website, requested by one of the two company owners. Originally built in PHP (now migrated to Node.js). After trying many approaches the different views are managed with jQuery; no server page loads"
                url="/poliester-pelegrina"
                githubUrl="https://github.com/L3bowski/poliester-pelegrina"
              />
              <project
                date="January 2014"
                name="PHP personal page"
                description="My first personal page! Originally built in PHP (now migrated to Node.js). I didn't know much about SPAs and front end development in general; every page is rendered from the server. Reloading needed to change the language"
                url="/php-personal-page"
                githubUrl="https://github.com/L3bowski/php-personal-page"
                :inverted=true
              />
              <project
                date="September 2013"
                name="D.O. Vic Responsive"
                description="Responsive version of the D.O. Vic restaurant version. Unfortunately, the owner of the restaurant decided to close before finishing it"
                url="/responsive-do-vic"
                githubUrl="https://github.com/L3bowski/responsive-do-vic"
              />
              <project
                date="April 2013"
                name="D.O. Vic"
                description="D.O. Vic restaurant website, requested by the owner of the establishment. Allowed consulting useful information of the restaurant, make reservations and download the menus of the local"
                url="/do-vic"
                githubUrl="https://github.com/L3bowski/do-vic"
                :inverted=true
              />
              <project
                date="2012-2013"
                name="Desdecasa"
                description="PHP web page developed on own initiative (with Eudald Bover) that provided information of the bars and restaurants in Vic (city in Barcelona). Additionally, the members of the page could get discounts on the locals"
                url="/desdecasa"
                githubUrl="https://github.com/L3bowski/desdecasa"
              />
              <li>
                <div class="timeline-image">
                  <h4>VB <br /> dark <br /> period</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
import Project from './Project.vue';
export default {
  name: 'Projects',
  components: {
    Project
  }
}
</script>

<style scoped>
.navbar-spacer {
  padding-top: 90px;
}
</style>
