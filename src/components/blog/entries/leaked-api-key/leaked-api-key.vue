<template>
    <BlogEntry
        :date="date"
        description="Article on how to import the Google Maps API through npm and Webpack instead of requiring it with a script tag"
        duration="9"
        :entry="entry"
        :isRenderedFromList="isRenderedFromList"
        :languages="['ENG']"
        :allTags="allTags"
        :tags="[tags.WebDevelopment]"
        :title="title"
    >
        <p>Few days ago I received the following email from Google Cloud Platform. Apparently, I was publishing my Google Maps API key to a public Github repository (for the non-technical audience, I was uploading some kind of password to a social network profile), allowing any smartass clever enough to find it to spend my Google Maps quota on his behalf.</p>
        <div v-if="!isRenderedFromList">
            <p class="text-center">
                <img
                    :src="`${images.googleMail}?$modena=vue-personal-page`"
                    alt="Mail received from Google Cloud Platform"
                />
            </p>
            <p>And indeed, I was! Truth to be told, I was aware of that. When I first built my website I wanted to get it done as quick as possible and I imported the Google Maps code through the lazy way; the good old script tags. Given that almost nobody would visit my website and, even less, take a look at the source code, the strategy was decent enough and I got the job done. This is what my index.html file look like at the time Google sent me the email (note line 26):</p>
            <div ref="initialIndex" class="code-editor"></div>
            <p>The sharp readers will have realized that I did harcode the API key as a query string parameter in the Google Maps script tag. Now, even though I like to think of myself as a generous kind person, sharing an API key with an unknown non thanks giving anonymous crowd is not how I want to demonstrate it. Also, the fact that Google knows that I am doing it makes me feel embarrassed, so let's try to do it better!</p>
            <p>
                My page is using Vue + Webpack so chances were high that I would find a handy library on npm. A
                <a
                    href="https://www.npmjs.com/search?q=vue%20google%20maps"
                    target="_blank"
                >quick npm search</a> returns many potentially interesting results. I gave a chance to the following two:
            </p>
            <ul>
                <li>
                    <b>vue2-google-maps</b>: This one was making Webpack build to fail. I went to the Github repository opened issues (245 at the time of writing) and I found one
                    <a
                        href="https://github.com/xkjyeah/vue-google-maps/issues/472"
                        target="_blank"
                    >reporting the Webpack failure</a> which had been seating there for almost a year
                </li>
                <li>
                    <b>vue-googlemaps</b>: This one gave me a better start and I could get to make it work on development mode. However, when building and deploying the app on production mode I was getting a "You have included the Google Maps JavaScript API multiple times on this page" error which would make the Map to break
                </li>
            </ul>
            <p>
                Having run out of luck on npm, it was time to do some field research on Google. It didn't take me long to find this
                <a
                    href="https://medium.com/@paw145/using-the-google-maps-api-with-webpack-npm-and-a-handy-promise-returning-helper-19c9312971b0"
                    target="_blank"
                >Medium article</a> which explains exactly what I needed; how to use the Google Maps API with Webpack and NPM. In short, I had to install the
                <b>load-google-maps-api</b> module and use the function it exports to asynchronously load the Google Maps API, providing the API key in the configuration parameter. When the promise returning function gets resolved, I can then use the object it returns in the usual fashion:
            </p>
            <div ref="googleMapsCode" class="code-editor"></div>
            <p>
                Almost there! The last missing piece was to use
                <b>dotenv</b> (or any similar tool) to define the API key as an environment variable and keep it away from Github. If you have never used it before, it allows you to define properties in a
                <b>.env</b> file (which must be excluded from Github) and then load them to the
                <b>process.env</b> nodejs global object. Finally, to be sure that I don't break my website by forgetting to define the key in the .env file (or more exactly, to create the whole .env file), I added the following check to the webpack configuration file:
            </p>
            <div ref="webpackCode" class="code-editor"></div>
            <p>
                And that's how to remove google maps hardcoded API keys from public repositories and keep Google happy. Please contact me at
                <b>capellas.carles@gmail.com</b> or check
                <a
                    href="https://github.com/L3bowski/vue-personal-page/commit/fcf068af000ad02b5a38583e44b104edeaeb25cc"
                    target="_blank"
                >this Github commit</a> if you have any doubts on specific details (other than how does Google detect that their API keys are being uploaded to public repositories... isn't it a bit scary?). See you in the next post!
            </p>
        </div>
    </BlogEntry>
</template>

<script>
import BlogEntry from '../../BlogEntry';
import { tags } from '../../tags';
import { createMonacoEditor } from '../monaco-utils';
import entriesRegistry from '../registry';
import googleMail from './google-mail.png';

const date = '2019-06-23';
const entry = entriesRegistry['leaked-api-key'];
const title = 'The leaked API key';

export default {
    name: entry.id,
    components: {
        BlogEntry
    },
    props: ['isRenderedFromList', 'allTags'],
    data() {
        return {
            date,
            entry,
            images: {
                googleMail
            },
            tags,
            title
        };
    },
    mounted() {
        if (!this.isRenderedFromList) {
            createMonacoEditor(
                this.$refs.initialIndex,
                'html',
                // Html must be encoded so that webpack doesn't complain because of unresolvable scripts
                atob(
                    'PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDx0aXRsZT5DYXJsZXMgQ2FwZWxsYXM8L3RpdGxlPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8iIC8+CgogICAgPCEtLSAuLi4gLS0+CgogICAgPCEtLSBCb290c3RyYXAgY29yZSBDU1MgLS0+CiAgICA8bGluayBocmVmPSIvcGx1Z2lucy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiByZWw9InN0eWxlc2hlZXQiPgoKICAgIDwhLS0gQ3VzdG9tIGZvbnRzIGZvciB0aGlzIHRlbXBsYXRlIC0tPgogICAgPGxpbmsgaHJlZj0iL3BsdWdpbnMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyIgcmVsPSJzdHlsZXNoZWV0IiB0eXBlPSJ0ZXh0L2NzcyI+CiAgICA8bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwIiByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIj4KICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCcgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2Nzcyc+CiAgICA8bGluayBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK1NsYWI6NDAwLDEwMCwzMDAsNzAwJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJz4KPC9oZWFkPgo8Ym9keSBpZD0icGFnZS10b3AiPgogICAgPGRpdiBpZD0iYXBwIj48L2Rpdj4KCiAgICA8IS0tIEJvb3RzdHJhcCBjb3JlIEphdmFTY3JpcHQgLS0+CiAgICA8c2NyaXB0IHNyYz0iL3BsdWdpbnMvanF1ZXJ5L2pxdWVyeS5taW4uanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Ii9wbHVnaW5zL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lDT3VGR0s0RHB0b1VwLWg5RW9qYjNIblZRUFdYaXZfRW8iIHR5cGU9InRleHQvamF2YXNjcmlwdCI+PC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPg=='
                )
            );

            createMonacoEditor(
                this.$refs.googleMapsCode,
                'javascript',
                `import loadGoogleMapsApi from 'load-google-maps-api';

loadGoogleMapsApi({ key: process.env.MAPS_API_KEY })
    .then(googleMaps => {
        const map = new googleMaps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new googleMaps.LatLng(41.3850639, 2.1734035)
        });
        const infowindow = new googleMaps.InfoWindow();
        for (let i = 0; i < markers.length; i++) {
            const markerData = markers[i];
            const marker = new googleMaps.Marker({
                position: new googleMaps.LatLng(markerData.lat, markerData.lng),
                map: map
            });
            googleMaps.event.addListener(
                marker,
                'click',
                () => {
                    infowindow.setContent(markerData.label);
                    infowindow.open(map, marker);
                }
            );
        }
    });`
            );

            createMonacoEditor(
                this.$refs.webpackCode,
                'javascript',
                `const envConfig = require('dotenv').config();
if (envConfig.error || !envConfig.parsed.MAPS_API_KEY) {
    throw 'The Google Maps API key must be provided through a .env file to build/start the app';
}`
            );
        }
    }
};
</script>
