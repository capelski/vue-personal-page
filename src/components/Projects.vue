<template>
    <div class="container navbar-spacer">
        <ul class="timeline">
            <project
                v-for="(project, index) in projects"
                v-bind:key="project.name"
                :date="project.date"
                :name="project.name"
                :description="project.description"
                :githubUrl="project.githubUrl"
                :url="project.url"
                :inverted="(index % 2 == 0)"
            />
            <li class="timeline-item">
                <div class="timeline-image">
                    <h4>
                        VB
                        <br />dark
                        <br />period
                    </h4>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Project from './Project.vue';
export default {
    name: 'Projects',
    components: { Project },
    metaInfo: {
        title: 'Projects',
        meta: [
            {
                name: 'description',
                content:
                    'The list of personal web projects I have developed over the years: node.js, typescript, webpack, Vue, SASS, etc.'
            }
        ]
    },
    data() {
        return {
            projects: [
                {
                    date: 'March 2020 - April 2020',
                    name: 'Sudoku generator',
                    description:
                        'My mom has always been a fan of sudoku puzzles. Someday we were wondering how the sudoku are generated and I decided to figure it out with this website',
                    githubUrl: 'https://github.com/L3bowski/sudoku-generator',
                    url: '/sudoku-generator'
                },
                {
                    date: 'December 2019 - January 2020',
                    name: 'Bachata science',
                    description:
                        'Website for myself to remember bachata steps when I go to the clubs, made out of videos from dance classes. Built with React function components and nicely tested with Cucumber.js. husky, prettier and ts-lint are also invited to the party',
                    githubUrl: 'https://github.com/L3bowski/bachata-science',
                    url: '/bachata-science'
                },
                {
                    date: 'September 2019 - December 2019',
                    name: 'Skills matrix VIII: GraphQL',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Starting from the previous Node.js version of the Api, I am replacing the traditional REST Api with a GraphQL schema. Also migrating from mysql to postgresql',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-api-graphql',
                    url: '/skills-matrix-api-graphql'
                },
                {
                    date: 'April 2019 - January 2020',
                    name: 'Cucumber steps parser',
                    description:
                        'Part of the platform testing automation we did at Sage consists in a set of cucumber.js step definitions for platform users to write their own integration tests. Using this project we retrieve the existing cucumber.js sentences from the step definition files and provide them to platform users',
                    githubUrl: 'https://github.com/L3bowski/cucumber-steps-parser',
                    url: 'https://www.npmjs.com/package/cucumber-steps-parser'
                },
                {
                    date: 'February 2019',
                    name: 'Vue Server Side Rendering',
                    description:
                        'After assisting to many <a href="https://www.meetup.com/VueJS-BCN/">VueJS Barcelona</a> meetups I felt I had to contribute back to the community. I investigated how the Server Side Rendering can be done with Vue and explained my findings in this talk',
                    githubUrl: 'https://github.com/L3bowski/vue-ssr-tutorial',
                    url: 'https://www.youtube.com/watch?v=uWsAFV14Svw'
                },
                {
                    date: 'November 2018',
                    name: 'Michael Page',
                    description:
                        'Tribute page to all the Michaels of the world. Who doesn\'t have a Micheal in their life? It was once uploaded to <a href="https://michael.page">https://michael.page</a>, but the domain name is exclusive and expensive...',
                    githubUrl: 'https://github.com/L3bowski/michael',
                    url: '/michael'
                },
                {
                    date: 'April 2018 - Present',
                    name: 'Webjack',
                    description:
                        "Seems that blackJack has been my programatic fetish since I first learned to code! I've built it as a desktop application in Visual Basic, as a command line application in Java and, finally, in the format of a nice UI (webjack-ui vue front end) online multiplayer web application",
                    githubUrl: 'https://github.com/L3bowski/webjack',
                    url: '/webjack'
                },
                {
                    date: 'Feburary 2018 - Present',
                    name: 'Vue personal page',
                    description:
                        'You are in it! After discovering that my previous Angular.js personal page was actually boring (no one visiting my webpage cares about my education/work experience) I decided to build a new one. Before I was only using Angular as an external library for the data bindings. This time I had to do it the right way: webpack, client routing, components, etc. First step: replace Angular with Vue!',
                    githubUrl: 'https://github.com/L3bowski/vue-personal-page'
                },
                {
                    date: 'August 2017 - September 2017',
                    name: 'Videocall.js',
                    description:
                        'Videocalls between two users directly from browser to browser. After being introduced to WebRTC standards in the Barcelona Angular Camp I decided to split the sample code (originally built on Nuxt) into simple server and client applications',
                    githubUrl: 'https://github.com/L3bowski?tab=repositories&q=videocall'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix VII: Typescript',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Starting from the Vue.js version, adding type safety through Typescript. Never get an exception in run time again!',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-client-typescript',
                    url: '/skills-matrix-client-typescript'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix VI: Vue.js',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Starting from scratch, new version of the web application based on the Vue.js framework, which implements all of the previous concepts plus efficient DOM elements manipulation and allowing to split the HTML code in multiple files',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-client-vue',
                    url: '/skills-matrix-client-vue'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix V: Webpack',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Starting off from the Redux version, adding Webpack to manage the dependencies through import statements rather than relying on the order sensitive index.html script tags',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-client-webpack',
                    url: '/skills-matrix-client-webpack'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix IV: Redux',
                    description:
                        "<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Starting off from the jQuery version, I introudce ECMA Script 6 and add Redux to manage the application state (as the excuse to justify the usage of ECMA 6). Don't miss the time travel debbuging!",
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-client-redux',
                    url: '/skills-matrix-client-redux'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix III: jQuery',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />Implementation of the Single Page Application concept using only jQuery, having all the application HTML in a single file',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-client-jquery',
                    url: '/skills-matrix-client-jquery'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix II: Web API',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />In order to bring the Single Page Application concept into play a web API is required. I implemented one in .NET Core and another in Node.js to compare the two frameworks in the process',
                    githubUrl: 'https://github.com/L3bowski?tab=repositories&q=skills-matrix-api'
                },
                {
                    date: 'June 2017 - December 2017',
                    name: 'Skills matrix I',
                    description:
                        '<i>Simple web with representative features used in modern applications (e.g. lists pagination and referenced entities) meant to illustrate the evolution of web development.</i><br /><br />The first version consists in a .NET Core MVC + WebAPI patterns along with static HTML pages controlled through jQuery (very common architecture when I started working in .NET, 2014)',
                    githubUrl: 'https://github.com/L3bowski/skills-matrix-mvc'
                },
                {
                    date: 'April 2017 - Present',
                    name: 'Jokify',
                    description:
                        'This website was the combination of two motivations: On one hand I felt I had to make available to everyone all the twitter jokes I was receiving on whatsapp. On the other hand, I wanted to play around with CSS3 animations in order to build some nice UI without using jQuery easings. Here is the result!',
                    githubUrl: 'https://github.com/L3bowski/jokify',
                    url: '/jokify'
                },
                {
                    date: 'March 2017',
                    name: 'Fractal Generator',
                    description:
                        'When I was in college I was asked to write an algorithm in C++ to generate fractal pictures. After many hours of coding I was really proud about the result, but the output looked so miserably on a command line that years later I rescued the code and transformed it to a webpage to make it presentable for everyone',
                    url: '/fractal-generator',
                    githubUrl: 'https://github.com/L3bowski/fractal-generator'
                },
                {
                    date: 'February 2017 - Present',
                    name: 'Modena',
                    description:
                        'After having built many web applications with Node.js and Express, I got fed up of configuring the express server again and again. Also, I needed to find a way to host the web apps in Azure without spending a fortune. The combination of both led me to develop this multi tenant express server which I currently use to host this webpage :)',
                    url: 'https://www.npmjs.com/package/modena',
                    githubUrl: 'https://github.com/L3bowski/modena'
                },
                {
                    date: 'September 2016',
                    name: 'Dragon Pong',
                    description:
                        "The company where I worked back then had a ping pong table but not a ranking system to track the scores. How could we possibly know who was the best player? I had to implement this website using Angular and PHP + Excel to find it out! (No, I wasn't working at Dragon Ball Inc. I have changed the name to avoid mentioning the company)",
                    url: '/dragon-pong',
                    githubUrl: 'https://github.com/L3bowski/dragon-pong'
                },
                {
                    date: 'March 2016',
                    name: 'Carniques Ausa',
                    description:
                        '"It must have an interactive pig image!". That was the sentence that convinced me to build this webpage. Pretty straightforward website with information from the Carniques Ausa company',
                    url: '/carniques-ausa',
                    githubUrl: 'https://github.com/L3bowski/carniques-ausa'
                },
                {
                    date: 'July 2015',
                    name: 'Vrokil',
                    description:
                        'Failed attempt! A friend of mine had the idea to import Matterport 3D technology to Spain since back then it had not arrived yet. This website had to be the official webpage of the plane to success that we did not catch',
                    url: '/vrokil',
                    githubUrl: 'https://github.com/L3bowski/vrokil'
                },
                {
                    date: 'May 2015',
                    name: 'Angular.js personal page',
                    description:
                        'Second round! My previous personal page was loading all the pages from server. Time to jump to the SPAs train. Same content than before, but in a single simple page and using the Angular data bindings',
                    url: '/angularjs-personal-page',
                    githubUrl: 'https://github.com/L3bowski/angularjs-personal-page'
                },
                {
                    date: 'January 2015',
                    name: 'PHP personal page',
                    description:
                        "My first personal page! Originally built in PHP (now migrated to Node.js). I didn't know much about SPAs and front end development in general; every page is rendered from the server. Reloading needed to change the language",
                    url: '/php-personal-page',
                    githubUrl: 'https://github.com/L3bowski/php-personal-page'
                },
                {
                    date: 'March 2014',
                    name: 'Poliester Pelegrina',
                    description:
                        'Poliester Pelegrina SCP website, requested by one of the two company owners. Originally built in PHP (now migrated to Node.js). After trying many approaches the different views are managed with jQuery; no server page loads',
                    url: '/poliester-pelegrina',
                    githubUrl: 'https://github.com/L3bowski/poliester-pelegrina'
                },
                {
                    date: 'September 2013',
                    name: 'D.O. Vic Responsive',
                    description:
                        'Responsive version of the D.O. Vic restaurant version. Unfortunately, the owner of the restaurant decided to close before finishing it',
                    url: '/responsive-do-vic',
                    githubUrl: 'https://github.com/L3bowski/responsive-do-vic'
                },
                {
                    date: 'April 2013',
                    name: 'D.O. Vic',
                    description:
                        'D.O. Vic restaurant website, requested by the owner of the establishment. Allowed consulting useful information of the restaurant, make reservations and download the menus of the local',
                    url: '/do-vic',
                    githubUrl: 'https://github.com/L3bowski/do-vic'
                },
                {
                    date: '2012 - 2013',
                    name: 'Desdecasa',
                    description:
                        'PHP web page developed on own initiative (with Eudald Bover) that provided information of the bars and restaurants in Vic (city in Barcelona). Additionally, the members of the page could get discounts on the locals',
                    url: '/desdecasa',
                    githubUrl: 'https://github.com/L3bowski/desdecasa'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import '../scss/globals.scss';

.timeline {
    position: relative;
    padding: 0;
    list-style: none;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 40px;
        width: 2px;
        margin-left: -1.5px;
        content: '';
        background-color: #e9ecef;

        @media (min-width: $medium) {
            left: 50%;
        }
    }
}
</style>
